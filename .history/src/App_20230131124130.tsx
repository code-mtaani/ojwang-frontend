import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navigation from "./Components/Nav";

function App() {
  return (

    <div className="App">
      <Router>
      <Navigation />
    </Router>
    </div>
  );
}

export default App;
