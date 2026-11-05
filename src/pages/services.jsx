import React from 'react'
import CourseCard from '../Components/CourseCard'
import { courses } from '../../Courses'


function ServicesPage() {
  return (
    <main className='container'>
      <h1>Course Catalogue</h1>
      <p className='count'> {courses.length} Courses available</p>

        {
        courses.length === 0? (
          <p className='empty'>No course yet. check back soon</p>
        ) : (
        <div className="grid">
           {courses.map((individualCourse) => (
            <CourseCard key={individualCourse.id} course=
            {individualCourse} />
          ))}
          </div>
         )
        }
         
    </main>
  )
}

export default ServicesPage