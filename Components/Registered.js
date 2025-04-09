function Registered({ user, registeredCourses, setRegisteredCourses, courses, setCourses, onNavigate }) {
    const handleDrop = (courseName) => {
      const updatedCourses = { ...courses };
      updatedCourses[courseName]++;
      setCourses(updatedCourses);
  
      const updatedRegistered = registeredCourses.filter(course => course !== courseName);
      setRegisteredCourses(updatedRegistered);
    };
  
    return (
      <div className="page">
        <h2>Welcome, {user.name} | Reg No: {user.regNo}</h2>
        <h3>Total Courses Registered: {registeredCourses.length} / 8</h3>
  
        <h2>Registered Courses</h2>
  
        {registeredCourses.length === 0 ? (
          <p>No courses registered yet.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Drop</th>
              </tr>
            </thead>
            <tbody>
              {registeredCourses.map(course => (
                <tr key={course}>
                  <td>{course}</td>
                  <td>
                    <button className="btn" onClick={() => handleDrop(course)}>Drop</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
  
        <div className="nav-buttons">
          <button className="btn" onClick={() => onNavigate("home")}>🏠 Home</button>
        </div>
      </div>
    );
  }
  