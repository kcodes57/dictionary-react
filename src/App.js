import Dictionary from "./Dictionary.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dictionary />
      </header>
      <footer>
        Coded by{" "}
        <a href="https://github.com/kcodes57" target="_blank" rel="noreferrer">
          Kirsten McIntyre
        </a>{" "}
        is open-sourced on{" "}
        <a
          href="https://github.com/kcodes57/dictionary-react"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://k-dictionary-react.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
