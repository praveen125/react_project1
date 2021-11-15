import "./App.css";
import image from "./components/image.jpg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1 className="website">My WebSite</h1>
      <Navbar />
      <img className="img" src={image} />
    </div>
  );
}

export default App;
