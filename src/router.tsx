import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Career from './pages/Career'
import Contact from './pages/Contact'
import Background from './pages/Background'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'career', element: <Career /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  { path: '/background', element: <Background /> },
])
