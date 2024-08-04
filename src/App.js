import Main from "../src/pages/Main";
import logo from "./assets/ta-logo.svg"

function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} alt="img"/>
        <h1>Today's advice</h1>
        <Main />
      </div>
    </div>
  );
}

export default App;
