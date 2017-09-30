import React from "react"
import { Route, Link } from "react-router-dom"
import Home from "./Home/Home"
import About from "./About/About"

const Example = ({ match }) => (
  <div>
    <header>
      <Link to={match.url }>Home</Link>
      <Link to={match.url + "/about-us" }>About</Link>
    </header>

    <main>
      <Route exact path={match.url} component={Home} />
      <Route exact path={match.url + "/about-us" } component={About} />
    </main>
  </div>
)

export default Example
