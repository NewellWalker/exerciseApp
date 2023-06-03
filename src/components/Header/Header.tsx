import { NavLink } from "react-router-dom";
import './Header.module.css'

export default function Header() {

    return (
        <>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/current-workout'>Create Your Workout</NavLink>
            <NavLink to='/muscle-groups'>Muscles</NavLink>
            <NavLink to='/learn'>Learn</NavLink>
        </>
    );
}