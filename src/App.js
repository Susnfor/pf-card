import './App.css';
import About from './components/About';
import Main from './components/Main';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <div className="App-container">
      <div className="App-top">
      <Main />
      </div>
        <div className="App-layout">
          <div className="App-left">
            <Profile />
          </div>
          <div className='App-right'>
            <About />
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default App;
