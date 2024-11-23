import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveDrawer from './components/Layout.tsx';
import Dashboard from './components/Dashboard.tsx';
import ClassEnrollment from './components/ClassroomEnlistment.tsx';
import CourseInformation from './components/CourseInformation.tsx';
import AssessmentEvaluation from './components/Assessment.tsx';
import ClassAttendance from './components/Attendance.tsx';
import GradingSystem from './components/GradingSystem.tsx';
import Profile from './components/Profile.tsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Layout Route */}
        <Route path="/" element={<ResponsiveDrawer />}>
          {/* Nested Routes rendered inside the Layout */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="class-enrollment" element={<ClassEnrollment />} />
          <Route path="course-info" element={<CourseInformation />} />
          <Route path="assessment" element={<AssessmentEvaluation />} />
          <Route path="attendance" element={<ClassAttendance />} />
          <Route path="grading-system" element={<GradingSystem />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
