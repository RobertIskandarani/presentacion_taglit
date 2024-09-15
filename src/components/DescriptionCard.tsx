import type { CardProps, DescriptionCardProps } from "../types/types";

export default function DescriptionCard({ title, src, backgroundColor }: DescriptionCardProps) {
    return (
        <article className={`w-full h-full ${backgroundColor} flex flex-col items-center justify-center gap-5 py-5 rounded-3xl drop-shadow-[0px_0px_8px_rgba(255,255,255,.25)]`}>
            <img src={src} alt="" />
            <p className="text-center">{title}</p>
        </article>
    )
}