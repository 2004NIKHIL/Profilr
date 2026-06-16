import "./Preview.css";

const repos = [
  { name: "portfolio-engine", language: "React", stars: 128, status: "Featured" },
  { name: "api-notes", language: "Node", stars: 74, status: "Active" },
  { name: "ui-lab", language: "CSS", stars: 52, status: "Polished" },
];

function Preview() {
  return (
    <section className="preview-section" aria-label="Profile preview">
      <div className="preview-window">
        <div className="preview-titlebar">
          <div className="window-controls" aria-hidden="true">
            <span className="control red"></span>
            <span className="control yellow"></span>
            <span className="control green"></span>
          </div>
          <div className="preview-url">profilr.app/nikhil</div>
        </div>

        <div className="preview-content">
          <aside className="profile-panel">
            <div className="avatar">NK</div>
            <div>
              <p className="profile-name">Nikhil Kumar</p>
              <p className="profile-role">Frontend Developer</p>
            </div>
            <p className="profile-bio">
              Building clean interfaces, useful tools, and developer-first web
              experiences.
            </p>
            <div className="profile-stats">
              <span>
                <strong>42</strong>
                Repos
              </span>
              <span>
                <strong>1.8k</strong>
                Stars
              </span>
              <span>
                <strong>312</strong>
                Commits
              </span>
            </div>
          </aside>

          <main className="preview-main">
            <div className="preview-heading">
              <div>
                <p className="section-kicker">Generated Showcase</p>
                <h2>Your GitHub, presented like a product page.</h2>
              </div>
              <button type="button">Share</button>
            </div>

            <div className="contribution-card">
              <div>
                <p>Contribution activity</p>
                <strong>Consistent builder</strong>
              </div>
              <div className="heatmap" aria-hidden="true">
                {Array.from({ length: 45 }).map((_, index) => (
                  <span key={index} className={`cell level-${index % 5}`}></span>
                ))}
              </div>
            </div>

            <div className="repo-grid">
              {repos.map((repo) => (
                <article className="repo-card" key={repo.name}>
                  <div>
                    <p className="repo-status">{repo.status}</p>
                    <h3>{repo.name}</h3>
                  </div>
                  <div className="repo-meta">
                    <span>{repo.language}</span>
                    <span>{repo.stars} stars</span>
                  </div>
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

export default Preview;
