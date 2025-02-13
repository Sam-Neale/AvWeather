import { useState } from "react";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";

import Welcome from "./welcome";

import "./App.css";

function AirportSelector(props: { airport: string }) {
  switch (props.airport) {
    case "WELCOME":
      return <Welcome />;
    default:
      return <Welcome />;
  }
}

function App() {
  const [airport, setAirport] = useState("WELCOME");

  return (
    <>
      <Navbar />
      <div className="py-24 px-12">
        <AirportSelector airport={airport} />
      </div>
      <Footer />
    </>
  );
}

export default App;
