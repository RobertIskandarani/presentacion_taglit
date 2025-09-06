import { useState } from 'react';
import React from 'react';
import { createAnswer } from '../lib/answers-api';

export default function AnswerInput() {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createAnswer(answer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='bg-white text-black rounded-lg p-2'
        type='text'
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button type='submit'>Send</button>
    </form>
  );
}
