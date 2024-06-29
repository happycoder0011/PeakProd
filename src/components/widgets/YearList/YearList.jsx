import React from 'react'
import data from '../../../data.json'
import './style.css'

const YearList = () => {
  const { data: {year:{Ygoals}}={}} = data;
  console.log(Ygoals)
  return (
    <div className='year-container'>
      {Ygoals.map(goal => {
        return (
      <button className='rustic-button' key={goal.id}>
       <span>#</span>
       <span>{goal.name}</span>
      </button>)}
    )}</div>
  )
}

export default YearList