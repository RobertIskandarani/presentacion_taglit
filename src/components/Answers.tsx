import clsx from 'clsx';
import { useState } from 'react';
import React from 'react';
import { GiBookshelf } from 'react-icons/gi';
import { IoMusicalNotesOutline } from 'react-icons/io5';
import { LuGraduationCap, LuPuzzle } from 'react-icons/lu';

export default function Answers() {
  const [knowMe, setKnowMe] = useState<boolean>(false);

  const hardcodedAnswers = [
    {
      id: 1,
      question: '¿Qué estudié?',
      answer: 'Ingeniería en Informática',
    },
    {
      id: 2,
      question: 'Algún hobby mio?',
      answer: 'Jugar juegos de mesa',
    },
    {
      id: 3,
      question: '¿Qué es yuppie?',
      answer: 'Mi emprendimiento',
    },
    {
      id: 4,
      question: '¿Qué hago relacionado a la educación?',
      answer: 'Doy capacitaciones en clubes',
    },
    {
      id: 5,
      question: '¿Qué estilo músical me gusta?',
      answer: 'Rock nacional',
    },
  ];

  const letsKnowMe = () => {
    setKnowMe(true);
  };

  return (
    <main className='w-full h-screen flex justify-center items-center p-4 bg-bg-planets'>
      {knowMe ? (
        <div className='w-3/4 flex flex-col gap-4 justify-center items-center'>
          <div className='flex gap-4 w-full justify-center items-center'>
            <div
              className={clsx(
                'w-1/3 h-56 rounded-lg overflow-hidden border border-white/20 flex flex-col justify-between'
              )}
            >
              <div className='bg-white/10 p-4 gap-2 h-20 flex items-center justify-center'>
                <GiBookshelf size={24} />
                <p className='text-center'>¿Qué estudié?</p>
                <GiBookshelf size={24} />
              </div>
              <div className='p-4 h-36 bg-bg-planets/50 backdrop-blur-md flex items-center justify-center'>
                <p className='text-center'>Ingeniería en Informática</p>
              </div>
            </div>
            <div
              className={clsx(
                'w-1/3 h-56 rounded-lg overflow-hidden border border-white/20 flex flex-col justify-between'
              )}
            >
              <div className='bg-white/10 gap-2 p-4 h-20 flex items-center justify-center'>
                <LuPuzzle size={24} />
                <p className='text-center'>Algún hobby mio?</p>
                <LuPuzzle size={24} />
              </div>
              <div className='p-4 h-36 bg-bg-planets/50 backdrop-blur-md flex items-center justify-center'>
                <p className='text-center'>Juegos de mesa</p>
              </div>
            </div>
            <div
              className={clsx(
                'w-1/3 h-56 rounded-lg overflow-hidden border border-white/20 flex flex-col justify-between'
              )}
            >
              <div className='bg-white/10 gap-2 p-4 h-20 flex items-center justify-center'>
                <img
                  src='/assets/yuppie.png'
                  alt='yuppie'
                  className='w-auto h-6'
                />
                <p className='text-center'>¿Qué es yuppie?</p>
                <img
                  src='/assets/yuppie.png'
                  alt='yuppie'
                  className='w-auto h-6'
                />
              </div>
              <div className='p-4 h-36 bg-bg-planets/50 backdrop-blur-md flex items-center justify-center'>
                <p className='text-center'>Mi emprendimiento</p>
              </div>
            </div>
          </div>
          <div className='flex gap-4 w-full justify-center items-center'>
            <div
              className={clsx(
                'w-1/2 h-56 rounded-lg overflow-hidden border border-white/20 flex flex-col justify-between'
              )}
            >
              <div className='bg-white/10 gap-2 p-4 h-20 flex items-center justify-center'>
                <LuGraduationCap size={24} />
                <p className='text-center'>
                  ¿Qué hago relacionado a la educación?
                </p>
                <LuGraduationCap size={24} />
              </div>
              <div className='p-4 h-36 bg-bg-planets/50 backdrop-blur-md flex items-center justify-center'>
                <p className='text-center'>Doy capacitaciones en clubes</p>
              </div>
            </div>
            <div
              className={clsx(
                'w-1/2 h-56 rounded-lg overflow-hidden border border-white/20 flex flex-col justify-between'
              )}
            >
              <div className='bg-white/10 gap-2 p-4 h-20 flex items-center justify-center'>
                <IoMusicalNotesOutline size={24} />
                <p className='text-center'>¿Qué estilo músical me gusta?</p>
                <IoMusicalNotesOutline size={24} />
              </div>
              <div className='p-4 h-36 bg-bg-planets/50 backdrop-blur-md flex items-center justify-center'>
                <p className='text-center'>Rock nacional</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col gap-5'>
          <h1 className='text-center text-4xl'>Soy</h1>
          <div className='flex gap-5'>
            <h1 className='text-8xl text-bg-sun drop-shadow-[0px_0px_8px_rgba(67,105,255,0.5)]'>
              R
            </h1>
            <h1 className='text-8xl drop-shadow-[0px_0px_8px_rgba(255,255,255,0.5)]'>
              O
            </h1>
            <h1 className='text-8xl text-bg-sun drop-shadow-[0px_0px_8px_rgba(67,105,255,0.5)]'>
              B
            </h1>
            <h1 className='text-8xl drop-shadow-[0px_0px_8px_rgba(255,255,255,0.5)]'>
              E
            </h1>
            <h1 className='text-8xl text-bg-sun drop-shadow-[0px_0px_8px_rgba(67,105,255,0.5)]'>
              R
            </h1>
            <h1 className='text-8xl drop-shadow-[0px_0px_8px_rgba(255,255,255,0.5)]'>
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
