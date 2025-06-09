import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import useIsMobile from "@/hooks/useIsMobile";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    const isMobile = useIsMobile();

    const image = (
        <div
            className="h-52 md:h-72 rounded-t-xl relative"
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Desktop Overlay */}
            {!isMobile && (
                <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex items-center justify-center bg-[#181818]/80 transition-all duration-500">
                    <Link
                        href={gitUrl}
                        className="h-14 w-14 mr-3 rounded-full border border-[#ADB7BE] hover:border-white bg-[#181818]/30 hover:bg-[#181818]/50 flex items-center justify-center transition-colors"
                    >
                        <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] group-hover:text-white" />
                    </Link>
                    <Link
                        href={previewUrl}
                        className="h-14 w-14 rounded-full border border-[#ADB7BE] hover:border-white bg-[#181818]/30 hover:bg-[#181818]/50 flex items-center justify-center transition-colors"
                    >
                        <EyeIcon className="h-8 w-8 text-[#ADB7BE] group-hover:text-white" />
                    </Link>
                </div>
            )}
        </div>
    );

    return (
        <div className="group">
            {isMobile ? (
                <Link href={previewUrl} className="block">
                    {image}
                </Link>
            ) : (
                image
            )}
            <div className="text-white rounded-b-xl mt-5 bg-[#181818] py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
