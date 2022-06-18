import React, { Component } from "react";
import Pic from "./assets/pic.jpg";

class Profile extends Component {
  state = {
    fullName: "Fahd Jerbi",
    profession: "Geomatics Professional",
    bio: "Ambitious and self-driven person",
    imgSrc: { Pic },
    count: 0,
  };

  // This counter will start working just when the component is mounting
  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }

  render() {
    let { count } = this.state;
    return (
      <div>
        <div>Counter: {count}s</div>
        <div
          className="profile-section"
          style={{ border: "3px solid red", borderRadius: "5px" }}
        >
          <img src={Pic} alt="profile-pic" style={{ width: "220px" }} />
          <h1>{this.state.fullName}</h1>
          <h3>{this.state.profession}</h3>
          <h5>{this.state.bio}</h5>
        </div>
      </div>
    );
  }
}

export default Profile;
