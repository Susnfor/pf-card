import "../styles/Main.css";
import Typewriter from "typewriter-effect";

function Main() {
  return (
    <div className="Main">
      <div className="Main-container">
        <div className="Main-banner">


          <div className="Main-typewriter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString(`Welcome, I'm <strong>John</strong>`)

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("And I am a <strong>Graphics Designer</strong>")
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
