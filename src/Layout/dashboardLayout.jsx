import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Sidebar from "../component/sidebar";


export default function DashboardLayout() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Sidebar />

            <div className="pt-16">
                <main className="md:ml-48 p-5 md:p-6">

                    <Outlet />

                </main>
                <div className="fixed bottom-0 right-5 mt-10">

                    <Footer />
                </div>
            </div>

        </div>

    );
}