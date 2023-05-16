import * as React from 'react';
import { NavLink } from "react-router-dom";

export default function Header() {

    const [ search, setSearch ] = React.useState('')

    const handleClick = (e) => {

    }

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/current-workout'>Create Your Workout</NavLink>
            <NavLink to='/muscle-groups'>Muscles</NavLink>
            <NavLink to='/learn'>Learn</NavLink>
            <input
            type="text"
                onChange={onChange}
            >
            </input>
            <img src="src\assets\search.png" alt="" onClick={handleClick} />
        </>
    );
}