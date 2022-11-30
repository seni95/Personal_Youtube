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
    <header>
        <Link to="/"><BsYoutube></BsYoutube>
        <h1>Youtube</h1></Link>
        <form onSubmit={handleSubmit}><input type="text" placeholder='search...' 
        value={text}
        onChange={e=>setText(e.target.value)}/>
        <button><BsSearch></BsSearch></button></form>
    </header>
  )
}
