import "./App.css";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="page-container">
        <SideNav />
        <Home />
      </div>
    </div>
  );
}

export default App;
