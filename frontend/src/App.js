import logo from './logo.svg';
import './App.css';
import Example from './components/Modal'
import Other from './components/Other'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Switch, withRouter } from "react-router-dom"
import { useState } from 'react'
function App() {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <>

      {/* <div className="App"> */}

      {/* <Route exact={true} path="/" element={<Example />} />       */}
      <Example setShowSignUp={setShowSignUp} />
      <Other showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
      {/* <p>lol</p>
      </div> */}
      {/* <Route exact={true} path="/signup" element={<Other />} /> */}

    </>
  );
}

export default App;
