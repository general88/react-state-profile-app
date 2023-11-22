import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    person: {
      fullName: "Oguntamu Adeniyi",
      bio: "A brief bio about Oguntamu Adeniyi.",
      imgSrc:
        "https://res.cloudinary.com/djrqediyy/image/upload/v1699893314/samples/people/smiling-man.jpg",

      profession: "Security Analyst",
    },
    show: false,
    mountTime: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountTime: prevState.mountTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountTime } = this.state;
    return (
      <div className="App">
        <h1>Profile App</h1>
        <button onClick={() => this.setState({ show: !show })}>Click Me</button>

        {show && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
            <img src={imgSrc} alt={fullName} />
          </div>
        )}

        <p>Time since mount: {mountTime} seconds</p>
      </div>
    );
  }
}

export default App;
