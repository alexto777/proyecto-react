// import logo from './logo.svg';
import './App.css';
import { Home } from "./components/pages/home/Home";
import { Navbar } from './components/common/navbar/Navbar';
import { Hooks } from './components/pages/hooks/Hooks';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Home />
        <Hooks />
      </header>
    </div>
  );
}

export default App;
