import React from "react";
import "./DateCout.scss";

import { CgBorderStyleSolid } from "react-icons/cg";
import { AiOutlinePlus } from "react-icons/ai";

const DateCountII = () => {
  const [count, setCount] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const [values, setValues] = React.useState(1);

  const [inputV, setinputV] = React.useState(0);

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

  const handleValues = (e) => {
    setValues(e.target.value);

    setStep((s) => s + 1);
  };

  const inputController = (e) => {
    setinputV(count);
    setCount(e.target.value);
  };

  const handleWindow = () => {
    window.location.reload();
  };

  return (
    <div className="date__component">
      <div className="op">
        <input
          type="range"
          min={0}
          max={10}
          className="range"
          onChange={handleValues}
          defaultValue={1}
        />
        &nbsp; <h4>{values}</h4>
        <br />
      </div>
      <div className="op">
        <CgBorderStyleSolid className="icon" onClick={handleClickCountDown} />
        <input type="text" onChange={inputController} value={count}/>
        <AiOutlinePlus className="icon" onClick={handleClickCountUp} />
      </div>
      <br />
      <div className="counter">
        {values ? (
          <h4 className="days">{count} days from today is</h4>
        ) : (
          <h4>Today is</h4>
        )}
        <h4 className="days">{date.toDateString()}</h4>
      </div>
      {values > 2 ? (
        <button className="btn" onClick={handleWindow}>
          Reset All
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default DateCountII;
