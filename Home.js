function Home({ user, onNavigate, selectedCourses }) {
  const [hoverMessage, setHoverMessage] = React.useState('');

  const handleSubmit = () => {
    if (selectedCourses.length === 8) {
      const confirm = window.confirm("Are you sure? You cannot change it again!");
      if (confirm) {
        onNavigate("summary");
      }
    }
  };

  const handleMouseEnter = () => {
    if (selectedCourses.length < 8) {
      setHoverMessage("REGISTER ALL YOUR COURSES!!");
    }
  };

  const handleMouseLeave = () => {
    setHoverMessage('');
  };

  return (
    <div className="container">
      <h2>Welcome, {user.name} ({user.regNo})</h2>
      <h3>Page Title: <span className="highlight">Course Selection</span></h3>
      <p>Total Courses you can register: <strong>8</strong></p>
      <p>Currently Registered: {selectedCourses.length}</p>

      <div className="button-group">
        <button onClick={() => onNavigate("compulsory")}>Compulsory Courses</button>
        <button onClick={() => onNavigate("interdisciplinary")}>Interdisciplinary Courses</button>
        <button onClick={() => onNavigate("registered")}>Registered Courses</button>
      </div>

      <div className="submit-container">
        <button
          className="submit-button"
          onClick={handleSubmit}
          disabled={selectedCourses.length !== 8}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Submit
        </button>
        {hoverMessage && <p className="hover-message">{hoverMessage}</p>}
      </div>
    </div>
  );
}