function Login({ onLogin }) {
    const [name, setName] = React.useState('');
    const [regNo, setRegNo] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [degree, setDegree] = React.useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name && regNo && password && degree) {
        onLogin({ name, regNo, degree });
      } else {
        alert("Please fill all fields!");
      }
    };
  
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  
          <label>Registration Number:</label>
          <input type="text" value={regNo} onChange={(e) => setRegNo(e.target.value)} />
  
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  
          <label>Degree:</label>
          <select value={degree} onChange={(e) => setDegree(e.target.value)}>
            <option value="">Select Degree</option>
            <option value="BTech Computer Science">BTech Computer Science</option>
            <option value="BTech Mechanical">BTech Mechanical</option>
            <option value="BCom">BCom</option>
          </select>
  
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  
