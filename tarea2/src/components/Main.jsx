// import React,{useEffect, useState} from 'react'
import React, { useState } from 'react'
import axios from  'axios'
const Main = () => {
  const[personaje , SetPersonaje ] = useState([])
  const getData = async() =>{
    const urlApi = process.env.REACT_APP_URL_API;
    await axios.get(urlApi)
    .then((response)=>{
      const {data} = response;
    });
    

    return(
      <h1>hola</h1>
    )
  }


  return (
    <div>Main</div>
  )
}

export default Main