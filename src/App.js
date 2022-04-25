import logo from './logo.svg';
import './App.css';
import {Navbar} from "./components/navbar";
import {ThemeContext, ThemeContextProvider} from "./contexts/Themecontext";
import { useContext } from 'react';
import {Body} from "./styles"

function App() {
  // const {isTheme,handleChange} = useContext(ThemeContext)
  return (
    <div className="App" >
      <Navbar></Navbar>
      {/* <div className='body' >khgdhasdasd</div> */}
      <Body></Body>
    </div>

  );
}

export default App;
