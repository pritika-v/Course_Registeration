function Interdisciplinary({ user, onNavigate, courses, setCourses, registeredCourses, setRegisteredCourses, allCourses, compulsoryCourses }) {
  const interdisciplinaryCourses = allCourses.filter(course => !compulsoryCourses.includes(course));

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

      <h2>Interdisciplinary Courses</h2>
      <ul className="course-list">
        {interdisciplinaryCourses.map((course) => (
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