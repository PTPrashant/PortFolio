import React from "react";

function PersonalProjects() {
  return (
    <div id='projects' >
    <div className="container projectContainer">

      <div >
      <br/><br/><br/><br/>
        <h1 style={{ textAlign: "center" }}>Personal Projects </h1>
        <br/>
        <p className="paragraph serif">
          Personal projects are developed completely outside of my formal
          employment.
        </p>
        <p style={{ textAlign: "center" }}>
          I have worked on these projects to increase and sharpen my skills,
          learning and understanding of the technologies I work on.
        </p>
        <br/>
        </div>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
        }}
      >

      <div className="cardStyle">
          <div
            className="card"
            style={{
              width: "17rem",
              height: "16rem",
              marginRight: "4px",
              position: "inherit",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Book List App</h5>
              <h6  className="card-subtitle mb-2 text-muted">
                ReactJs, API, Css/BootStrap
              </h6>
              <p className="serif card-text serif">
                <li>
                  Lists book from Google API with different categories
                  like Art, Love, War etc.
                </li>
                <li>User can add- Avg Book Rating, wishlist, comments & save to Local Storage </li>
              </p>
            </div>
          </div>
        </div>


        <div>
          <div
            className="card"
            style={{
              width: "17rem",
              height: "16rem",
              marginRight: "4px",
              position: "inherit",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">News App</h5>
              <h6  className="card-subtitle mb-2 text-muted">
                ReactJs, API, Css/BootStrap
              </h6>
              <p className="card-text serif">
                <li>
                  Fetches news from News.api & shows with different categories
                  like Genera;, Sports, Education etc.
                </li>
                <li>Infinite Scrolling and Web Routing</li>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "17rem",
              height: "16rem",
              marginRight: "4px",
              position: "inherit",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Movie App</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                ReactJs, API, Css/BootStrap
              </h6>
              <div className="card-text serif">
                <li>
                  Netflix style movie app fetching list from API with horizontal
                  Scrolling.
                </li>
                <li>Add/Remove movies from Fav list saved in Local Storage.</li>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "17rem",
              height: "16rem",
              marginRight: "4px",
              position: "inherit",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Weather App</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                ReactJs, API, Css/BootStrap
              </h6>
              <div className="card-text serif">
                <li>
                  Takes city name as input, Fetches data from API showing latest
                  weather update.
                </li>
                <li>
                  Shows current, min & max temp , humidity and many more details
                </li>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "17rem",
              height: "16rem",
              marginRight: "4px",
              position: "inherit",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Text Application</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                ReactJs, CSS/BootStrap
              </h6>
              <div className="card-text serif">
                <li>
                  Word and character counter app converting text to Upper &
                  Lower text and to different fonts.
                </li>
                <li>Green and Blue Mode, Web Routing</li>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "17rem",
              height: "16rem",
              marginRight: "4px",
              position: "inherit",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">To Do List</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                ReactJS,JavaScript, Css/BootStrap
              </h6>
              <div className="card-text serif">
                <li>List with Create, Read, Update and Delete feature</li>
                <li>Add/Remove movies from list saved in Local Storage.</li>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "17rem",
              height: "16rem",
              marginRight: "4px",
              position: "inherit",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Stop Watch</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                ReactJS,JavaScript, Css
              </h6>
              <div className="card-text serif">
                <li>
                  Have button features like Start, Pause, Time lapse and Reset.
                </li>
                <li>
                  Can be paused and resumed, TimeLapse entry on running
                  stopwatch.
                </li>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "17rem",
              height: "16rem",
              marginRight: "4px",
              position: "inherit",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Drum Kit</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                JavaScript, HTML, CSS
              </h6>
              <div className="card-text serif">
                <li>
                  Different Drum & Pad sound effects on pressing respective
                  keys.{" "}
                </li>
                <li>
                  Sound effects can be made either by clicking on it or pressing
                  the respective key.
                </li>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "17rem",
              height: "16rem",
              marginRight: "4px",
              position: "inherit",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Calculator</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                JavaScript, HTML, CSS
              </h6>
              <div className="card-text serif">
                <li>Performs basic calculation Add, Sub, Div and Multiply.</li>
                <li>
                  Shows real time calculation, clear and reset function,
                  displays current action going on.
                </li>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "17rem",
              height: "16rem",
              marginRight: "4px",
              position: "inherit",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Dice Game</h5>
              <h6 className="card-subtitle mb-2 text-muted">JavaScript, HTML, CSS</h6>
              <div className="card-text serif">
              <li>Two Player Dice roll game, shuffles dice one by one.</li>
              <li>Player 2 can play after player 1 has thrown the dice.</li>
              </div>
            </div>
          </div>
        </div>

      

        <div>
          <div
            className="card"
            style={{
              width: "17rem",
              height: "16rem",
              marginRight: "4px",
              position: "inherit",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Hospital Management System</h5>
              <h6 className="card-subtitle mb-2 text-muted">.Net , MySQL</h6>
              <div className="card-text serif">
              <li>Web Application to maintain patient's data using MVC architecture</li>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "17rem",
              height: "16rem",
              marginRight: "4px",
              position: "inherit",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Tic Tac Toe</h5>
              <h6 className="card-subtitle mb-2 text-muted">Python</h6>
              <div className="card-text serif">
               <li>Two player 3X3 grid game.</li>
               <li>Result given after each step.</li>
              </div>
            </div>
          </div>
        </div>
      </div>


   
      </div>
    </div>
  );
}

export default PersonalProjects;
