import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer />
        </>
    )
}