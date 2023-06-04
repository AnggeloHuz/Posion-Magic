import { useState } from 'react'
import Header from './components/Header'
import FormularioPosiones from './components/FormularioPosiones'
import Agregar from './components/Agregar'
import Productos from './components/Productos'
import { ContextoProvider } from './context/Context'
import Buscar from './components/Buscar'
import Footer from './components/Footer'
import fondo from './assets/fondo.jpg'

function App() {

  return (
    <>
      <ContextoProvider>
        <Header />
        <main className='flex flex-col gap-16 xl:gap-4 bg-slate-950' >
          <Agregar />
          <Productos />
          <Buscar />
        </main>
        <Footer />
      </ContextoProvider>
    </>
  )
}

export default App
