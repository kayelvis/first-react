import React from 'react'

function MemberCard({teamMember}) {
  const {name, role, team, available} =teamMember;
  return (
    <article className='member-card'>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{team}</p>
      {available && <span className='tag available'>Available</span>}

    </article>
  )
}

export default MemberCard