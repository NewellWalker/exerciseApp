// Make the app what you are looking for right now

import Root from './components/Root';
import Home from './components/Home/Home';
import About from './components/About';
import CurrentWorkout from './components/CurrentWorkout';
import MuscleGroups from './components/MuscleGroups';
import Learn from './components/Learn';
import SignUp from './components/SignUp';
import Exercises from './components/Exercises'
import './App.css';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root/> }>
    <Route path="home" element={ <Home /> } />
    <Route path="about" element={ <About /> } />
    <Route path="exercises" element={ <Exercises /> } />
    <Route path="current-workout" element={ <CurrentWorkout /> } />
    <Route path="muscle-groups" element={ <MuscleGroups /> } />
    <Route path="learn" element={ <Learn /> } />
    <Route path="sign-up" element={ <SignUp /> }/>
  </Route>
))

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App
