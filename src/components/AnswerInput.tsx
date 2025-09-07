import { useState } from 'react';
import React from 'react';
import { createAnswer } from '../lib/answers-api';
import { LuSendHorizontal } from 'react-icons/lu';

export default function AnswerInput() {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createAnswer(answer);
  };

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-10'>
      <input
        className='bg-bg-planets border border-white/20 text-sm drop-shadow-[0px_0px_8px_rgba(255,255,255,.25)] w-full p-4 text-white rounded-lg outline-none focus:outline-none'
        type='text'
        value={answer}
        placeholder='Escribe tu respuesta...'
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button
        type='submit'
        className='bg-white flex items-center justify-center gap-2 text-black rounded-lg p-4'
      >
        Enviar
        <LuSendHorizontal size={24} />
      </button>
    </form>
  );
}
