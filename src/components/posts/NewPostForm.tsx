"use client"

import React, { useRef, useState } from 'react';
import { PostFormType } from './types';
import Input from '../forms/Input';
import Button from '../forms/Button';


const NewPostForm: React.FC<{ onSubmit: (params: PostFormType) => Promise<void> }> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState('');

  const titleRef = useRef<HTMLInputElement | null>(null);

  return <form className='flex gap-2 mt-2' onSubmit={(e) => {
    e.preventDefault()
    onSubmit({ title, content, notes })
    setTitle("");
    setContent("");
    setNotes("");
    if (titleRef.current) {
      titleRef.current.focus()
    }
  }}>
    <Input ref={titleRef} required aria-label="Title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
    <Input value={content} required aria-label="Message" onChange={(e) => setContent(e.target.value)} placeholder='Content' />
    <Input value={notes} required aria-label="Message" onChange={(e) => setNotes(e.target.value)} placeholder='Notes' />

    <div className="ml-auto"><Button type='submit'>Neu</Button></div>
  </form>
}

export default NewPostForm;