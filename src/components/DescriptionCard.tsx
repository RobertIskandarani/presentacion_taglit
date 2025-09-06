import type { CardProps, DescriptionCardProps } from '../types/types';

export default function DescriptionCard({
  title,
  src,
  backgroundColor,
}: DescriptionCardProps) {
  return (
    <article
      className={`w-full h-full ${backgroundColor} flex flex-col items-center justify-center gap-5 py-5 rounded-3xl drop-shadow-[0px_0px_8px_rgba(255,255,255,.25)]`}
    >
      {src && (
        <img
          src={src}
          alt={title}
          className='w-32 h-32 object-cover rounded-lg'
        />
      )}
      <p className='text-center text-white font-bold'>{title}</p>
    </article>
  );
}
