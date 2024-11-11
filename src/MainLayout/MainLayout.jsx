import { Outlet } from "react-router-dom";
import Header from "../Component/Header";

const MainLayout = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;