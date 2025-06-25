import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const circle = document.getElementById('custom-circle');
    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;
    const speed = 0.2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const smoothMove = () => {
      circleX += (mouseX - circleX) * speed;
      circleY += (mouseY - circleY) * speed;

      if (circle) {
        circle.style.left = `${circleX}px`;
        circle.style.top = `${circleY}px`;
      }

      requestAnimationFrame(smoothMove);
    };

    smoothMove();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const [email, setEmail] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('http://localhost:5000/api/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
  
      const data = await res.json();
  
      if (res.ok) {
        localStorage.setItem('isAdminAuthenticated', 'true');
        navigate('/admin-panel');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      alert('Something went wrong');
    }
  };

  return (
    <>
      <a href="#admin" id="custom-circle" className="custom-circle other-style z-[5000]">
        <span>Admin</span>
      </a>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f8f8f8' }}>
        <div style={{ width: '100%', maxWidth: '400px', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px', background: 'white', boxShadow: '0 0 20px rgba(0,0,0,0.05)' }}>
          <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>🔐 Admin Login</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="email"
            placeholder="Enter Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '10px', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />

          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '10px', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
            <button
              type="submit"
              style={{ padding: '10px', fontSize: '1rem', backgroundColor: '#222', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
