import { Card } from "@mui/material";
import "./App.css";
import Carousel from "./components/Carousel";
import { slides, Cards } from "./Data/Data.json";

function App() {
  return (
    <div>
      <Carousel data={slides} />
    </div>
  );
}

export default App;

/*<div className="card-container">
        {Cards.map((card, index) => {
          return (
            <div className="card">
              <div className="card-header">
                <h2>{card.heading}</h2>
              </div>
              <hr />
              <div className="card-body">
                <h4>{card.subHeading}</h4>
              </div>
            </div>
          );
        })}
      </div>
*/
