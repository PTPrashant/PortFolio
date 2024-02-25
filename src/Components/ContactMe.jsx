// import React from 'react\
import phone from "./telephone.png";
import location from "./location.png";
import mail from "./mail.png";

function ContactMe() {
  return (
    <div id="contactMe">
    <br/>
      <div className="container">
        <div className="flex-container">
          <div>
            <h2 className="name-color">Prashant Tiwari</h2>
            <h5 className="text-muted">Front-End Engineer</h5>
          </div>

          <div id="right-container">
            <div>
              <p>pra7365@gmail.com
              <img src={mail}
              style={{ height: "30px", width: "30px", marginLeft: "10px" }}

              /></p>
              <p>
                +91-8826277365
                <img
                  src={phone}
                  style={{ height: "30px", width: "30px", marginLeft: "10px" }}
                />
              </p>
              <p>Bengaluru, Karnataka
              <img src={location} 
              style={{ height: "30px", width: "30px", marginLeft: "10px" }}
              /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
