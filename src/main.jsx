import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './data/hooks/context/ThemeContext'

import './index.css'

import App from './pages/app/App'
import Home from './pages/home/Home'
import AboutMe from './pages/aboutMe/AboutMe'
import Projects from './pages/projects/Projects'
import TecnologiasEFerramentas from './pages/tecnologiasEFerramentas/TecnologiasEFerramentas'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sobre-mim", element: <AboutMe /> },
      { path: "/projetos", element: <Projects /> },
      { path: "/tecnologias-e-ferramentas", element: <TecnologiasEFerramentas /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
