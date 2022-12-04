import React, { useEffect, useState } from 'react';
import {BsYoutube,BsSearch} from 'react-icons/bs';
import { useNavigate,Link, useParams } from 'react-router-dom';

export default function SearchHeader() {
    const {keyword} = useParams();
 const [text,setText] = useState('');
    const navigate = useNavigate();
 const handleSubmit = e=>{
    e.preventDefault();
    navigate(`/videos/${text}`);
 }
 useEffect(()=>setText(keyword),[keyword]);
 return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
        <Link className = 'flex items-center' to="/"><BsYoutube className='text-4xl text-brand'></BsYoutube>
        <h1 className='text-2xl font-bold ml-2 text-3xl'>Youtube</h1></Link>
        <form className='w-full flex justify-center' onSubmit={handleSubmit}>
         <input className='w-7/12 p-2 outline-none bg-black text-gray-50'type="text" placeholder='search...' 
        value={text||''}
        onChange={e=>setText(e.target.value)}/>
        <button className='bg-zinc-600 px-4'><BsSearch></BsSearch></button></form>
    </header>
  )
}
