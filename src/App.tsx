import { useState } from "react";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import { UserContext } from "./sharedData";

import Welcome from "./welcome";
import AirportView from "./airportView";

import "./App.css";

function AirportDisplay(props: { airport: string }) {
  if (props.airport == "WELCOME") {
    return <Welcome />;
  } else {
    return <AirportView />;
  }
}

function App() {
  const [airport, setAirport] = useState("WELCOME");

  return (
    <>
      <UserContext.Provider
        value={{ airport: airport, setAirport: setAirport }}
      >
        <Navbar />
        <div className="pt-12 pb-24 px-12">
          <AirportDisplay airport={airport} />
        </div>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
