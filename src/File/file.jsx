


import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";
import { supabase } from "../supabase/supabase";
import { useUser } from "../utilis/useData";
import Avatar from "./avatar";

export default function Navbar({ search, setSearch }) {
    const [open, setOpen] = useState(false);

    const [profileOpen, setProfileOpen] = useState(false);

    const [showSearch, setShowSearch] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);

    const [avatarUrl, setAvatarUrl] = useState("");

    const { user } = useUser();
    const navigate = useNavigate();

    const fullName = user?.user_metadata?.full_name || "";

    const initials =
        (fullName[0]?.charAt(0) || "") +
        (fullName[1]?.charAt(0) || "");

    const together = initials.toUpperCase();

    // const initials = fullName
    //     .split(" ")
    //     .map(n => n[0])
    //     .join("")
    //     .toUpperCase();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/login");
    };

    const handleUpload = async (event, filePath) => {
        setAvatarUrl(filePath);

        const { data } = await supabase.auth.getUser();

        await supabase
            .from("profiles")
            .update({ avatar_url: filePath })
            .eq("id", data.user.id);
    };

    useEffect(() => {
        const fetchProfile = async () => {
            if (!user) return;

            const { data } = await supabase
                .from("profiles")
                .select("avatar_url")
                .eq("id", user.id)
                .single();

            if (data) setAvatarUrl(data.avatar_url);
        };

        fetchProfile();
    }, [user]);

    const showMainNav = !showSearch;

    return (
        <>
            <nav className="flex justify-between items-center p-5 md:px-10 bg-[#8193BD]">

                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">

                    <button
                        onClick={() => setMenuOpen(true)}
                        className="lg:hidden text-2xl">
                        <GiHamburgerMenu />
                    </button>

                    <Link to="/home" className="text-[#0B1A2B] font-bold text-3xl">
                        EDUSIGHT
                    </Link>

                    <div className="hidden lg:flex gap-5">
                        <Link to="/course">Courses</Link>
                        <Link to="/dashboard">Dashboard</Link>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-4">

                    {/* Desktop Search */}
                    <div className="hidden lg:flex items-center relative">
                        <CiSearch className="absolute left-2 text-gray-400" />
                        <input
                            value={search || ""}
                            onChange={(e) => setSearch?.(e.target.value)}
                            placeholder="Search Course..."
                            className="bg-[#0B1A2B] text-white rounded-md pl-8 py-2"
                        />
                    </div>

                    {/* Mobile Search Toggle */}
                    {showMainNav && (
                        <CiSearch
                            className="text-2xl lg:hidden"
                            onClick={() => setShowSearch(true)} />
                    )}

                    {/* Mobile Search Input */}
                    {showSearch && (
                        <div className="flex lg:hidden items-center gap-2">
                            <input
                                value={search}
                                onChange={(e) => setSearch?.(e.target.value)}
                                className="bg-[#0B1A2B] text-white rounded-md pl-3 py-2" />

                            <LiaTimesSolid
                                className="text-3xl cursor-pointer"
                                onClick={() => setShowSearch(false)}/>
                        </div>
                    )}

                    {/* ICONS */}
                    {showMainNav && (
                        <>
                            <FaRegQuestionCircle className="hidden lg:block text-2xl" />

                            <div className="relative">
                                <RxAvatar
                                    className="text-2xl cursor-pointer"
                                    onClick={() => setProfileOpen(!profileOpen)} />

                                {profileOpen && (
                                    <div className="absolute right-0 mt-3 w-48 bg-[#0B1A2B] text-white rounded-lg shadow-xl">
                                        <button
                                            onClick={() => {
                                                setOpen(true);
                                                setProfileOpen(false);
                                            }}
                                            className="block w-full px-4 py-2 hover:bg-black text-left">
                                            Profile
                                        </button>

                                        <button className="block w-full px-4 py-2 hover:bg-black text-left">
                                            Settings
                                        </button>

                                        <button
                                            onClick={handleLogout}
                                            className="block w-full px-4 py-2 hover:bg-black text-left" >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </nav>

            
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 bg-black/50 z-[55] lg:hidden"/>
            )}

            {/* SIDEBAR */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-[#0B1A2B] text-[#8193BD] p-5 z-[60] transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>

                <LiaTimesSolid
                    className="text-3xl cursor-pointer"
                    onClick={() => setMenuOpen(false)}/>

                <div className="mt-10 flex flex-col gap-6 text-xl">
                    <Link onClick={() => setMenuOpen(false)} to="/course">Courses</Link>
                    <Link onClick={() => setMenuOpen(false)} to="/dashboard">Dashboard</Link>
                </div>
            </div>

          
            {open && (
                <div className="fixed top-0 right-0 w-80 h-full bg-[#0B1A2B] text-white p-5 z-[70]">

                    <LiaTimesSolid
                        className="text-3xl cursor-pointer"
                        onClick={() => setOpen(false)}  />

                    <div className="flex flex-col items-center  gap-4 mt-6">
                 
                        <Avatar
                            url={avatarUrl}
                            size={120}
                            onUpload={handleUpload}
                            initials={together} />

                        <div className="text-base/10">
                            <p> <span className="font-bold">Full name:</span> {user?.user_metadata?.full_name}</p>
                            <p> <span className="font-bold">Email:</span>  {user?.email}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
