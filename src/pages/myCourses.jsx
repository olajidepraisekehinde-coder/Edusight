
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import { useUser } from "../utilis/useData";
// import { Link } from "react-router-dom";
import courses from "./courses";

export default function Dashboard() {
    const { user } = useUser();
    const coursesCount = courses.length;
    const [avatarUrl, setAvatarUrl] = useState("");

    useEffect(() => {
        async function getProfile() {
            if (!user) return;

            const { data, error } = await supabase
                .from("profiles")
                .select("avatar_url")
                .eq("id", user.id)
                .single();

            if (error) {
                console.log(error.message);
                return;
            }

            if (data?.avatar_url) {
                const { data: imageData } = supabase.storage
                    .from("avatars")
                    .getPublicUrl(data.avatar_url);

                setAvatarUrl(imageData.publicUrl);
            }
        }

        getProfile();
    }, [user]);

    return (
        <>
            <div className="relative">
                <div className="bg-[#050816] hidden md:block shadow-3xl p-20 w-full rounded-xl border-[#050842] border">

                </div>

                <div className="flex gap-3 ">

                    <div className="absolute top-[8rem] left-[1rem] md:top-[8rem] md:left-[5rem] hidden md:block">
                        {avatarUrl && (
                            <img
                                src={avatarUrl}
                                alt="Profile"
                                className="w-20 h-20 rounded-full object-cover border-2 border-[#8193BD]" />
                        )}
                    </div>

                    <div className="md:absolute md:top-[9rem] md:left-[15rem]" >
                        <h1 className="text-2xl font-bold">
                            Welcome{" "}
                            <span className="text-[#8193BD]">
                                {user?.user_metadata?.full_name || "User"}
                            </span>
                        </h1>
                    </div>
                </div >
            </div>


            <div className="flex flex-col md:flex-row gap-5 my-10 md:my-20 justify-center">

                <div className="bg-[#182536] shadow-xl p-8 rounded-xl text-center">
                    <h1>{coursesCount}</h1>
                    <p>Total Courses</p>
                </div>

                <div className="bg-[#182536] shadow-xl p-8 rounded-xl text-center">
                    <h1>0</h1>
                    <p>Completed Courses</p>
                </div>

                <div className="bg-[#182536] shadow-xl p-8 rounded-xl text-center">
                    <h1>0</h1>
                    <p>Certificates</p>
                </div>
            </div>

        </>
    );
}