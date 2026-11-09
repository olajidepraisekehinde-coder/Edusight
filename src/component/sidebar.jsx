import { MdOutlineDashboard } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { LiaCertificateSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <>
            <aside className="hidden md:block fixed top-16 left-0 w-48 h-[calc(100vh-4rem)] bg-[#0B1A2B] rounded-r-xl shadow-2xl p-6 text-white">

                <div className="space-y-6">

                    <div className="flex items-center gap-3 hover:bg-green-300 hover:text-black rounded-lg px-3 py-3 transition duration-300">
                        <MdOutlineDashboard className="text-2xl" />
                        <Link to="/dashboard">Dashboard</Link>
                    </div>

                    <div className="flex items-center gap-3 hover:bg-green-300 hover:text-black rounded-lg px-3 py-3 transition duration-300">
                        <GiGraduateCap className="text-2xl" />
                        <Link to="/dashboard/course">My Courses</Link>
                    </div>

                    <div className="flex items-center gap-3 hover:bg-green-300 hover:text-black rounded-lg px-3 py-3 transition duration-300">
                        <LiaCertificateSolid className="text-2xl" />
                        <Link to="/dashboard/certificates">Certificates</Link>
                    </div>

                </div>

            </aside>

            <aside className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-[#0B1A2B] text-white">

                <div className="flex justify-around py-5">

                    <Link to="/dashboard" className="flex flex-col items-center gap-2 hover:text-green-400">
                        <MdOutlineDashboard className="text-xl" />
                        Dashboard
                    </Link>

                    <Link to="/dashboard/course" className="flex flex-col items-center gap-2 hover:text-green-400">
                        <GiGraduateCap className="text-xl" />
                        My Courses
                    </Link>

                    <Link to="/dashboard/certificates" className="flex flex-col items-center gap-2 hover:text-green-400">
                        <LiaCertificateSolid className="text-xl" />
                        Certificates
                    </Link>
                </div>

            </aside>
        </>
    )
}