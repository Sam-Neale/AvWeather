import { CloudSunFill } from "react-bootstrap-icons";
import airportData from "./assets/airportData.json";

function updatedAirport(e) {
  console.log(e.target.value);
}

function Welcome() {
  return (
    <div>
      <h1 className="text-4xl font-bold">
        <span className="whitespace-nowrap">
          Welcome to <CloudSunFill className="inline-block mb-3" /> AvWeather,
        </span>
      </h1>
      <p>Select an airport below</p>
      <hr />
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Airports</legend>
        <select
          onChange={updatedAirport}
          defaultValue="Pick an airport"
          className="select"
        >
          <option disabled={true}>Pick an airport</option>
          {airportData.map((airport) => {
            return (
              <option value={airport.code}>
                ({airport.code}) {airport.name}
              </option>
            );
          })}
        </select>
      </fieldset>
    </div>
  );
}

export default Welcome;
