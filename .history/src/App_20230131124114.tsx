import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navigation from "./Components/Nav";

function App() {
  return (

    <Router>

    <div className="App">
      <Navigation />
    </div>
    </Router>
  );
}

export default App;
