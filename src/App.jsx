import { Route, Routes } from 'react-router-dom'
import './App.css'
import WorkoutHistory from './pages/workouthistory/WorkoutHistory'
import WorkoutLog from './pages/workoutlog/WorkoutLog'
import Home from './pages/Home'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
   <Route path='/workoutlog' element={ < WorkoutLog/>}/>
    <Route path='history' element={ <WorkoutHistory/>}/>
    </Routes>
    </>
  )
}

export default App