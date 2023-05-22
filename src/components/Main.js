import "../styles/Main.css";
import Typewriter from "typewriter-effect";

function Main() {
  return (
    <div className="Main">
      <div className="Main-container">
        <div className="Main-banner">

          <div className="Main-PP">
            <img src="./hi.png" alt="Profile Picture" />
          </div>

          <div className="Main-typewriter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("Welcome")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I am a")
                  .start();
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;
