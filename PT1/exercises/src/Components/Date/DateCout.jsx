import React from "react";
import "./DateCout.scss";

import { CgBorderStyleSolid } from "react-icons/cg";
import { AiOutlinePlus } from "react-icons/ai";

const DateCount = () => {
  const [count, setCount] = React.useState(0);
  const [step, setStep] = React.useState(0);

  let date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const handleClickCountUp = () => {
    if (step >= 0) {
      setCount(count + step);
    }
  };

  const handleClickCountDown = () => {
    if (step >= 0) {
      setCount(count - step);
    }
  };

  return (
    <div className="date__component">
      <div className="op">
        <CgBorderStyleSolid
          className="icon"
          onClick={() => setStep((s) => s - 1)}
        />
        <h3>STEP &nbsp; {step}</h3>
        <AiOutlinePlus className="icon" onClick={() => setStep((s) => s + 1)} />
      </div>
      <div className="op">
        <CgBorderStyleSolid className="icon" onClick={handleClickCountDown} />
        <h3>COUNT &nbsp; {count}</h3>
        <AiOutlinePlus className="icon" onClick={handleClickCountUp} />
      </div>
      <br />
      <div className="counter">
        <h2 className="days">{count} days ago was: </h2>
        <h2 className="days">{date.toDateString()}</h2>
      </div>
    </div>
  );
};

export default DateCount;
