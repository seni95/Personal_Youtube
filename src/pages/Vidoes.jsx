import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../Context/YoutubeApiContext';


export default function Vidoes() {
  const {keyword} = useParams();
  const {youtube} = useYoutubeApi();
  const {isloading,error,data:videos} = useQuery(
    ['videos',keyword],async()=>youtube.search(keyword)); 
  return (
    <div>
      {isloading && <p>loading</p>}
      {error && <p>something is wrong</p>}
      {videos 
      && 
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
      {videos.map(video=><VideoCard key={video.id} video={video}></VideoCard>)}
      </ul>}
    </div>
  )
}
