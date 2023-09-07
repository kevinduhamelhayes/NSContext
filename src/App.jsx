import { Switch, Route, Link } from 'react-router-dom'
import Acerca from './Acerca.jsx'
import Contacto from './Contacto.jsx'
import Inicio from './Inicio.jsx'




function App() {
  return 
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/acerca">Acerca</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/acerca">
        <Acerca />
      </Route>
      <Route path="/contacto">
        <Contacto />
      </Route>
      <Route path="/">
        <Inicio />
      </Route>
    </Switch>
  </div>
}

export default App
