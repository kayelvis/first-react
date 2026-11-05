import React from 'react'
import MemberCard from '../Components/MemberCard'
import {team} from '../../team'

function Member() {
    const availableCount = team.filter((member) => member.available).length;
  return (
    <div className='grid'>
        {team.map((individualteammember) => (
            <MemberCard key ={individualteammember.id} teamMember={individualteammember} />
        )
    )}
            </div>
  )
}

export default Member