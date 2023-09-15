import { showTime } from "./utils";

const DisplayTime = ({ time }) => {
  //   console.log("timed", time);

  return (
    <div className="displayTime">
      <h1>{showTime(time)}</h1>
    </div>
  );
};

export default DisplayTime;
