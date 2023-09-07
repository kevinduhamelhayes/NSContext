import { createContext, useContext, useState } from "react"

const ContextDefault = createContext({ valor: false, toggle: () => {} })

const Provider = ({ children }) => {
  const [valor, setValor] = useState(false)
  const value = {
    valor,
    toggle: () => setValor(!valor),
  }
  return (
    <ContextDefault.Provider value={value}>{children}</ContextDefault.Provider>
  )
}
const Contenido = () => {
  const { valor, toggle } = useContext(ContextDefault)
  return (
    <div>
      <label htmlFor="">{valor.toString()}</label>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}
const App = () => {
  return (
    <Provider>
      <Contenido />
    </Provider>
  )
}
export default App