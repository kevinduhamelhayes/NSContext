import { createContext, useContext } from "react"
import "./App.css"

// Primer Contexto
const ContextDefault = createContext("valor por defecto")

const ProviderDefault = ({ children }) => {
  return (
    <ContextDefault.Provider value={"valor por defecto"}>
      {children}
    </ContextDefault.Provider>
  )
}

// Segundo Contexto (aún sin valores definidos)
const ContextSecond = createContext()

const ProviderSecond = ({ children, value }) => {
  return (
    <ContextSecond.Provider value={value}>{children}</ContextSecond.Provider>
  )
}

const Contenido = () => {
  const value = useContext(ContextDefault)
  return (
    <>
      <h1>{value}</h1>
    </>
  )
}

function App() {
  return (
    <>
      <ProviderDefault>
        <Contenido />
      </ProviderDefault>
      {/* 
      Ejemplo de cómo utilizar el segundo contexto (ProviderSecond):
      <ProviderSecond value={"valor para el segundo contexto"}>
        ...tu contenido aquí...
      </ProviderSecond>
      */}
    </>
  )
}

export default App