import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./Components/Nav";
import Home from 
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp"

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
