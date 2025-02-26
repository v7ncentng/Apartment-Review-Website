import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="page-container">
      <h1>Find Your Match</h1>
      <h3>Personalized Results</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum. </p>
    </div>
  );
}

export default Login;




/*

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      setMessage("");
      setEmail("");
      setPassword("");

      const { data, error } = await supabase.auth.signInWithPassword({ email: email, password: password });
      if (error) { setMessage(error.message); return; }
      if (data) { navigate(`/profile/${data.session.user.id}`); return; }         

    };

  return (
      <div className="Login-page">
          <h1>Login</h1>
          <form className="auth" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
            <input 
              type="current-password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
            <button type="submit"> Login </button>
            {message && <span>{message}</span>}
          </form>

          <p className="">
            Don't have an account?{" "}
            <Link to="/signup">
              Sign up
            </Link>
          </p>
      </div>
  );
};*/

