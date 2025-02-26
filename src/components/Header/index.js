import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">NS</p>
      <ul className="nav-menu">
        <li>
          <a
            href=" https://www.linkedin.com/in/nenavath-suresh/"
            target="_blank"
          >
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
              alt="Linked In"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/sureshnenavath" target="_blank">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
              alt="Git Hub"
            />
          </a>
        </li>
        <li>
          <a href="https://x.com/n_s_u_r_e_s_h" target="_blank">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
              alt="Twitter"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
