import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './CourseInformation.css'

const today: Date = new Date();
const day: number = today.getDate();
const month: string = today.toLocaleString('default', { month: 'long' });
const year: number = today.getFullYear();
const time: string = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const courses = [
  {
    image: '/images/image1.png',
    courseCode: 'CSC 0414-4 - CS ELECTIVE',
    courseTitle: 'Web Development',
  },
  {
    image: '/images/image2.png',
    courseCode: 'CSC 0322-3 - CS CORE',
    courseTitle: 'Software Engineering',
  },
  {
    image: '/images/image1.png',
    courseCode: 'CSC 0211-2 - CS CORE',
    courseTitle: 'Database Management',
  },
  {
    image: '/images/image2.png',
    courseCode: 'CSC 0110-1 - CS CORE',
    courseTitle: 'Introduction to Programming',
  },
  {
    image: '/images/image1.png',
    courseCode: 'CSC 0414-4 - CS ELECTIVE',
    courseTitle: 'Web Development',
  },
  {
    image: '/images/image2.png',
    courseCode: 'CSC 0322-3 - CS CORE',
    courseTitle: 'Software Engineering',
  },
  {
    image: '/images/image1.png',
    courseCode: 'CSC 0211-2 - CS CORE',
    courseTitle: 'Database Management',
  },
  {
    image: '/images/image2.png',
    courseCode: 'CSC 0110-1 - CS CORE',
    courseTitle: 'Introduction to Programming',
  },
];

function CourseInformation() {
  return (
    <div className='classInfo-container'>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#D9D9D9' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: 'black' }} id='title-classInfo'
          >
            Class Enrollment List
          </Typography>
          <Typography sx={{ color: 'black' }}>
            {day}, {month} {year} - {time}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="info-container">
      {courses.map((course, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={course.image} alt={course.courseTitle} />
          </div>
          <div className="card-info">
            <h2 className="course-code">{course.courseCode}</h2>
            <h2 className="course-title">{course.courseTitle}</h2>
          </div>
          <button>Go</button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default CourseInformation
