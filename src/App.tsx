import React from 'react'
import Main from './components/Main'
import { BrowserRouter as Router } from 'react-router-dom';

interface Props {

}

const App : React.FC<Props>= ( {  } ) => {
  return (
    <Router>
        <Main/>
    </Router>
  )
}

export default App
