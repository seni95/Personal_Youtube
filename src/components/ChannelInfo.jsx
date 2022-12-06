import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {useYoutubeApi} from '../Context/YoutubeApiContext';

export default function ChannelInfo({id,name}) {
  
  const {youtube} = useYoutubeApi();
  const {error,isLoading,data:url} = useQuery(['channel',id],()=>youtube.channelImageURL(id)
  ,{staleTime:1000*60*5});

  return (
    <div className='flex my-4 items-center mb-8'>
      {id}
    {url && <img className='w-10 h-10 rounded-full' src={url} alt={name}></img>}
    <p className='text-lg font-midium ml-2'>{name}</p>
    </div>
    )
}
