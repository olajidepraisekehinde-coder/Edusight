import courses from "../pages/courses";
// import { IoStar } from "react-icons/io5";
import Navbar from "../component/navbar"
import { useState } from "react"
import { Link } from "react-router-dom";
import Footer from "./footer";

export default function Coursecard() {

    const categories = [ 
        "All", 
        "Frontend",
        "Backend",
        "Web Development",
        "Programming",
        "Cybersecurity",
        "Design",
        "Artificial Intelligence"
    ];
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filteredCourses = courses.filter((course) => {
        const matcheSearch = course.title.toLowerCase().includes(search.toLowerCase())
        const matchesCategory =
            category === "All" ||
            course.category === category;

        return matcheSearch && matchesCategory;

    })

    return (
        <>
            <Navbar
                search={search}
                setSearch={setSearch} />
                

            <div className="mt-[6rem]">
                <div className="py-20 bg-[#0B1A2E] my-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                    <h1 className="md:text-4xl text-lg font-bold text-[#8193BD] text-center">Master the craft of all design</h1>
                </div>
            </div>

            <div className="relative">
                <div className="px-10 absolute top-65 left-0 h-full text-white rounded-lg  hidden lg:block">
                    <h1 className="text-[#8193BD] font-bold text-2xl pb-5 text-center">Filter all courses</h1>

                    {categories.map((item) => (
                        <label key={item} className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-[#8193BD] hover:text-white transition-colors rounded-lg duration-300">
                            <input
                                type="radio"
                                name="category"
                                value={item}
                                checked={category === item}
                                onChange={(e) => setCategory(e.target.value)} />
                            {item}
                        </label>
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-6 px-4 lg:hidden">

                {categories.map((item) => (
                    <button
                        key={item}
                        onClick={() => setCategory(item)}
                        className={`px-4 py-2 rounded-md ${category === item
                            ? "bg-[#8193BD]  text-white"
                            : "bg-gray-200 text-black"}`}> {item}
                    </button>
                ))}
            </div>


            <div className="2xl:max-w-7xl 2xl:mx-auto sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl: xl:grid-cols-3 gap-6 p-8 text-white lg:ml-64">
                {filteredCourses.map((course) => (
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
                            <p><span className="text-[#8193BD] font-bold text-xl">Duration:</span> {course.duration}</p>
                            <p><span className="text-[#8193BD] font-bold text-xl">Student:</span> {course.students}</p>
                            <p><span className="text-[#8193BD] font-bold text-xl">Price:</span> {course.price}</p>

                            <div className="">
                                {/* <IoStar className="text-yellow-300 text-xl" /> */}
                                <p>{course.rating}</p>
                            </div>

                            <Link to={`/course/${course.id}`}><button className="bg-[#8193BD] w-full mt-4 py-2 rounded hover:bg-[#6a7cb4]" >Start Learning</button></Link>
                        </div>

                    </div>

                ))}

            </div >

            <footer className="bg-[#0B1A2F] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_-4px_6px_-1px_rgba(0,0,0,0.1)] mt-5 py-10">

                <div className="flex flex-col lg:flex-row justify-around gap-5 text-white px-20 ">
                    <div>
                        <h1 className="text-4xl font-bold text-[#8193BD]">EDUSIGHT</h1>
                        <p className="max-w-96 pt-5">
                            Elevating technical education for the next generation of software
                            engineers and system architects.
                        </p>
                    </div>

                    <main className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 text-base/8">
                        <div>
                            <h2 className="text-xl font-bold text-[#8193BD]">Platform</h2>
                            <ul>
                                <li>Browse Catalog</li>
                                <li>Enterprise Solutions</li>
                                <li>Instructor Portal</li>
                                <li>Certification</li>
                            </ul>
                        </div>

                        <div className="text-center">
                            <h2 className="text-xl font-bold text-[#8193BD]">Resources</h2>
                            <ul className="">
                                <li>About</li>
                                <li>Career</li>
                                <li>Privacy</li>
                                <li>Terms</li>
                            </ul>
                        </div>

                        {/* <div>
                            <h2 className="text-xl font-bold text-[#8193BD]">Connect</h2>

                        </div> */}
                    </main>
                </div>
            </footer>
            <Footer />
        </>
    )

}





