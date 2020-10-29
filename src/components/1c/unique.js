import React from 'react'


export const Unique = x => {
const firstUnique = [1,2,3,3,4]
const secondUnique = [1,2,3,4,1,3]
  const thirdUnique = []
  
  return (
    console.log(firstUnique.filter((item, index) => firstUnique.indexOf(item) === index))
    +
    console.log(secondUnique.filter((item, index) => secondUnique.indexOf(item) === index))
    +
    console.log(thirdUnique)
  )
}