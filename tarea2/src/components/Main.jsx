import React, {useEffect, useState} from 'react'
import axios from  'axios'
import { Container } from 'react-bootstrap'
import MiCard from './Card'

const Main = () => {
  const[personajes , SetPersonajes ] = useState([])

  useEffect(() => {
    getData()
  },[])
  
  const getData = async () =>{
    const urlApi = process.env.REACT_APP_URL_API;
    try {
      const {data} = await axios.get(urlApi)
      const {info , results} = data
      console.log(info)
      SetPersonajes(results);
    } catch (error) {
      console.errer(error)
    }
  } 

  return (
    <Container className='row d-flex mx-auto justify-content-evenly'>
      {personajes.map((per)=><MiCard name={per.name} url={per.image} />)
        
      }
    </Container>
  )
}

export default Main