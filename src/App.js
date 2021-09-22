import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">

          <Weather defaultCity="London" />
          <p>
            {" "}
            Coded by{" "}
            <a
              href="https:www.instagram.com/laurenlmy"
              target="_blank"
              rel="noopener noreferrer">
              Lauren </a> and is{" "}
            <a
              className="App-link"
              href="https://github.com/laurenlmylee/react-weather-app-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced
            </a>
            🐧
          </p>
        </header>
      </div>
    </div>
  );
}
