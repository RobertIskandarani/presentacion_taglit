import clsx from 'clsx';
import { useState } from 'react';
import React from 'react';
import { GiBookshelf } from 'react-icons/gi';
import { IoMusicalNotesOutline } from 'react-icons/io5';
import { LuGraduationCap, LuPuzzle } from 'react-icons/lu';
import { Answer, getAnswers } from '../lib/answers-api';

export default function Answers() {
  const [knowMe, setKnowMe] = useState<boolean>(false);
  const [apiAnswers, setApiAnswers] = useState<Answer[]>([]);

  const myAnswers = [
    {
      id: 1,
      answer: 'Ingeniería en Informática',
    },

    {
      id: 2,
      answer: 'Juegos de mesa',
    },
    {
      id: 3,
      answer: 'Emprendimiento',
    },
    {
      id: 4,
      answer: 'Capacitaciones',
    },
    {
      id: 5,
      answer: 'Rock nacional',
    },
  ];

  const fetchApiAnswers = async () => {
    try {
      const response = await getAnswers();
      setApiAnswers(response.data || []);
    } catch (error) {
      console.error('Error fetching answers:', error);
    }
  };

  const letsKnowMe = () => {
    setKnowMe(true);
    fetchApiAnswers();
  };

  return (
    <main className='w-full h-screen flex justify-center items-center p-4 bg-bg-planets relative overflow-hidden'>
      {/* Raining answers background - only API answers */}
      <div className='absolute inset-0 pointer-events-none'>
        {knowMe &&
          apiAnswers.length > 0 &&
          apiAnswers.map((answer, index) => (
            <div
              key={`rain-${answer.id || index}`}
              className='absolute text-center text-white text-sm font-bold animate-rain'
              style={{
                left: `${(index * 20) % 100}%`,
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${8 + (index % 3)}s`,
                transform: `perspective(1000px) rotateX(${15 + (index % 3) * 10}deg) translateZ(${(index % 3) * 50}px)`,
                zIndex: index % 3,
                opacity: 0,
              }}
            >
              {answer.answer || 'Sin respuesta'}
            </div>
          ))}
        {/* Additional rain elements for more density - only API answers */}
        {knowMe &&
          myAnswers.map((answer, index) => (
            <div
              key={`extra-rain-${index}`}
              className='absolute text-center text-white text-xs font-bold animate-rain'
              style={{
                left: `${(index * 15 + 30) % 100}%`,
                animationDelay: `${index * 0.3}s`,
                animationDuration: `${8 + (index % 4)}s`,
                transform: `perspective(1000px) rotateX(${20 + (index % 2) * 15}deg) translateZ(${(index % 2) * 30}px)`,
                zIndex: (index % 2) + 1,
                opacity: 0,
              }}
            >
              {answer.answer}
            </div>
          ))}
      </div>

      {knowMe ? (
        <div className='w-3/4 flex flex-col gap-4 justify-center items-center relative z-10'>
          <div className='flex gap-4 w-full justify-center items-center'>
            <div
              className={clsx(
                'w-1/3 h-56 rounded-lg overflow-hidden border border-white/20 flex flex-col justify-between'
              )}
            >
              <div className='bg-bg-planets/50 flex-col backdrop-blur-md p-4 gap-4 h-full flex items-center justify-center'>
                <GiBookshelf size={64} />
                <p className='text-center'>¿Qué estudié?</p>
              </div>
            </div>
            <div
              className={clsx(
                'w-1/3 h-56 rounded-lg overflow-hidden border border-white/20 flex flex-col justify-between'
              )}
            >
              <div className='bg-bg-planets/50 flex-col backdrop-blur-md p-4 gap-4 h-full flex items-center justify-center'>
                <LuPuzzle size={64} />
                <p className='text-center'>Algún hobby mio?</p>
              </div>
            </div>
            <div
              className={clsx(
                'w-1/3 h-56 rounded-lg overflow-hidden border border-white/20 flex flex-col justify-between'
              )}
            >
              <div className='bg-bg-planets/50 flex-col backdrop-blur-md p-4 gap-4 h-full flex items-center justify-center'>
                <img
                  src='/assets/yuppie.png'
                  alt='yuppie'
                  className='w-auto h-16'
                />
                <p className='text-center'>¿Qué es yuppie?</p>
              </div>
            </div>
          </div>
          <div className='flex gap-4 w-full justify-center items-center'>
            <div
              className={clsx(
                'w-1/2 h-56 rounded-lg overflow-hidden border border-white/20 flex flex-col justify-between'
              )}
            >
              <div className='bg-bg-planets/50 flex-col backdrop-blur-md p-4 gap-4 h-full flex items-center justify-center'>
                <LuGraduationCap size={64} />
                <p className='text-center'>
                  ¿Qué hago relacionado a la educación?
                </p>
              </div>
            </div>
            <div
              className={clsx(
                'w-1/2 h-56 rounded-lg overflow-hidden border border-white/20 flex flex-col justify-between'
              )}
            >
              <div className='bg-bg-planets/50 flex-col backdrop-blur-md p-4 gap-4 h-full flex items-center justify-center'>
                <IoMusicalNotesOutline size={64} />
                <p className='text-center'>¿Qué estilo músical me gusta?</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col gap-20 relative z-10'>
          <h1 className='text-center text-4xl'>Soy</h1>
          <div className='flex gap-5'>
            <h1
              className='text-8xl text-bg-sun drop-shadow-[0px_0px_8px_rgba(67,105,255,0.5)] animate-flag'
              style={{ animationDelay: '0s' }}
            >
              R
            </h1>
            <h1
              className='text-8xl drop-shadow-[0px_0px_8px_rgba(255,255,255,0.5)] animate-flag'
              style={{ animationDelay: '0.2s' }}
            >
              O
            </h1>
            <h1
              className='text-8xl text-bg-sun drop-shadow-[0px_0px_8px_rgba(67,105,255,0.5)] animate-flag'
              style={{ animationDelay: '0.4s' }}
            >
              B
            </h1>
            <h1
              className='text-8xl drop-shadow-[0px_0px_8px_rgba(255,255,255,0.5)] animate-flag'
              style={{ animationDelay: '0.6s' }}
            >
              E
            </h1>
            <h1
              className='text-8xl text-bg-sun drop-shadow-[0px_0px_8px_rgba(67,105,255,0.5)] animate-flag'
              style={{ animationDelay: '0.8s' }}
            >
              R
            </h1>
            <h1
              className='text-8xl drop-shadow-[0px_0px_8px_rgba(255,255,255,0.5)] animate-flag'
              style={{ animationDelay: '1s' }}
            >
              T
            </h1>
          </div>
          <button
            className='px-8 py-4 text-4xl rounded-lg bg-bg-sun hover:bg-bg-sun/80 hover:scale-105 transition-all duration-300 cursor-pointer text-white'
            onClick={letsKnowMe}
          >
            Conoceme mejor
          </button>
        </div>
      )}
    </main>
  );
}
