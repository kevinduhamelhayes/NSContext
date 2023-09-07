import { createContext, useContext, useState } from "react"

const ContextDefault = createContext()

const useContador = () => {
  const [contador, setContador] = useState(0)
  const incrementar = () => setContador((prev) => prev + 1)
  const decrementar = () => setContador((prev) => prev - 1)

  return { contador, incrementar, decrementar }
}

const ContadorProvider = ({ children }) => {
  const contadorProps = useContador()
  return (
    <ContextDefault.Provider value={contadorProps}>
      {children}
    </ContextDefault.Provider>
  )
}

const Contador = () => {
  const { contador, incrementar, decrementar } = useContext(ContextDefault)
  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  )
}

const App = () => {
  return (
    <ContadorProvider>
      <Contador />
    </ContadorProvider>
  )
}

export default App
