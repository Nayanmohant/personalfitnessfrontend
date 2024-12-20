import { Route, Routes } from 'react-router-dom'
import './App.css'


import WorkoutHistory from './pages/workouthistory/WorkoutHistory'
import WorkoutLog from './pages/workoutlog/WorkoutLog'
import Home from './pages/Home'
import 'bootstrap-icons/font/bootstrap-icons.css';
import SignUp from './SignUp'
import Login from './Login'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>

 
 <Route path='/signup' element={ < SignUp/>}/>
 <Route path='/login' element={<Login/>} />

   <Route path='/workoutlog' element={ < WorkoutLog/>}/>
    <Route path='history' element={ <WorkoutHistory/>}/>
    </Routes>
    </>
  )
}

export default App
