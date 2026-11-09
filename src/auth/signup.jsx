import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { supabase } from "../supabase/supabase";
import Footer from "../component/footer";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Signup() {
    const [showPassword, setShowPassword] = useState(false)

    const [errorMessage, setErrorMessage] = useState("");

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        pwd: "",
        confirmPassword: ""
    })

    const password = inputs.pwd;

    const hasUpperCase = /[A-Z]/.test(password);

    const hasLowerCase = /[a-z]/.test(password);

    const hasNumber = /\d/.test(password);

    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const hasEightCharacters = password.length >= 8;

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const [step, setStep] = useState(1)

    const [formError, setFormError] = useState("")

    function nextStep() {
        if (!inputs.name.trim()) {
            setFormError("Full name is required")
            return;
        }

        if (!inputs.email.trim()) {
            setFormError("Email is required")
            return
        }

        setFormError("") //currently no error
        setStep(step + 1)
    }

    function prevStep() {
        setStep(step - 1)
    }


    //handleSubmit
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);

    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        // Password validation
        if (inputs.pwd !== inputs.confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        if (
            !hasUpperCase ||
            !hasLowerCase ||
            !hasNumber ||
            !hasSpecial ||
            !hasEightCharacters
        ) {
            setErrorMessage(
                "Password must contain at least 8 characters, an uppercase letter, a lowercase letter, a number, and a special character."
            );
            return;
        }

        setLoading(true);

        try {
            const { data, error: signUpError } = await supabase.auth.signUp({
                email: inputs.email,
                password: inputs.pwd,
                options: {
                    data: {
                        full_name: inputs.name,
                    },
                },
            });

            if (signUpError) {
                setErrorMessage(signUpError.message);
                return;
            }

            if (data.user) {
                const { error: profileError } = await supabase
                    .from("profiles")
                    .insert({
                        id: data.user.id,
                        full_name: inputs.name,
                    });

                if (profileError) {
                    setErrorMessage(profileError.message);
                    return;
                }
            }

            setSuccessMessage(
                "🎉 Account created successfully! Redirecting to login..."
            );

            setInputs({
                name: "",
                email: "",
                pwd: "",
                confirmPassword: "",
            });

            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (err) {
            console.error(err);
            setErrorMessage("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="">
            <div className="flex justify-between bg-[#182536] px-5 py-5 shadow-lg">
                <h1 className="text-3xl text-[#8193BD] font-bold">EDUSIGHT</h1>

                <div className="flex gap-5 text-white items-center">
                    <h2 className="hidden md:block">Already have an account?</h2>
                    <Link to="/login"><button className="bg-transparent border px-5 rounded-md py-2 text-[#8193BD]">sign in</button></Link>
                </div>
            </div>

            <section className="text-white grid max-w-7xl lg:grid-cols-2 gap-10 justify-center items-center lg:mx-auto px-5">
                <div className="text-white">
                    <h1 className="text-3xl font-bold mt-10">Welcome to the Future of Learning </h1>

                    <p className="my-5 text-gray-300 leading-8">
                        EDUSIGHT is an online learning platform built to help students
                        and professionals develop practical, job-ready skills through
                        engaging video courses, real-world projects, and expert guidance.</p>
                    <p className="mt-3 text-lg text-gray-300"> Learn. Build. Grow. </p>

                    <div>

                        <p className="text-green-800 bg-green-950 rounded-md border w-64 text-center mb-5">Next-Gen Learning Platform</p>
                        <h1 className="font-bold text-3xl">Master The Future of
                            <span className="text-[#8193BD]"> Engineering</span></h1>
                        <p>Join 50,000+ professionals advancing their careers through expert-led technical curriculums</p>
                    </div>

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

                <div className=" bg-[#182536] max-w-7xl lg:w-[400px] p-6 pb-20 rounded-xl inset-shadow-xl/30 space-y-6">
                    <div className="text-white">
                        <h1 className="font-bold text-2xl text-[#8193BD] text-center">Create an Account</h1>
                        <h1 className="font-bold text-2xl pt-4">Welcome To EDUSIGHT</h1>
                        <p className="text-sm text-[#8193BD] my-5" >Select your path and start learning today</p>

                        <form onSubmit={handleSubmit} className="text-base/5 text-sm mt-5  ">

                            {step === 1 && (
                                <>
                                    <label htmlFor="name">Full Name:
                                        <div className="relative  rounded-sm shadow-sm flex mt-2">
                                            <div className="pointer-events-none absolute left-2 top-[12px]">
                                                <CgProfile className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                value={inputs.name}
                                                placeholder="John Doe"
                                                onChange={handleChange}
                                                className="w-full bg-[#0B1A2B] text-white rounded-lg pl-10 pr-4 py-3 outline-none" required />
                                        </div>
                                    </label><br />



                                    <label htmlFor="email">Email Address:
                                        <div className="relative rounded-sm shadow-sm flex mt-2">
                                            <div className="pointer-events-none absolute inset-x- left-2 top-[12px] items-center">
                                                <MdOutlineEmail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={inputs.email}
                                                placeholder="example@gmail.com"
                                                onChange={handleChange}
                                                className="w-full bg-[#0B1A2B] text-white rounded-lg pl-10 pr-4 py-3 outline-none" required />
                                        </div>
                                    </label><br />


                                    <div className="flex justify-center">
                                        <button onClick={nextStep} className="bg-[#8193BD] px-[4rem] py-3 mt-5 rounded-md hover:bg-[#0B1A2B]">Next Step</button>
                                    </div>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <label htmlFor="pwd">Password:
                                        <div className="relative rounded-sm shadow-sm flex items-center ">
                                            <div className="pointer-events-none absolute inset-x- left-2 top-[20px] items-center">
                                                <CiLock className="h-5 w-5 text-gray-400" />
                                            </div>

                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="pwd"
                                                value={inputs.pwd}
                                                onChange={handleChange}
                                                placeholder="****"
                                                className="bg-[#0B1A2B] mt-3 rounded-sm w-full px-8 py-2 hover:border-black" required />
                                        </div>
                                    </label><br />

                                    <label htmlFor="checkbox" className="flex gap-2 py-2">

                                        <input
                                            type="checkbox"
                                            checked={showPassword}
                                            onChange={() => setShowPassword(!showPassword)} />
                                        Check password
                                    </label>

                                    <div className="mt-3 text-sm">
                                        <p>
                                            {hasEightCharacters ? "✅" : "❌"} At least 8 characters
                                        </p>

                                        <p>
                                            {hasUpperCase ? "✅" : "❌"} One uppercase letter
                                        </p>

                                        <p>
                                            {hasLowerCase ? "✅" : "❌"} One lowercase letter
                                        </p>

                                        <p>
                                            {hasNumber ? "✅" : "❌"} One number
                                        </p>

                                        <p>
                                            {hasSpecial ? "✅" : "❌"} One special character
                                        </p>

                                    </div>

                                    <label htmlFor="confirmPassword"> Confirm Password
                                        <div className="relative rounded-sm shadow-sm flex items-center ">
                                            <div className="pointer-events-none absolute inset-x- left-2 top-[24px] items-center">
                                                <CiLock className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="confirmPassword"
                                                value={inputs.confirmPassword}
                                                onChange={handleChange}
                                                placeholder="confirmPassword"
                                                className="bg-[#0B1A2B] mt-4 rounded-sm w-full px-8 py-2 hover:border-black " required />
                                        </div>
                                    </label>

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

                                    <div className="flex gap-5 justify-center">
                                        <button onClick={prevStep} className="bg-transparent border px-8 py-2 mt-5 rounded-md hover:bg-[#0B1A2B]">Back</button>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="flex items-center justify-center gap-2 w-full bg-[#8193BD] px-10 py-3 mt-5 rounded-md hover:bg-[#0B1A2B] text-white  rounded-lg font-semibold transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
                                            {loading ? (
                                                <>
                                                    <AiOutlineLoading3Quarters className="animate-spin" />
                                                    Signing Up...
                                                </>
                                            ) : (
                                                "Sign Up"
                                            )}
                                        </button>
                                    </div>
                                </>
                            )}
                        </form>

                        <p className="text-center text-white mt-8">Already Have An Account?{" "}<Link to="/login" className="text-[#8193BD] font-semibold"> Login Now </Link>  </p>

                    </div>
                </div>
            </section>
            <Footer />
        </section>
    )
}

export default Signup