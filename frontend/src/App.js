import './App.css';
import LoginModal from './components/LoginModal'
import SignUpModal from './components/SignUpModal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Switch, withRouter } from "react-router-dom"
import { useState } from 'react'
function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>

      {/* <div className="App"> */}

      {/* <Route exact={true} path="/" element={<Example />} />       */}
      <LoginModal setShowSignUp={setShowSignUp} />
      <SignUpModal showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
      {/* <p>lol</p>
      </div> */}
      {/* <Route exact={true} path="/signup" element={<Other />} /> */}

    </>
  );
}

export default App;
