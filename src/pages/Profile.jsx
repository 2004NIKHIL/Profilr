import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";
import RepoCard from "../components/RepoCard";
import FlickerSpinner from "../components/FlickerSpinner";

function Profile() {
  const { username } = useParams();
  const [repo, setRepo] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setrole] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const [bio, setIsbio] = useState("");
  const [isEditingBio, setIsEditingBio] = useState(true);
  const [SelectedRepos, setSelectedRepos] = useState([]);
  const [featuredRepos, setFeaturedRepos] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchSupabaseProfile = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("github_username", username)
        .maybeSingle(); // maybeSingle gracefully returns null if the user hasn't created a profile yet

      if (data) {
        setrole(data.role || "");
        setIsbio(data.bio || "");
        setSelectedRepos(data.selected_repos || []);
        setIsSaved(true);
        setIsEditing(false);
        setIsEditingBio(false);
      }
    };

    const fetchRepo = () => {
      fetch(`https://api.github.com/users/${username}/repos`)
        .then((res) => res.json())
        .then((data) => {
          // Safety Check: Forces it to be an array even if GitHub returns a rate-limit error object!
          setRepo(Array.isArray(data) ? data : []);
        })
        .catch((err) => setRepo([]));
    };

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => setLoading(false));

    fetchSupabaseProfile();
    fetchRepo();
  }, [username]);

  if (loading) return null;
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    : username
      ? username[0].toUpperCase()
      : "?";

  const handleSave = async () => {
    setErrorMessage(""); // Clears any old errors when you try to save again
    try {
      const { error } = await supabase.from("profiles").upsert({
        github_username: username,
        role: role,
        bio: bio,
        selected_repos: SelectedRepos,
      });

      if (error) throw error;

      console.log("Profile saved successfully to Supabase!");
      setIsSaved(true);
    } catch (error) {
      console.error("Error saving profile:", error.message);
      setErrorMessage(error.message); // Puts the exact Supabase error on the screen instead of a popup
    }
  };

  return (
    <div className="box-container">
      <div className="profile-box">
        <div className="window-header">
          <div className="traffic-lights">
            <span className="dot-red"></span>
            <span className="dot-yellow"></span>
            <span className="dot-green"></span>
          </div>
          <div className="add-pill">profilr.app/{username}</div>
          <div>
            <button className="share-btn">Share</button>
          </div>
        </div>
        <div className="profile-content">
          <div className="intro-profile">
            <div className="Avatar">{initials}</div>
            <p className="profile-name">
              {user?.name
                ? user.name.toUpperCase()
                : username?.toUpperCase() || "UNKNOWN"}{" "}
              ({username || "unknown"})
            </p>
            <div className="role">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    placeholder="Enter the role......"
                    value={role.toUpperCase()}
                    onChange={(e) => setrole(e.target.value)}
                  ></input>
                  <div className="save-box" onClick={() => setIsEditing(false)}>
                    {" "}
                    ✓
                  </div>
                </>
              ) : (
                <>
                  <span>{role.toUpperCase()}</span>
                  <div
                    className="after-save"
                    onClick={() => setIsEditing(true)}
                  >
                    <button>EDIT</button>
                  </div>
                </>
              )}
            </div>
            <div className="bio">
              {isEditingBio ? (
                <>
                  <textarea
                    value={bio}
                    onChange={(e) => setIsbio(e.target.value)}
                    placeholder="Enter the bio..."
                    rows={5}
                  />
                  <div
                    className="save-box"
                    onClick={() => setIsEditingBio(false)}
                  >
                    ✓
                  </div>
                </>
              ) : (
                <>
                  <span>{bio || "No bio yet."}</span>
                  <div
                    className="after-save"
                    onClick={() => setIsEditingBio(true)}
                  >
                    <button>EDIT</button>
                  </div>
                </>
              )}
            </div>
            <div className="stat-box">
              <div className="stat">
                {user?.followers ?? 0}
                <p>Followers</p>
              </div>
              <div className="stat">
                {user?.following ?? 0}
                <p>Following</p>
              </div>
              <div className="stat">
                {user?.public_repos ?? 0}
                <p>Repos</p>
              </div>
            </div>
          </div>
          <div className="repos-box">
            <h2>Repositories</h2>

            {repo
              .filter((r) => (isSaved ? SelectedRepos.includes(r.name) : true))
              .map((r) => (
                <div
                  key={r.id}
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  {!isSaved && (
                    <button
                      className={`spinner-btn ${SelectedRepos.includes(r.name) ? "selected" : ""}`}
                      onClick={() => {
                        if (SelectedRepos.includes(r.name)) {
                          setSelectedRepos(
                            SelectedRepos.filter((name) => name !== r.name),
                          );
                        } else {
                          setSelectedRepos([...SelectedRepos, r.name]);
                        }
                      }}
                    >
                      <FlickerSpinner size={28} />
                    </button>
                  )}
                  <div style={{ flex: 1 }}>
                    <RepoCard repo={r} />
                  </div>
                </div>
              ))}
            <div className="save-btn">
              {errorMessage && (
                <span
                  style={{
                    color: "#ff5f57",
                    alignSelf: "center",
                    marginRight: "15px",
                    fontSize: "13px",
                  }}
                >
                  Error: {errorMessage}
                </span>
              )}
              {isSaved ? (
                <button onClick={() => setIsSaved(false)}>Edit</button>
              ) : (
                <button onClick={handleSave}>Save</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
