import React, {useState, useEffect} from 'react'
import { MdDownloadForOffline } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import {V4 as uuidv4} from 'uuid'
import {client, urlFor } from '../client'
import MasonryLayout from './MasonryLayout'
import { pinDetailMorePinQuery, pinDetailQuery } from '../utils/data'
import Spinner from './Spinner'

const PinDetail = ({user}) => {

  const [pins, setPins] = useState(null)
  const [pinDetail, setPinDetail] = useState(second)
  const [comment, setComment] = useState('')
  const [addingComment, setAddingComment] = useState(false)
  const {pinId} = useParams();


  if(!PinDetail) return <Spinner message="Loading pin details"/>

  const fetchPinDetails = () =>{
    const query = pinDetailQuery(pinId);
    if(query){
      client.fetch(query)
      .then((data) =>{
        setPinDetail(data[0]);
        if(data[0]){
          query = pinDetailMorePinQuery(data[0]);
          client.fetch(query)
          .then((res)=> setPins(res ))
        }
      })
    }
  }

  return (
    <div>PinDetail</div>
  )
}

export default PinDetail