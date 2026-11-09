// import { useParams } from "react-router-dom"
import { supabase } from "../supabase/supabase"
import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function Protection({children}) {
    const [user, setUser] = useState(undefined)
     
    useEffect(() =>{
        supabase.auth.getUser().then(({data}) =>{
            setUser(data.user)
        });
    },[])

    if(user === undefined){
        return(

            //  <div className="flex justify-center items-center h-screen">
            //     <BiLoaderAlt className="animate-spin text-4xl text-[#8193BD]" />
            //     {/* <p>Loading...</p> */}
            // </div>
            <div className="min-h-screen bg-[#050816] px-4 py-6 text-white sm:px-6 lg:px-10">
                <div className="mx-auto flex max-w-7xl flex-col gap-10">
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                        <Skeleton height={34} width={140} baseColor="#ffffff14" highlightColor="#ffffff22" />
                        <div className="flex items-center gap-3">
                            <Skeleton height={34} width={90} baseColor="#ffffff14" highlightColor="#ffffff22" />
                            <Skeleton height={34} width={90} baseColor="#ffffff14" highlightColor="#ffffff22" />
                        </div>
                    </div>

                    <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="space-y-4">
                            <Skeleton height={24} width={180} baseColor="#ffffff14" highlightColor="#ffffff22" />
                            <Skeleton height={56} width="90%" baseColor="#ffffff14" highlightColor="#ffffff22" />
                            <Skeleton height={20} width="100%" baseColor="#ffffff14" highlightColor="#ffffff22" />
                            <Skeleton height={20} width="85%" baseColor="#ffffff14" highlightColor="#ffffff22" />
                            <Skeleton height={20} width="70%" baseColor="#ffffff14" highlightColor="#ffffff22" />
                            <div className="flex flex-wrap gap-4 pt-3">
                                <Skeleton height={48} width={170} baseColor="#ffffff14" highlightColor="#ffffff22" />
                                <Skeleton height={48} width={170} baseColor="#ffffff14" highlightColor="#ffffff22" />
                            </div>
                        </div>

                        <Skeleton height={360} className="w-full rounded-2xl" baseColor="#ffffff14" highlightColor="#ffffff22" />
                    </section>

                    <section className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur-sm">
                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                            <Skeleton height={28} width={220} baseColor="#ffffff14" highlightColor="#ffffff22" />
                            <Skeleton height={20} width={140} baseColor="#ffffff14" highlightColor="#ffffff22" />
                        </div>

                        <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                            <div className="space-y-4">
                                <Skeleton height={180} className="w-full rounded-xl" baseColor="#ffffff14" highlightColor="#ffffff22" />
                                <div className="flex gap-3">
                                    <Skeleton height={16} width="35%" baseColor="#ffffff14" highlightColor="#ffffff22" />
                                    <Skeleton height={16} width="35%" baseColor="#ffffff14" highlightColor="#ffffff22" />
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                                <Skeleton height={120} className="w-full rounded-xl" baseColor="#ffffff14" highlightColor="#ffffff22" />
                                <Skeleton height={120} className="w-full rounded-xl" baseColor="#ffffff14" highlightColor="#ffffff22" />
                            </div>
                        </div>
                    </section>

                    <footer className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
                        <Skeleton height={16} width={220} baseColor="#ffffff14" highlightColor="#ffffff22" />
                        <Skeleton height={16} width={180} baseColor="#ffffff14" highlightColor="#ffffff22" />
                    </footer>
                </div>
            </div>
        )
    }

    if(!user){
        return <Navigate to="/" replace />
    }
    return (
        children
    )

}