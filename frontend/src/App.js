import './App.css';

import { Login } from './components/auth/Login'
import { Home } from './components/Home'

function App() {
  const currentUser = () => {
    const user = localStorage.getItem('user')
    return(user)
  }
  return (
    <div className="App">
      {currentUser ? <Home /> : <Login />}
    </div>
  );
}

export default App;
