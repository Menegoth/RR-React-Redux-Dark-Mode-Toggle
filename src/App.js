import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch } from "react-redux";
import { darkMode, lightMode } from "./features/modeSlice";

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);

  function toggleMode() {
    mode.darkMode ? dispatch(lightMode()) : dispatch(darkMode());
  }
  
  return (
    <div style={{ backgroundColor: mode.color1, color: 'white' }} className="App">
      <Nav />
      <button onClick={toggleMode}>{mode.darkMode ? "Light Mode" : "Dark Mode"}</button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
