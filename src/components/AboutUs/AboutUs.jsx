import "./AboutUs.css";
import { Outlet, Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us">
      <ul className="links">
        <li>
          <Link to="site-history">History</Link>
        </li>
        <li>
          <Link to="site-mission">Mission</Link>
        </li>
      </ul>
      <p>You can find out more information about our site here.</p>
      <Outlet />
    </div>
  );
}

export default AboutUs;
