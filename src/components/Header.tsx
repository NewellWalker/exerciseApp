import * as React from 'react';
import { NavLink } from "react-router-dom";

export default function Header() {

    // add breadcrumbs to make navigating easier when looking at muscle groups/exercise types

    const [ search, setSearch ] = React.useState('')

    const handleClick = (e: any) => {
        e.target.value;
    }

    const onChange = (e: any) => {
        setSearch(e.target.value);
        search;
    }

    return (
        <>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/current-workout'>Create Your Workout</NavLink>
            <NavLink to='/muscle-groups'>Muscles</NavLink>
            <NavLink to='/learn'>Learn</NavLink>
            < input
                type="text"
                onChange={onChange}
                placeholder='Search'
            />
            <img src="src\assets\search.png" alt="" onSubmit={handleClick} />
            <h3>header break</h3>
        </>
    );
}