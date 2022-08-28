import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/micaelajmyers/dictionary-app.git"
              target="_blank"
              rel="noreferrer"
            >
              Open Source Code
            </a>{" "}
            by Mica Myers
          </small>
        </footer>
      </div>
    </div>
  );
}
