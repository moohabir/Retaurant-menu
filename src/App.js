import Menu from "./Menu";
import Navbar from "./Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Restaurant menu app</h1>
      <Navbar />
      <Menu />
    </div>
  );
}
