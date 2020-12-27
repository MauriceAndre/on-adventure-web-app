import React from "react";
import './App.css';
import Routes from './components/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App section flex-column">
      <main className="section-wrapper section-fill">
        <Routes />
      </main>
    </div>
  );
}

export default App;
