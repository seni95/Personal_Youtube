import React from 'react';
import { useParams } from 'react-router-dom';

export default function Vidoes() {
  const {keyword} = useParams();
  
  return (
    <div>Vidoes {keyword ? keyword : "Videos hot"}</div>
  )
}
