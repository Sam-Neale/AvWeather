//import { CloudSunFill } from "react-bootstrap-icons";
import airportData from "./assets/airportData.json";
import { UserContext } from "./sharedData";
import React, { useEffect, useState } from "react";
import fetchTAF from "./fetchTAF";

function AirportView() {
  const { airport, setAirport } = React.useContext(UserContext);

  const currentAirport = airportData.find((a) => a.code === airport);

  const [localTime, setLocalTime] = useState("N/A");
  const [utcTime, setUtcTime] = useState("N/A");

  useEffect(() => {
    const updateTimes = () => {
      if (currentAirport) {
        setLocalTime(
          new Intl.DateTimeFormat("en-AU", {
            timeZone: currentAirport.dateIdentifier,
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hourCycle: "h23",
          }).format(new Date())
        );
      }

      setUtcTime(
        new Intl.DateTimeFormat("en-AU", {
          month: "numeric",
          day: "numeric",
          timeZone: "UTC",
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23",
        }).format(new Date())
      );
    };

    updateTimes();
    const intervalId = setInterval(updateTimes, 1000);

    return () => clearInterval(intervalId);
  }, [currentAirport]);

  return (
    <div>
      <div
        className="hero "
        style={{
          backgroundImage: `url(/${currentAirport?.imageName})`,
          backgroundPosition: `${currentAirport?.imagePosition || "center"}`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content  py-30 text-neutral-content text-center">
          <div className="max-w-lg text-center justify-center flex flex-col">
            <h1 className="mb-5 text-5xl text-primary-content font-bold">
              {currentAirport?.name}
            </h1>
            <div className="join center">
              <div className="card join-item bg-base text-base-content items-center w-96 bg-base-100 card-sm shadow-sm">
                <div className="card-body py-2">
                  <h2 className="card-title">Local Time</h2>
                  <p className="font-mono font-bold text-[1">{localTime}</p>
                </div>
              </div>
              <div className="card join-item bg-base text-base-content items-center w-96 bg-base-100 card-sm shadow-sm">
                <div className="card-body py-2">
                  <h2 className="card-title">UTC Time</h2>
                  <p className="font-mono font-bold">{utcTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs mt-5 tabs-lift">
        <input type="radio" name="my_tabs_3" className="tab" aria-label="TAF" />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          TAF
          <button onClick={fetchTAF}>test</button>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Tab 2"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Tab 3"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 3
        </div>
      </div>
    </div>
  );
}

export default AirportView;
