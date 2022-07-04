import "./App.css";
import { Nav } from "./components/nav";
import { Calculator } from "./components/calculator";

function App() {
  return (
    <div className="App">
      <Nav />

      <h1>Scientists Calculator!</h1>

      <Calculator />
    </div>
  );
}

export default App;
