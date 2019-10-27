import React from 'react'

import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'pages/Home'

// class Home extends React.PureComponent {
//   return <div>Home</div>
// }
// function About() {
//   return <div>About</div>
// }

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
