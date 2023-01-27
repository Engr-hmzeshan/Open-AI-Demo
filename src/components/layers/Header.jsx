import { Link } from "react-router-dom";
function Header() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Open AI Demo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/generate/image" className="nav-link">
                  Generate Image
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/grammar/correction" className="nav-link">
                  Grammar Correction
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
