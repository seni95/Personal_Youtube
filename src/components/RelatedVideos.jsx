import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {useYoutubeApi} from '../Context/YoutubeApiContext';
import VideoCard from './VideoCard';
export default function RelatedVideos({id}) {
  const {youtube} = useYoutubeApi();
  const {error,isLoading,data:videos} = useQuery(['related',id]
  ,()=>youtube.relatedVideos(id),{staleTime:1000*60*5});


  return (
    <div>
      {isLoading && <p>loading</p>}
      {error && <p>something is wrong</p>}
      {videos 
      && 
      <ul>
      {videos.map(video=><VideoCard key={video.id} video={video}
      type='list'></VideoCard>)}
      </ul>}
    </div>
  )
 
}
