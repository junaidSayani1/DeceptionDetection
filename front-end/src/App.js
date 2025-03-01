import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateSession from "./CreateSession.js";
import JoinSession from "./JoinSession";
import  {useState} from "react";


function App() {

  const [statusMessage, setStatusMessage] = useState("Welcome! Select an option to proceed.");


  return (
    
    <div className="d-flex flex-column vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-3">
        <span className="navbar-brand">Lie To Us</span>
      </nav>

      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <div className="bg-light p-3 border-end" style={{ width: "250px" }}>
          <h4>Session Control</h4>
          <button className="btn btn-primary w-100 mb-2"><CreateSession /></button>
          <button className="btn btn-success w-100"><JoinSession statusMessage={statusMessage} setStatusMessage={setStatusMessage}/></button>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
          <p className="text-muted fs-5">{statusMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
