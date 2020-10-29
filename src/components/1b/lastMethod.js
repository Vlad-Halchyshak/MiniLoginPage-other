import React from 'react'


export const Last = x => {
  const first = [1, 2, 3]
  const second = [1, 2, 3, 4]
  const last = []

  return console.log(first.splice(2, 2)) + console.log(second.splice(3, 3)) +
    console.log(last.length === 0 ? undefined : 'woow you have just added smth new' )
}