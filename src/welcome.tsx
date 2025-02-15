import { CloudSunFill } from "react-bootstrap-icons";
import airportData from "./assets/airportData.json";
import { UserContext } from "./sharedData";
import React from "react";
import AirportSelector from "./components/airportSelector";

function Welcome() {
  const { airport, setAirport } = React.useContext(UserContext);

  return (
    <div>
      <h1 className="text-4xl font-bold">
        <span className="whitespace-nowrap">
          Welcome to <CloudSunFill className="inline-block mb-3" /> AvWeather,
        </span>
      </h1>
      <p className="text-lg">
        Please select an airport from the dropdown above to get started.
      </p>
    </div>
  );
}

export default Welcome;
