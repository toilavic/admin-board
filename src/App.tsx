import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/auth/Login'

function App() {
  return (
        <Router>
          <div>
            <Login/>
          </div>
        </Router>
    )
}

export default App;
