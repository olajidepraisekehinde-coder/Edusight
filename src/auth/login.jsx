import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { supabase } from "../supabase/supabase";
import Footer from "../component/footer";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Login() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [inputs, setInputs] = useState({
        email: "",
        pwd: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputs((prev) => ({ ...prev, [name]: value, })); //[name] for updating the state
    };

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        setErrorMessage("");
        setSuccessMessage("");

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: inputs.email,
                password: inputs.pwd,
            });

            if (error) {
                setErrorMessage(error.message);
                return;
            };

            setSuccessMessage(
                "🎉 Successfully Logged In! Redirecting to Home..."
            );

            setInputs({
                email: "",
                pwd: "",
            });

            setTimeout(() => {
                navigate("/home");
            }, 2000);

        } catch (error) {
            alert("Something went wrong.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-[#0B1A2B] flex flex-col justify-between">
            <div className="max-w-7xl mx-auto w-full px-6 py-10">
                <h1 className="text-5xl md:text-6xl font-bold text-[#8193BD] text-center">EDUSIGHT</h1>

                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    <div className="text-white">

                        <h2 className="text-3xl font-bold mt-10">Welcome to the Future of Learning </h2>
                        <p className="mt-3 text-lg text-gray-300"> Learn. Build. Grow. </p>

                        <p className="mt-5 text-gray-300 leading-8">
                            EDUSIGHT is an online learning platform built to help students
                            and professionals develop practical, job-ready skills through
                            engaging video courses, real-world projects, and expert guidance.</p>

                        <div className="mt-10 space-y-4 text-lg">

                            <p>Web Development Courses</p>

                            <p>JavaScript, React & Node.js</p>

                            <p>Artificial Intelligence</p>

                            <p>Cybersecurity</p>

                            <p>UI/UX Design</p>

                            <p>Python Programming</p>

                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-12">

                            <div className="bg-[#182536] p-5 rounded-lg text-center">
                                <h2 className="text-3xl font-bold text-[#8193BD]">8+</h2>
                                <p>Professional Courses</p>
                            </div>

                            <div className="bg-[#182536] p-5 rounded-lg text-center">
                                <h2 className="text-3xl font-bold text-[#8193BD]">HD</h2>
                                <p>Video Lessons</p>
                            </div>

                            <div className="bg-[#182536] p-5 rounded-lg text-center">
                                <h2 className="text-3xl font-bold text-[#8193BD]">24/7</h2>
                                <p>Learn Anytime</p>
                            </div>

                            <div className="bg-[#182536] p-5 rounded-lg text-center">
                                <h2 className="text-3xl font-bold text-[#8193BD]">100%</h2>
                                <p>Practical Learning</p>
                            </div>

                        </div>

                    </div>

                    <div className="bg-[#182536] rounded-2xl p-8 shadow-xl lg:w-[400px]">

                        <h1 className="text-3xl font-bold text-[#8193BD] text-center">Login</h1>

                        <h2 className="text-white text-2xl font-semibold mt-6">Welcome Back</h2>

                        <p className="text-[#8193BD] mt-2">Sign in to continue your learning journey.</p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6 text-white">
                            <div>
                                <label className="text-white">Email Address</label>
                                <div className="relative mt-2">
                                    <MdOutlineEmail className="absolute left-3 top-4 text-gray-400 text-xl" />

                                    <input
                                        type="email"
                                        name="email"
                                        value={inputs.email}
                                        onChange={handleChange}
                                        placeholder="example@gmail.com"
                                        className="w-full text-white rounded-lg bg-[#0B1A2B] pl-10 pr-4 py-3 outline-none"
                                        required />
                                </div>
                            </div>

                            <div>
                                <label className="text-white">Password</label>

                                <div className="relative mt-2">
                                    <CiLock className="absolute left-3 top-3 text-gray-400 text-xl" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="pwd"
                                        value={inputs.pwd}
                                        onChange={handleChange}
                                        placeholder="********"
                                        className="w-full rounded-lg pl-10 pr-4 py-3 bg-[#0B1A2B] outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-2 justify-between items-center text-sm">

                                <label className="flex items-center gap-2 text-white">
                                    <input
                                        type="checkbox"
                                        checked={showPassword}
                                        onChange={() => setShowPassword(!showPassword)}
                                    />
                                    Show Password
                                </label>

                                <Link to="/forget-password" className="text-[#8193BD]">Forgot Password?</Link>
                            </div>

                            {errorMessage && (
                                <div className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3">
                                    <p className="text-red-400 text-sm text-center">
                                        {errorMessage}
                                    </p>
                                </div>
                            )}

                            {successMessage && (
                                <div className="mt-4 rounded-lg border border-green-500/40 bg-green-500/10 px-4 py-3">
                                    <p className="text-green-400 text-sm text-center">
                                        {successMessage}
                                    </p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center justify-center gap-2 w-full bg-[#8193BD] hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
                                {loading ? (
                                    <>
                                        <AiOutlineLoading3Quarters className="animate-spin" />
                                        Signing In...
                                    </>
                                ) : (
                                    "Sign In"
                                )}
                            </button>

                        </form>
                        <p className="text-center text-white mt-8">
                            New to EDUSIGHT?{" "}<Link to="/signup" className="text-[#8193BD] font-semibold"> Create an Account </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Login;