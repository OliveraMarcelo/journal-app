import { Navigate, Route, Routes } from 'react-router-dom'
import { JournalPage } from '../pages/JournalPage'

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<JournalPage/>} />
        <Route path='/*' element={<Navigate to='/' />} />

        {/* si entro a esta ruta y no estoy dentro de '/' entonces nos dirijimos a '/' */}
    </Routes>
  )
}
