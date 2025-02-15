import { CloudSunFill } from "react-bootstrap-icons";
import AirportSelector from "../components/airportSelector";

function Navbar() {
  return (
    <div className="navbar absolute-0 py-5 top-0 bg-primary text-primary-content shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">
          <CloudSunFill />
          AvWeather
        </a>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end">
        <span className="mr-3">Select Airport</span>
        <AirportSelector />
      </div>
    </div>
  );
}

export default Navbar;
