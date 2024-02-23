import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import TasksPage from './pages/TasksPage'
import TasksFormPage from './pages/TasksFormPage'
import ProfilePage from './pages/ProfilePage'

import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={< RegisterPage />} />
          <Route path='/login' element={< LoginPage />} />

          // Rutas privadas
          <Route element={<ProtectedRoute />}>
            <Route path='/tasks' element={<TasksPage />} />
            <Route path='/add-task' element={<TasksFormPage />} />
            <Route path='/tasks/:id' element={<TasksFormPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App