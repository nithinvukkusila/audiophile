import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import LandingPage from "./layouts/landingPage/LandingPage";
import Footer from './components/footer/Footer'
import CategoryDetails from "./layouts/categoryDetails/CategoryDetails";
function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/category/:name" element={<CategoryDetails/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
