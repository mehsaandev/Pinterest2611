import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {client} from '../client'
import { feedQuery, searchQuery } from '../utils/data'

import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'
const Feed = () => {
  
  const [loading, setloading] = useState(false)
  const [pins, setPins] = useState(null)
  const {categoryId} = useParams();

  useEffect(()=>{
    setloading(true);
    if(categoryId) {

      const query = searchQuery(categoryId);
      console.log(query);
      client.fetch(query).then((data) => {
       // console.log(data)
        setPins(data)
        setloading(false);
        });
    }
    else{
       client.fetch(feedQuery)
       .then((data) =>{
         setPins(data)
         setloading(false);
       })
    }
  },[categoryId])

  if(loading) return <Spinner message = "we are adding new ideas to your feed!"/>

  if(!pins?.length) return <h2 className='text-center'>No pins available</h2>

  return (
    <div>
      {pins && <MasonryLayout pins = {pins}/>}
    </div>
  )
}

export default Feed