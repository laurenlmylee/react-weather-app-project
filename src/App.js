import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather App ☀</h1>
          <Weather />
          <p>
            {" "}
            This project was coded by Lauren and is{" "}
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
