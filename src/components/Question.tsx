import React from 'react';

export default function Question({ question }: { question: string }) {
  return <div className='text-2xl text-center'>{question}</div>;
}
