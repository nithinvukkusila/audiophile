import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import LandingPage from "./layouts/LandingPage";
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
