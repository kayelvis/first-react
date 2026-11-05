import React from 'react'


function CourseCard({course}) {
    const {title,level,weeks,price,isNew,seatsLeft} = course;
    const almostFull = seatsLeft < 5;
  return (
    <div className={almostFull ? 'course-card almost-full': 'course-card'}>
        {isNew && <span className='badge'>New Course</span>}
        <h2 className='course-title'> {title}</h2>
        <p className='meta'>{level} - {weeks} weeks</p>
        <p className='price'>{price === 0 ? "Free" :`₦${price}`}</p>
        {almostFull && <p className='warning'>Only {seatsLeft} seats left</p>}
    </div>
  )
}

export default CourseCard