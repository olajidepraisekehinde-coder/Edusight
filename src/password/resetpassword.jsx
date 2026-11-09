import { useState } from "react"
import { supabase } from "../supabase/supabase";
import { useNavigate } from "react-router-dom";
import { CiLock } from "react-icons/ci";

function ResetPassword() {
    const [showPassword, setShowPassword] = useState("")
    const Navigate = useNavigate()
    const [inputs, setInputs] = useState({
        pwd: '',
        confirmPwd: ""
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (inputs.pwd !== inputs.confirmPwd) {
            alert("Passwords do not match.");
            return;
        }

        const { error } = await supabase.auth.updateUser({
            password: inputs.pwd,
        });

        if (error) {
            alert(error.message);
            return;
        }

        alert("Password updated successfully!");
        Navigate("/login");
    };
    return (
        <section className="py-10">
            <main className="m-10 text-center font-bold text-3xl text-[#8193BD]">
                <h1>Reset Password</h1>
            </main>

            <div className="text-white border border-[#182536] flex flex-col bg-[#182536] max-h-full justify-center  md:max-w-[350px] max-w-[300px] m-auto px-5 pt-5 pb-20 rounded-xl inset-shadow-xl/30">
                <h1 className="text-center font-bold text-2xl py-5">Change Your Password</h1>
                <form onSubmit={handleSubmit}>

                    <label>Reset password<br />
                        <div className="relative rounded-sm shadow-sm flex items-center ">
                            <div className="pointer-events-none absolute inset-x- left-2 top-[20px] items-center">
                                <CiLock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="pwd"
                                value={inputs.pwd}
                                onChange={handleChange}
                                className="bg-[#0B1A2B] text-white mt-3 rounded-sm w-full px-8 py-2" required />
                        </div>
                    </label>

                    <label htmlFor="checkbox" className="flex gap-2 my-5 ">
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)} />
                        Check password
                    </label>

                    <label className="mt-2">Comfirm Password<br />
                        <div className="relative rounded-sm shadow-sm flex items-center">
                            <div className="pointer-events-none absolute inset-x- left-2 top-[20px] items-center">
                                <CiLock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="confirmPwd"
                                value={inputs.confirmPwd}
                                onChange={handleChange}
                                className="bg-[#0B1A2B] text-white mt-2 rounded-sm w-full px-8 py-2" required />
                        </div>
                    </label>

                    <div className="flex justify-center my-5">
                        <button type="submit" className="bg-green-900 px-5 py-2 text-white rounded-md">
                              Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}


export default ResetPassword