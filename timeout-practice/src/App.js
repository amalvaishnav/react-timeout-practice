import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import DisplayTime from "./Components/DisplayTime";
import Buttons from "./Components/Buttons";
import { showTime } from "./Components/utils";

const App = () => {
  const timeInitial = { h: 0, m: 0, s: 0, ms: 0 };
  const [time, setTime] = useState(timeInitial);
  const [status, setStatus] = useState(0);
  const [interv, setInterv] = useState();

  var timeRecordArray =
    JSON.parse(localStorage.getItem("timeRecordData")) || [];
  const [timeRecord, setTimeRecord] = useState(timeRecordArray);

  const start = () => {
    setInterv(setInterval(runTheClock, 10));
    setStatus(1);
  };

  const pause = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const resume = () => {
    start();
  };

  useEffect(() => {
    setTimeRecord(timeRecordArray);
  }, [status]);

  console.log("rendered");
  var currentH = time.h,
    currentM = time.m,
    currentS = time.s,
    currentMS = time.ms;

  const reset = () => {
    if (timeRecordArray.length >= 5) {
      timeRecordArray.shift();
    }
    timeRecordArray.push({
      id: Math.floor(Math.random() * 1000),
      time: { h: currentH, m: currentM, s: currentS, ms: currentMS },
    });
    localStorage.setItem("timeRecordData", JSON.stringify(timeRecordArray));
    clearInterval(interv);
    setTime(timeInitial);
    setStatus(0);
  };

  const runTheClock = () => {
    if (currentM == 60) {
      currentH++;
      currentM = 0;
    }
    if (currentS == 60) {
      currentM++;
      currentS = 0;
    }
    if (currentMS == 100) {
      currentS++;
      currentMS = 0;
    }
    currentMS++;
    setTime({ h: currentH, m: currentM, s: currentS, ms: currentMS });
  };

  return (
    <div className="App">
      <DisplayTime time={time} />
      <Buttons
        start={start}
        status={status}
        pause={pause}
        resume={resume}
        reset={reset}
      />
      <br />
      {timeRecord.length > 0 && (
        <div>
          <h3>5 Latest recorded times </h3>
          <b>
            {timeRecord.map((item) => {
              return <li key={item.id}>{showTime(item.time)}</li>;
            })}
          </b>
        </div>
      )}
    </div>
  );
};

export default App;
