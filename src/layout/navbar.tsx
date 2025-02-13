import { CloudSunFill } from "react-bootstrap-icons";

function Navbar() {
  return (
    <div className="navbar absolute top-0 bg-primary text-primary-content shadow-sm">
      <a className="btn btn-ghost text-xl">
        {" "}
        <CloudSunFill />
        AvWeather
      </a>
    </div>
  );
}

export default Navbar;
