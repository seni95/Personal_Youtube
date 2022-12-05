import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {useYoutubeApi} from '../Context/YoutubeApiContext';

export default function ChannelInfo({id,name}) {
  
  const {youtube} = useYoutubeApi();
  const {error,isLoading,data:url} = useQuery(['channel',id],()=>youtube.channelImageURL(id));

  return (
    <div>
      {id}
    {url && <img src={url} alt={name}></img>}
    <p>{name}</p>
    </div>
    )
}
