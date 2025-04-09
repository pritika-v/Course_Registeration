function Submitted({ registeredCourses, onGoHome }) {
    return (
      <div className="submitted-page">
        <h2>🎉 Thank You for Registering!</h2>
        <p>You have successfully registered for the following courses:</p>
  
        <table className="submitted-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {registeredCourses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <button className="home-button" onClick={onGoHome}>🏠 Go Back to Home</button>
      </div>
    );
  }
  