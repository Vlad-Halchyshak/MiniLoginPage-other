import React from 'react'


export const ParseNPMVersion = () => {
  const firstParse = 'react@16.0.0'
  const secondParse = '@webscopeio/react-textarea-autocomplete@4.6.1'


 

 return console.log('name:',firstParse.substr(0,5)  + ', version:', firstParse.substr(6,10))+ 
console.log('name:',secondParse.substr(0,39)  + ', version:', secondParse.substr(40, 41))  
 
}