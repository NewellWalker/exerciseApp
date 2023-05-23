// Make the app what you are looking for right now

import Root from './components/Root';
import Home from './components/Home';
import About from './components/About';
import CurrentWorkout from './components/CurrentWorkout';
import MuscleGroups from './components/MuscleGroupCards/MuscleGroups';
import Learn from './components/Learn';
import SignUp from './components/SignUp';
import './App.css';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root/> }>
    <Route path="home" element={ <Home /> } />
    <Route path="sign-up" element={ <SignUp /> }/>
    <Route path="about" element={ <About /> } />
    <Route path="current-workout" element={ <CurrentWorkout /> } />
    <Route path="muscle-groups" element={ <MuscleGroups /> } />
    <Route path="learn" element={ <Learn /> } />
  </Route>
))

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App
