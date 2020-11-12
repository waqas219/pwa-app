import './App.css';
import { initNotification } from './services/firebaseservice';
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={initNotification}>Configure Notification</button>
    </div>
  );
}

export default App;
