import airportData from "./../assets/airportData.json";
import { UserContext } from "./../sharedData";
import React from "react";

function AirportSelector() {
  const { airport, setAirport } = React.useContext(UserContext);

  function updatedAirport(e: { target: { value: string } }) {
    if (e.target.value) {
      setAirport(e.target.value);
      window.localStorage.setItem("currentAirport", e.target.value);
      console.log(e.target.value);
    }
  }
  const preselectedAirport = window.localStorage.getItem("currentAirport");
  setTimeout(() => {
    updatedAirport({
      target: { value: preselectedAirport ? preselectedAirport : "" },
    });
  }, 1000);

  return (
    <fieldset className="fieldset">
      <select
        onChange={updatedAirport}
        defaultValue={
          preselectedAirport ? preselectedAirport : "Pick an airport"
        }
        className="select select-primary bg-neutral"
      >
        <option disabled={true}>Pick an airport</option>
        <optgroup label="VIC - Victoria">
          {airportData
            .filter((airport) => airport.state === "VIC")
            .map((airport) => {
              return (
                <option key={airport.code} value={airport.code}>
                  ({airport.code}) {airport.name}
                </option>
              );
            })}
        </optgroup>
        <optgroup label="NSW - New South Wales">
          {airportData
            .filter((airport) => airport.state === "NSW")
            .map((airport) => {
              return (
                <option key={airport.code} value={airport.code}>
                  ({airport.code}) {airport.name}
                </option>
              );
            })}
        </optgroup>
        <optgroup label="ACT - Australian Capital Territory">
          {airportData
            .filter((airport) => airport.state === "ACT")
            .map((airport) => {
              return (
                <option key={airport.code} value={airport.code}>
                  ({airport.code}) {airport.name}
                </option>
              );
            })}
        </optgroup>
        <optgroup label="SA - South Australia">
          {airportData
            .filter((airport) => airport.state === "SA")
            .map((airport) => {
              return (
                <option key={airport.code} value={airport.code}>
                  ({airport.code}) {airport.name}
                </option>
              );
            })}
        </optgroup>
        <optgroup label="QLD - Queensland">
          {airportData
            .filter((airport) => airport.state === "QLD")
            .map((airport) => {
              return (
                <option key={airport.code} value={airport.code}>
                  ({airport.code}) {airport.name}
                </option>
              );
            })}
        </optgroup>
        <optgroup label="WA - Western Australia">
          {airportData
            .filter((airport) => airport.state === "WA")
            .map((airport) => {
              return (
                <option key={airport.code} value={airport.code}>
                  ({airport.code}) {airport.name}
                </option>
              );
            })}
        </optgroup>

        <optgroup label="TAS - Tasmania">
          {airportData
            .filter((airport) => airport.state === "TAS")
            .map((airport) => {
              return (
                <option key={airport.code} value={airport.code}>
                  ({airport.code}) {airport.name}
                </option>
              );
            })}
        </optgroup>
        <optgroup label="NT - Northern Territory">
          {airportData
            .filter((airport) => airport.state === "NT")
            .map((airport) => {
              return (
                <option key={airport.code} value={airport.code}>
                  ({airport.code}) {airport.name}
                </option>
              );
            })}
        </optgroup>
      </select>
    </fieldset>
  );
}

export default AirportSelector;
