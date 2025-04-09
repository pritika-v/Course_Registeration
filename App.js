// App.js
const { useState, useEffect, useMemo, useRef } = React;

function App() {
  const [page, setPage] = useState("login"); // "login", "home", "compulsory", "interdisciplinary", "registered", "summary"
  const [user, setUser] = useState(null); // { name, regNo, degree }
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [courses, setCourses] = useState({});
  const [theme, setTheme] = useState("dark");
  const maxCourses = 8;

  const degrees = {
    "BTech Computer Science": ["Python", "Java", "Web Programming", "Machine Learning", "C/C++", "Embedded Systems", "Blockchain"],
    "BTech Mechanical": ["Chemistry", "Physics", "Thermodynamics", "Fluid Mechanics", "Solid Mechanics", "Micro-Processor and Micro Controllers"],
    "BCom": ["Financial Accounting", "Business Law", "Marketing Management", "Business Economics", "Cost Accounting"],
  };

  const allCourses = useMemo(() => [...new Set(Object.values(degrees).flat())], []);

  // Initialize seat availability (30 per course)
  useEffect(() => {
    const initialSeats = {};
    allCourses.forEach(course => {
      initialSeats[course] = 30;
    });
    setCourses(initialSeats);
  }, [allCourses]);

  const handleLogin = (userData) => {
    setUser(userData);
    setPage("home");
  };

  const props = {
    user,
    onNavigate: setPage,
    courses,
    setCourses,
    registeredCourses,
    setRegisteredCourses,
    maxCourses
  };

  switch (page) {
    case "login":
      return <Login onLogin={handleLogin} />;
    case "home":
      return <Home user={user} onNavigate={setPage} selectedCourses={registeredCourses} />;
    case "compulsory":
      return <Compulsory {...props} />;
    case "interdisciplinary":
      return <Interdisciplinary 
        {...props} 
        allCourses={allCourses} 
        compulsoryCourses={user ? degrees[user.degree] : []}
      />;
    case "registered":
      return <Registered {...props} />;
    case "summary": 
      return (
        <Submitted
          registeredCourses={registeredCourses.map(course => ({
            name: course,
            type: user && degrees[user.degree].includes(course) ? "Compulsory" : "Interdisciplinary"
          }))}
          onGoHome={() => setPage("home")}
        />
      );
    default:
      return <h1>404 Page Not Found</h1>;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);