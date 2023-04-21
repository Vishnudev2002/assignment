import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="upperPart">
        <div className="left">
          <div className="inputName">
            <label htmlFor="name">Enter your App Name:</label>
            <input type="text" id="name" placeholder="Enter your App Name" />
          </div>
          <div className="uploadFiles">
            <h4>Upload Game Files:</h4>
            <div className="inputFile">
              <label htmlFor="Story">CSV for Story</label>
              <input type="file" name="Story" id="Story" />
              <label htmlFor="Assets">Game Assets</label>
              <input type="file" name="Assets" id="Assets" />
              <label htmlFor="Icon">App Icon</label>
              <input type="file" name="Icon" id="Icon" />
            </div>
            <a href="#">Click here to download sample files</a>
            <button>Click to build the game</button>
            <div className="progressBar">
              <span
                className="top"
                style={{ backgroundColor: "#4e34e0" }}
              ></span>
              <span
                style={{ marginLeft: "3rem", backgroundColor: "#4e34e0" }}
                className="top"
              ></span>
              <span style={{ marginLeft: "6rem" }} className="top"></span>
              <span style={{ marginLeft: "9rem" }} className="top"></span>
              <span style={{ marginLeft: "12rem" }} className="top"></span>
              <span style={{ marginLeft: "15rem" }} className="top"></span>
              <span style={{ marginLeft: "18rem" }} className="top"></span>
              <p></p>
              <span
                className="down"
                style={{ backgroundColor: "#4e34e0" }}
              ></span>
              <span
                style={{ marginLeft: "3rem", backgroundColor: "#4e34e0" }}
                className="down"
              ></span>
              <span style={{ marginLeft: "6rem" }} className="down"></span>
              <span style={{ marginLeft: "9rem" }} className="down"></span>
              <span style={{ marginLeft: "12rem" }} className="down"></span>
              <span style={{ marginLeft: "15rem" }} className="down"></span>
              <span style={{ marginLeft: "18rem" }} className="down"></span>
            </div>
            <p>02:00 minutes remaining</p>
          </div>
        </div>
        <div className="right">
          <iframe
            width="450"
            height="270"
            src="https://www.youtube.com/embed/w7ejDZ8SWv8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>Check out the demo to get started</p>
        </div>
      </div>
      <hr style={{ marginTop: "50px" }} />
      <div className="downPart">
        <div className="heading">
          <p>Games created using Wuri</p>
        </div>
        <div className="image">
          <img src="./images/leftImage.png" alt="leftImage" />
          <img src="./images/rightImage.png" alt="rightImage" />
        </div>
      </div>
    </div>
  );
};

export default Main;
