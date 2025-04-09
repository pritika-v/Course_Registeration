function Compulsory({ user, onNavigate, courses, setCourses, registeredCourses, setRegisteredCourses }) {
    const courseMap = {
      "BTech Computer Science": ["Python", "Java", "Web Programming", "Machine Learning", "C/C++", "Embedded Systems", "Blockchain"],
      "BTech Mechanical": ["Chemistry", "Physics", "Thermodynamics", "Fluid Mechanics", "Solid Mechanics", "Micro-Processor and Micro Controllers"],
      "BCom": ["Financial Accounting", "Business Law", "Marketing Management", "Business Economics", "Cost Accounting"]
    };
  
    const availableCourses = courseMap[user.degree] || [];
  
    const handleRegister = (courseName) => {
      if (registeredCourses.length >= 8) return;
  
      const updatedCourses = { ...courses };
      if (updatedCourses[courseName] > 0 && !registeredCourses.includes(courseName)) {
        updatedCourses[courseName]--;
        setCourses(updatedCourses);
        setRegisteredCourses([...registeredCourses, courseName]);
      }
    };
  
    const isDisabled = (courseName) =>
      registeredCourses.includes(courseName) || registeredCourses.length >= 8 || courses[courseName] === 0;
  
    return (
      <div className="page">
        <h2>Welcome, {user.name} | Reg No: {user.regNo}</h2>
        <h3>Total Courses Registered: {registeredCourses.length} / 8</h3>
  
        <h2>Compulsory Courses for {user.degree}</h2>
        <ul>
          {availableCourses.map((course) => (
            <li key={course}>
              {course} - Seats Left: {courses[course]}
              <button
                className="btn"
                onClick={() => handleRegister(course)}
                disabled={isDisabled(course)}
              >
                Register
              </button>
            </li>
          ))}
        </ul>
  
        <div className="nav-buttons">
          <button className="btn" onClick={() => onNavigate("home")}>🏠 Home</button>
          <button className="btn" onClick={() => onNavigate("home")}>⬅️ Back</button>
        </div>
      </div>
    );
}
  