import "./RepoCard.css";

const LANGUAGE_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C++": "#f34b7d",
  "C#": "#178600",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Go: "#00ADD8",
  Rust: "#dea584",
  Swift: "#F05138",
};

function RepoCard({ repo }) {
  return (
    <div className="repo-card">
      <h3>{repo.name}</h3>
      <p>{repo.description || "No description available"}</p>
      <div className="repo-footer">
        {repo.language && (
          <div className="repo-language">
            <span
              className="language-dot"
              style={{
                backgroundColor: LANGUAGE_COLORS[repo.language] || "#8b949e",
              }}
            ></span>
            <span>{repo.language}</span>
          </div>
        )}
        <a
          href={repo.homepage || repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="live-btn"
        >
          Live
        </a>
      </div>
    </div>
  );
}
export default RepoCard;
