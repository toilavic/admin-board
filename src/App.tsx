import React from 'react'
import Login from './components/auth/Login'
import { BrowserRouter as Router } from 'react-router-dom';

interface Props {

}

function App(props: Props) {
  const { } = props

  return (
    <Router>
      <div>
        <Login/>
      </div>
    </Router>
  )
}

export default App
