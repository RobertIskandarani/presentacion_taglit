import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import type { CardProps } from "../types/types";

export default function Card({ title, icon, backgroundColor, onClick }: CardProps) {
    return (
        <article onClick={onClick} className={`w-[7rem] h-full cursor-pointer ${backgroundColor} flex flex-col items-center justify-start gap-5 py-5 rounded-3xl drop-shadow-[0px_0px_8px_rgba(255,255,255,.25)]`}>
            {icon === 'sun' ?
                <IoSunnyOutline color='white' size={64} />
                : icon === 'moon' ?
                    <FaRegMoon color='white' size={54} /> :
                    icon === 'stars' ?
                        <BsStars color='white' size={64} />
                        : null
            }
            <p className="text-center">{title}</p>
        </article>
    )
}