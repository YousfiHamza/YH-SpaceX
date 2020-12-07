import "./App.css";
import logo from "./spacex-logo.png";

function App() {
  return (
    <div className="App">
      <img
        src={logo}
        alt="..."
        style={{ width: 300, display: "block", margin: "auto" }}
      />
      <h1>SPACE X</h1>
    </div>
  );
}

export default App;
