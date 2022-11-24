import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1 className="hearder-title">Samar Weather App</h1>
      <Weather />
      <footer className="mt-2">
        This app is coded by{" "}
        <a
          href="http://samiraaghajani.ir/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Samira Aghajani
        </a>{" "}
        and it is{" "}
        <a
          href="https://github.com/saghajani-oss/weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source
        </a>
      </footer>
    </div>
  );
}

