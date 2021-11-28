import React from "react";
import "../css/works.css";

const Works = () => {
  return (
    <div className="w">
      <div className="w-wrap">
        <h1 className="w-title">Works</h1>
        <div className="w-grid">
          <div className="w-card">
            <div className="w-content">
              <h2 className="w-subtitle">Project 1</h2>
              <p className="w-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
                reprehende.
              </p>
            </div>
          </div>
          <div className="w-card">
            <div className="w-content">
              <h2 className="w-subtitle">Project 2</h2>
              <p className="w-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
                reprehende.
              </p>
            </div>
          </div>
          <div className="w-card">
            <div className="w-content">
              <h2 className="w-subtitle">Project 3</h2>
              <p className="w-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
                reprehende.
              </p>
            </div>
          </div>
        </div>
        <h2>Skills</h2>
        <div className="w-skills">
          <div className="w-sgrid">
            <img
              classname="w-icon"
              src="https://img.icons8.com/ios-filled/50/000000/html-5--v1.png"
              alt = "html icon"
            />
            <img
              classname="w-icon"
              src="https://img.icons8.com/ios-filled/50/000000/css3.png"
              alt = "css icon"
            />
            <img
              classname="w-icon"
              src="https://img.icons8.com/ios-filled/50/000000/c-plus-plus-logo.png"
              alt = "c++ icon"
            />
            <img
              classname="w-icon"
              src="https://img.icons8.com/ios-filled/50/000000/javascript.png"
              alt = "js icon"
            />
            <img
              classname="w-icon"
              src="https://img.icons8.com/ios/50/000000/java-coffee-cup-logo--v1.png"
              alt = "java icon"
            />
            <img 
            classname="w-icon"
            src="https://img.icons8.com/ios-filled/50/000000/react-native.png"
            alt = "react icon"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
