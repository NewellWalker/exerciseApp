import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <NavLink to="" >Home</NavLink>
            <NavLink to="" >About</NavLink>
            <NavLink to="" >Muscle Groups</NavLink>
            <NavLink to="" >Learn</NavLink>
            <NavLink to="" >Current Workout</NavLink>
            <SearchBar />
        </>
    )
}