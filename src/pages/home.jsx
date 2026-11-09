import { FaArrowRightLong } from "react-icons/fa6";
import { FaLongArrowAltDown } from "react-icons/fa";
import Navbar from "../component/navbar"
import { FaAward } from "react-icons/fa";
import images from "../assets/code.webp"
import { Link } from "react-router-dom";
import courses from "../pages/courses";
import Footer from "../component/footer";
import { motion } from "framer-motion";
// import {SplitText} from "../split/splitText";

function Home() {
    const limitedCourses = courses.slice(1, 2);

    return (
        <main className="overflow-hidden mt-20">
            <Navbar search={false} />

            <div className="2xl:max-w-7xl 2xl:mx-auto">

                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-5 mt-6 flex flex-col justify-center gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#111a2f] via-[#0e1730] to-[#050816] px-5 py-8 shadow-[0_0_60px_rgba(129,147,189,0.18)] md:mt-10 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-12">

                    <div className="max-w-2xl lg:w-[500px]">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-5 flex items-center gap-3 rounded-full border border-[#8193BD]/30 bg-white/10 md:w-80 px-4 py-2 shadow-lg shadow-[#8193BD]/10 backdrop-blur-md">
                            <FaAward className="h-5 w-5 text-[#7B90BC]" />
                            <p className="text-sm font-semibold tracking-[0.2em] text-[#aab8db] uppercase">Professional Growth</p>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.65, delay: 0.15 }}
                            className="text-3xl font-black leading-tight text-white md:text-3xl">
                            Master Technical
                            <span className="block bg-gradient-to-r from-[#8193BD] to-[#d7e0f8] bg-clip-text text-transparent">Engineering Excellence</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.65, delay: 0.2 }}
                            className="mt-4 max-w-xl text-base text-slate-300 md:text-lg" >
                            <p>Deep-dive curriculum designed for developers and engineers. Gain mastery through instructor-led labs, world-class mentorship, and industry-standard certifications.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="mt-7 flex flex-col gap-3 sm:flex-row" >
                            <Link to="/course" className="rounded-full bg-gradient-to-r from-[#8193BD] to-[#a8b8de] px-6 py-3 text-center font-semibold text-[#0b1220] transition hover:scale-[1.03] hover:shadow-lg hover:shadow-[#8193BD]/30">
                                Start Learning
                            </Link>
                            <button className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:border-[#8193BD]/50 hover:bg-[#8193BD]/15">
                                View Curriculum
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.75, delay: 0.2 }}
                        className="relative lg:w-[470px]" >

                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-[#8193BD]/20 to-[#dfe8ff]/10 blur-3xl" />
                        <motion.img
                            src={images}
                            alt="hera"
                            whileHover={{ scale: 1.03, rotate: -1 }}
                            transition={{ duration: 0.35 }}
                            className="relative w-full rounded-[2rem] border border-white/10 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.35)]" />
                    </motion.div>
                </motion.section>

                <aside className="mt-10 rounded-[2rem] border border-white/10 bg-[#0B1A2F]/90 px-5 py-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm lg:px-10">
                    <div className="py-5">
                        <h1 className="text-3xl font-bold">Featured Curriculum</h1>

                        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <p className="max-w-xl text-slate-300">Precision engineered learning paths for modern stacks, curated for ambitious builders and future-ready engineers.</p>

                            <div className="flex flex-col items-center gap-4 text-[#8193BD]">
                                <FaLongArrowAltDown className="text-2xl font-bold animate-bounce md:hidden" />
                                <Link to="/course" className="rounded-full border border-[#8193BD]/30 px-4 py-2 text-sm font-semibold transition hover:bg-[#8193BD]/15 md:hidden">All courses</Link>

                                <Link to="/course" className="hidden items-center gap-2 rounded-full border border-[#8193BD]/30 px-4 py-2 text-sm font-semibold transition hover:bg-[#8193BD]/15 md:flex">
                                    All courses
                                    <FaArrowRightLong className="text-lg" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <section>
                        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                            {limitedCourses.map((course, index) => (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, delay: index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.01 }}
                                    className="h-[400px] w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111d31] shadow-[0_16px_40px_rgba(0,0,0,0.24)]">
                                    <img src={course.image} alt={course.title} className="h-64 w-full object-cover" />

                                    <div className="flex gap-5 px-8 py-6 text-sm text-slate-300">
                                        <span className="rounded-full border border-[#8193BD]/25 bg-[#8193BD]/10 px-3 py-1">4h Content</span>
                                        <span className="rounded-full border border-[#8193BD]/25 bg-[#8193BD]/10 px-3 py-1">12.4k students</span>
                                    </div>
                                </motion.div>
                            ))}

                            <div className="grid gap-4 md:m-auto lg:m-0 md:w-[420px] md:grid-cols-2 lg:grid-cols-1">
                                <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-[#182536] to-[#111c2f] p-6 text-center shadow-lg shadow-black/20">
                                    <h2 className="text-3xl font-bold text-[#8193BD]">HD</h2>
                                    <p className="mt-2 text-slate-300">Video Lessons</p>
                                </div>

                                <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-[#182536] to-[#111c2f] p-6 text-center shadow-lg shadow-black/20">
                                    <h2 className="text-3xl font-bold text-[#8193BD]">24/7</h2>
                                    <p className="mt-2 text-slate-300">Learn Anytime</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </aside>
            </div>
            <Footer />
        </main >
    )
}
export default Home

