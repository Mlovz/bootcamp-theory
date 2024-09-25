import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TaskProvider } from './TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <TaskProvider>
      <App />
  </TaskProvider>

)
