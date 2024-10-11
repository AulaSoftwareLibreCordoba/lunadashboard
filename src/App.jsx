import { useState } from 'react'
import SideBar from './components/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <html lang="es" class="antialiased dark:bg-gray-950 w-screen h-screen">
      <SideBar />
    </html>
    </>
  )
}

export default App
