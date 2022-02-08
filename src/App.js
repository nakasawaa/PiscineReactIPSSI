import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className=""
          href="./home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Accédez a l'appli
        </a>
      </header>
    </div>
  );
}

export default App;
