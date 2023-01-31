import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navigation from "./Components/Nav";
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp/SIgnUp.pages';

function App() {
  return (

    <Router>
      <div className="App">
      <Navigation />
        <Routes>
        <Route />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
