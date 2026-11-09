import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";

export default function Avatar({ url, size, onUpload, initials }) {
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        if (url) {
            downloadImage(url);
        }
    }, [url]);

    async function downloadImage(path) {
        try { 
            const { data, error } = await supabase.storage
                .from("avatars")
                .download(path);

            if (error) throw error;

            setAvatarUrl(URL.createObjectURL(data));
        } catch (error) {
            console.log(error.message);
        }
    }

    async function uploadAvatar(event) {
        try {
            setUploading(true);

            const file = event.target.files?.[0];

            if (!file) {
                throw new Error("Please select an image.");
            }

            const fileExt = file.name.split(".").pop();
            const fileName = `${Date.now()}.${fileExt}`;

            const { error } = await supabase.storage
                .from("avatars")
                .upload(fileName, file);

            if (error) throw error;

            onUpload(event, fileName);
        } catch (error) {
            alert(error.message);
        } finally {
            setUploading(false);
        }
    }

    return (
        <div className="flex flex-col items-center gap-4">
            {avatarUrl ? (
                <img
                    src={avatarUrl}
                    alt="Avatar"
                    className="w-[120px] h-[120px] rounded-full object-cover"/>
            ) : (
                <div className="w-[120px] h-[120px] rounded-full bg-[#0B1A3F] flex items-center justify-center text-4xl text-white">
                    {initials}
                </div>
 
            )}
                                   
            <label
                htmlFor="single"
                className="cursor-pointer m-5 bg-[#8193BD] hover:bg-[#6d7fa8] text-white px-5 py-2 rounded-lg transition">
                {uploading ? "Uploading..." : "Upload Photo"}
            </label>

            <input
                id="single"
                type="file"
                accept="image/*"
                onChange={uploadAvatar}
                disabled={uploading}
                className="hidden" />
        </div>
    );
}