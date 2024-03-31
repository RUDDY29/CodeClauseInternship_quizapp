import react from "react";
import { BrowserRouter as Router ,Switch,Route, Routes} from "react-router-dom";
import Settings from "./pages/Settings.js";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { ReactDOM } from "react";
import {Container,Box} from "@mui/material";
import Typography from "@mui/material/Typography"
import {styled} from "@mui/system"
import "./App.css"
import logo from './components/logo.jpg'

function App() {
 

  return (   
     <div className="App" >
      <Router>
     <Container maxWidth="sm">
        <Box textAlign="center" mt={5}  >
          <Routes>
            <Route path="/" element={<Settings/>}></Route>
                      
            <Route path="/questions" element={<Questions/>}></Route>
                      
            <Route path="/score" element={<FinalScreen/>}></Route>
          </Routes>
        </Box>
     </Container>
    </Router>
     </div>
    
  );
}
export default App;
