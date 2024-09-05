import { getFullYear, getFooterCopy } from './utils';
import Notifications from './Notifications';
import './App.css';
import holberton_logo from './holberton-logo.jpg';

function App() {
  const isIndex = false;

  return (
    <div className="App">
      <div className='root-notifications'>
        <Notifications />
      </div>
      <div className="App-header">
        <img src={holberton_logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
      </div>
    </div>
  );
}

export default App;
