import { useState } from "react"
import { supabase } from "../supabase/supabase";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegCircleQuestion } from "react-icons/fa6";

function ForgetPassword() {
    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error } = await supabase.auth.resetPasswordForEmail(input, {
            redirectTo: "https://keen-pixie-f7970d.netlify.app/reset-password",
        });

        if (error) {
            alert(error.message);
            return;
        }

        alert("Password recovery email sent.");
    };
    return (
        <section className="h-full my-10">
            <main className="text-center text-3xl text-white font-bold m-10">

                <h className="text-[#8193BD]">EDUSIGHT</h>
            </main>

            <div className="text-white border border-[#182536] flex flex-col bg-[#182536] max-h-full justify-center max-w-[300px] md:max-w-[350px] m-auto px-5 pt-5 pb-20 rounded-xl inset-shadow-xl/30">
                <FaRegCircleQuestion className="text-5xl font-bold m-auto my-5 text-[#8193BD]" />
                <div>

                    <p>Enter your email address and a link will be sent to your mail</p>
                </div>

                <form onSubmit={handleSubmit} className="text-base/5 text-sm mt-4">
                
                    <label htmlFor="forget">Forget password<br />
                        <div className="relative rounded-sm shadow-sm flex items-center ">
                            <div className="pointer-events-none absolute inset-x- left-2 top-[20px] items-center">
                                <MdOutlineEmail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                value={input}
                                onChange={handleChange}
                                placeholder="example@gmail.com"
                                className="bg-[#0B1A2B] text-white mt-3 rounded-sm w-full px-8 py-2" required
                            />
                        </div>
                    </label><br /><br />

                    <div className="flex justify-center">
                        <button type="submit" className="bg-red-900 px-5 py-2 text-white rounded-md">
                            Send Reset Link
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default ForgetPassword