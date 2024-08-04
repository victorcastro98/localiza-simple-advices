import Main from "../src/pages/Main";
import logo from "./assets/ta-logo.svg"
import './index.css';

function App() {
  return (
    <div className="App">
      <div className=" bg-rose-300 h-full min-h-screen flex flex-col items-center">
        <img className="w-3/4 md:w-1/3" src={logo} alt="img"/>
        <Main />
      </div>
    </div>
  );
}

export default App;
