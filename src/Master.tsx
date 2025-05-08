import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Master = () => {
    return (
        <>
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
        </>
    )
}

export default Master;