import React from 'react'


export const Dublicate = x => {
  const [firstDublicate] = React.useState([1,2,3])
  const [secondDublicate] = React.useState([1,2,3,4])
   
 
  return (
    console.log([...firstDublicate, ...firstDublicate]) +
    console.log([...secondDublicate, ...secondDublicate])
  )
  
}