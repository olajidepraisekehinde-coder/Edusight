import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
// import { IoIosNotifications } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";
import { supabase } from "../supabase/supabase";
import { useUser } from "../utilis/useData";
import Avatar from "./avatar";
import { UseTheme } from "../utilis/useTheme";
 

export default function Navbar({ search, setSearch }) {
    const [isOpen, setIsOpen] = useState(false)

    const [profile, setProfile] = useState(false)

    const { user } = useUser();

    const names = user?.user_metadata?.full_name?.split(" ") || [];

    const initials =
        (names[0]?.charAt(0) || "") +
        (names[1]?.charAt(0) || "");

    const together = initials.toUpperCase();

    const navigate = useNavigate()

    const handleLogOut = async () => {
        await supabase.auth.signOut()
        navigate('/login')
    }


    const [showSearch, setShowSearch] = useState(false)

    const [open, setOpen] = useState(false)

    const [avatarUrl, setAvatarUrl] = useState("");

    async function handleUpload(event, filePath) {
        setAvatarUrl(filePath);

        const {
            data: { user },
        } = await supabase.auth.getUser();

        const { error } = await supabase
            .from("profiles")
            .update({
                avatar_url: filePath,
            })
            .eq("id", user.id);

        if (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        async function getProfile() {
            if (!user) return

            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", user.id)
                .single();

            if (error) {
                console.log(error.message);
                return;
            }

            if (data) {
                setAvatarUrl(data.avatar_url);
            }
        }
        getProfile()
    }, [user])



    return (
        <>
            <header className="fixed top-0 left-0 right-0 h-16 z-50">

                <nav className="flex justify-between items-center p-5 md:px-10 bg-[#8193BD]">

                    {!showSearch && ( // showSearch is false, then show the logo and menu icon

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setOpen(true)} className="lg:hidden text-2xl" >
                                <GiHamburgerMenu className="text-3xl" />
                            </button>

                            <Link to="/home" className="text-[#0B1A2B] font-bold text-3xl pl-3" >EDUSIGHT</Link>

                            <div className="hidden lg:flex gap-5 text-lg">
                                <Link to="/course" className="hover:text-[#0B1A2B]">Courses</Link>
                                <Link to="/dashboard" className="hover:text-[#0B1A2B]">Dashboard</Link>


                            </div>
                        </div>
                    )}

                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex relative items-center">
                            <CiSearch className="absolute left-2 text-gray-400 text-xl" />
                            <input
                                type="text"
                                value={search || ""}
                                onChange={(e) => setSearch?.(e.target.value)}
                                placeholder="Search Course..."
                                className="bg-[#0B1A2B] text-white rounded-md pl-8 pr-4 py-2" />

                        </div>

                        {!showSearch ? (  // !showSearch is true, then show the search icon
                            <CiSearch className="text-2xl lg:hidden "
                                onClick={() => setShowSearch(true)} />

                        ) : ( // showSearch is true, then show the search input and close icon

                            <div className=" flex lg:hidden">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch?.(e.target.value)}
                                    placeholder="Search Course..."
                                    className="bg-[#0B1A2B] text-white rounded-md  pl-8 pr-8 py-2" />

                                <LiaTimesSolid className="text-4xl "
                                    onClick={() => setShowSearch(false)} />
                            </div>
                            // )}
                        )}

                        {!showSearch && ( // showSearch is false, then show the notification and avatar icons
                            <>
                                {/* <IoIosNotifications className="text-2xl" /> */}
                                <FaRegQuestionCircle className="hidden lg:block text-2xl" />

                                <div className="relative">

                                    <RxAvatar className="text-2xl"
                                        onClick={() => setIsOpen(!isOpen)} />

                                    {isOpen && (
                                        <div className="absolute right-0 text-center mt-6 w-48 z-[55] bg-[#0B1A2F] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_-4px_6px_-1px_rgba(0,0,0,0.1)] text-white rounded-lg">
                                            <button onClick={() => { setProfile(true); setIsOpen(false) }} className="block w-full  px-4 py-2 text-left hover:bg-[#0B1B4D] px-3 rounded-lg">Profile</button>

                                            <Link to="/login"> <button onClick={handleLogOut} className="block w-full px-4 py-2 text-left hover:bg-[#0B1B4D] rounded-lg">Logout</button> </Link>

                                            {/* <button onClick={toggle}
                                                className=" py-2 rounded-lg w-9 h-9 flex lg:hidden items-center justify-center rounded-full hover:white/10 transition">
                                                {darkMode ? (
                                                    <FiMoon
                                                        className=" text-[#85A9FF] text-3xl font-bold" />
                                                ) : (<FiSun
                                                    className=" text-[#85A9FF] text-3xl font-bold" />)}
                                            </button>

                                            <button onClick={toggle}
                                                className=" py-2 rounded-lg hidden lg:block">
                                                {darkMode ? (
                                                    <FiMoon
                                                        className=" text-[#85A9FF] text-2xl font-bold" />
                                                ) : (<FiSun
                                                    className=" text-[#85A9FF] text-2xl font-bold" />)}
                                            </button> */}
                                        </div>
                                    )}
                                </div >


                                {profile && (
                                    <div onClick={() => setProfile(false)} className="fixed inset-0 bg-black/50 z-[55] "></div>
                                )}

                                {profile && (
                                    <>
                                        <div className="fixed top-0 right-0 min-w-70 md:w-96 h-full bg-[#0B1A2B] text-white p-5 z-[70] shadow-2xl">

                                            <LiaTimesSolid className="text-4xl text-center "
                                                onClick={() => setProfile(false)} />

                                            <Avatar
                                                url={avatarUrl}
                                                size={150}
                                                onUpload={handleUpload}
                                                initials={together} />

                                            <div className="text-base/10">
                                                <p> <span className="font-bold">Full name:</span> {user?.user_metadata?.full_name}</p>
                                                <p> <span className="font-bold">Email:</span>  {user?.email}</p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </nav>

                {open && (
                    <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 z-[55] lg:hidden"></div>
                )}

                <div className={`fixed top-0 left-0 h-full w-64 md:w-96 text-[#8193BD] bg-[#0B1A2B] p-5 md:px-20 lg:hidden z-[60] transition-transform duration-300  ${open ? "translate-x-0" : "-translate-x-full"}`}>

                    <div className="p-4 text-2xl" >
                        <LiaTimesSolid className="text-4xl"
                            onClick={() => setOpen(false)} />
                    </div>

                    <nav className="flex justify-center text-center text-xl flex-col gap-6 p-6 font-bold mx-auto">
                        <Link onClick={() => setOpen(false)} className="hover:text-white" to="/course">Courses</Link>
                        <Link onClick={() => setOpen(false)} className="hover:text-white" to="/dashboard">Dashboard</Link>

                    </nav>
                </div>
            </header>
        </>

    )
}
