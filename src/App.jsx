import { useState } from 'react'
import SideBar from './components/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <html lang="es" class="antialiased dark:bg-gray-950 w-screen h-screen">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <SideBar class="hidden"/>
        
      </body>
    </html>
    </>
  )
}

export default App
