import React from "react";
import "../css/contact.css";

const Contact = () => {
  return (
    <div className="c">
      <div className="c-wrapper">
        <div className="c-info">
          <p className="c-desc">
            Please, check out more of my information and get in touch with me if
            you would like!
          </p>
          <div className="c-mail">
            <form className="c-mform">
              <label>Name</label>
              <input type="text" placeholder="Your name... " />
              <label>Email</label>
              <input type="email" placeholder="Your email... " />
              <label>Message</label>
              <textarea
                className="c-message"
                row="4"
                placeholder="Anything you want to say to me... "
              />
              <input classname="c-sub" type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <div className="c-boxgrid">
          <div className="c-box">
            <a href="../extras/CopyofResume.docx.pdf" target="blank">
              <img
                alt="resume"
                src="https://img.icons8.com/ios/150/000000/resume.png"
              />
            </a>
          </div>

          <div className="c-box">
            <a href="mailto:abc@example.com?subject = Feedback&body = Message">
              <img
                alt="mail icon"
                src="https://img.icons8.com/ios/150/000000/apple-mail.png"
              />
            </a>
          </div>
          <div className="c-box">
            <a href="https://www.linkedin.com/in/lpham1357/">
              <img
                classname="w-icon"
                src="https://img.icons8.com/ios-filled/150/000000/linkedin.png"
                alt="linkedin icon"
              />
            </a>
          </div>
          <div className="c-box">
            <a href="https://github.com/SuggestedName">
              <img
                classname="w-icon"
                src="https://img.icons8.com/ios-filled/150/000000/github.png"
                alt="github icon"
              />
            </a>
          </div>
        </div>
        <div className="c-footer">
          <a href="https://suggestedname.github.io/Web/">
            <h3 className="c-fh3"> &copy; Made by Lap Pham</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
