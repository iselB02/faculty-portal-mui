import React from "react";
import "./Profile.css";

// Define a type for the faculty details
interface FacultyDetails {
  name: string;
  employeeId: string;
  department: string;
  position: string;
  coursesTaught: string[];
  college: string;
}

// Mock data for the faculty profile
const facultyData: FacultyDetails = {
  name: "Coco Martin",
  employeeId: "2021 - 12342",
  department: "Computer Science",
  position: "Professor I",
  college: "CISTM",

  coursesTaught: [
    "CS Elective 3",
    "Automata & Programming Languages",
    "Networks & Communication",
  ],
};

const Profile: React.FC = () => {
  const { name, employeeId, department, position, coursesTaught, college } = facultyData;

  return (
    <div className="dashboard-container">
      <main className="main-content">
        <div className="contents">
          <div className="cover-photo"></div>
          <div className="faculty-card">
            <div className="faculty-photo">
              <img src="images/profile-pic.jpg" alt={`${name}`} />
            </div>
            <div className="faculty-details">
              <h2 id="name">Mr. {name}</h2>
              <div className="other-details">
                  <p><span id="position">{position}</span> | <span id="status">Part-Time</span></p>
                  <p><span id="department">{department}</span> | <span id="college">{college}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-section">
          <h3 id="about-title">About</h3>
          <div className="about-info">
            <p>
              <strong>Faculty Name:</strong> <p>{name}</p> 
            </p>
            <p>
              <strong>Employee ID:</strong> <p>{employeeId}</p>
            </p>
            <p>
              <strong>Department:</strong> <p>{department}</p>
            </p>
            <p>
              <strong>Position/Title:</strong> <p>{position}</p>
            </p>
            <p className="courses">
              <strong>Courses Taught:</strong>
              <ul>
                {coursesTaught.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
