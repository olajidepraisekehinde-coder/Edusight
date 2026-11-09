import { Link } from "react-router-dom";
import courses from "../pages/courses";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaIdBadge } from "react-icons/fa";
import { useUser } from "../utilis/useData";
export default function DashboardHome() {
    const limitedCourses = courses.slice(0, 3)
    const { user } = useUser();
    const coursesCount = courses.length;
    return (
        <>
            <section className="flex flex-col lg:flex-row gap-10 text-white my-5 2xl:max-w-7xl 2xl:mx-auto">

                <div className="text-base/10 bg-[#0B1A2B] py-8 px-5 lg:px-10 rounded-xl max-w-xl">

                    <h1 className="text-lg font-bold">
                        Welcome{" "}
                        <span className="text-[#8193BD]">
                            {user?.user_metadata?.full_name || "User"}
                        </span>
                    </h1>

                    <div className="text-3xl text-gray-300 leading-tight">

                        <h1 className="text-2xl md:text-4xl">
                            Elevate your technical
                            <span className="block bg-gradient-to-r from-[#8193BD] to-[#d7e0f8] bg-clip-text text-transparent">
                                expertise.
                            </span>
                        </h1>

                    </div>

                    <p>
                        You're currently in the top 5% of learners this
                        week. Complete your current module to earn the
                        "Neural Architect" badge.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-5 mt-5">

                        <div className="bg-[#182536] px-10 py-5 rounded-lg text-center hover:scale-105 transition duration-500">
                            <p>24Hrs</p>
                            <p>Learn This Month</p>
                        </div>

                        <div className="bg-[#182536] px-10 py-5 rounded-lg text-center hover:scale-105 transition duration-500">
                            <p>92%</p>
                            <p>Average Scores</p>
                        </div>

                    </div>

                </div>

                <div className="flex flex-col gap-3">

                    <div className="flex gap-5 justify-center">

                        <div className="bg-[#182536] flex flex-col items-center justify-center gap-2 px-7 md:px-20 rounded-lg h-40 text-center hover:scale-105 transition duration-500">

                            <FaIdBadge className="text-3xl text-green-400" />

                            <p className="font-bold text-xl">
                                14
                            </p>

                            <p>Badges</p>

                        </div>

                        <div className="bg-[#182536] flex flex-col items-center justify-center gap-2 px-7 md:px-20 rounded-lg h-40 text-center hover:scale-105 transition duration-500">

                            <LiaCertificateSolid className="text-3xl text-green-400" />

                            <p className="font-bold text-xl">
                                14 
                            </p>

                            <p>Certificates</p>

                        </div>

                    </div>

                    <div className="bg-[#182536] rounded-lg flex flex-col items-center justify-center gap-2 h-40 hover:scale-105 transition duration-500">

                        <p className="text-xl font-bold">
                            {coursesCount}
                        </p>

                        <p>Active Courses</p>

                    </div>

                </div>

            </section>

            <div className="flex justify-between items-center mt-10 px-2 md:px-4">
                <h1 className="text-xl font-bold text-white">
                    Recently viewed courses
                </h1>

                <div className="flex items-center gap-3 text-[#8193BD]">
                    <p>View All</p>

                    <Link to="/course">
                        <FaArrowRightLong className="hidden md:block text-2xl" />
                    </Link>
                </div>
            </div>

            <div className="2xl:max-w-7xl 2xl:mx-auto sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 text-white">
                {limitedCourses.map((course) => (
                    <div key={course.id} className="border rounded-lg shadow-lg overflow-hidden">

                        <div className="hover:scale-105 transition duration-700 ease-in-out">
                            <img src={course.image} alt={course.title} className="w-full h-52 object-cover  " />
                        </div>

                        <div className="mt-4 px-4">
                            <span className="bg-[#8193BD] text-xs px-3 py-1 rounded-full">
                                {course.category}
                            </span>
                        </div>

                        <div className="p-4 text-center">
                            <h1 className="font-bold truncate">{course.title}</h1>
                        </div>

                        <div className="p-5">
                            <p><span className="text-[#8193BD] font-bold text-xl">Instructor:</span> {course.instructor}</p>
                             
                            <Link to={`/course/${course.id}`}><button className="bg-[#8193BD] w-full mt-4 py-2 rounded hover:bg-[#6a7cb4]" >Continue Learning</button></Link>
                        </div>

                    </div>

                ))}

            </div >
        </>
    )
}