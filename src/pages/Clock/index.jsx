import React from "react";
import ClockNumber from "./ClockNumber";
import moment from "moment";

export class Clock extends React.Component {
  constructor() {
    super();

    const time = moment();
    this.state = {
      time,
    };
    setInterval(() => {
      const time = moment();
      this.setState({ time });
    }, 1000);
  }

  componentWillMount() {
    document.body.style.backgroundColor = "black";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = "";
  }

  render() {
    const style = {
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      alignItems: "center",
    };

    const { time } = this.state;

    const hours = time.hours() > 12 ? time.hours() % 12 : time.hours();
    const minutes = time.minutes();

    return (
      <div style={style}>
        {hours < 10 ? (
          <ClockNumber num1={hours} />
        ) : (
          <ClockNumber num1={Math.floor(hours / 10)} num2={hours % 10} />
        )}
        <div style={{ width: "10vmin" }} />
        {minutes < 10 ? (
          <ClockNumber num1={0} num2={minutes} />
        ) : (
          <ClockNumber num1={Math.floor(minutes / 10)} num2={minutes % 10} />
        )}
      </div>
    );
  }
}
