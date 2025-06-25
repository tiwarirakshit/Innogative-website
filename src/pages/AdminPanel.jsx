import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [form, setForm] = useState({
    id: '', title: '', type: '', description: '', imageUrl: '', client: '', date: '', videoUrl: '', images: ''
  });
  const [projects, setProjects] = useState([]);
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    const TIMEOUT = 60 * 60 * 1000; // 1 hour in milliseconds
    let logoutTimer;
  
    const resetTimer = () => {
      clearTimeout(logoutTimer);
      logoutTimer = setTimeout(() => {
        alert('You have been logged out due to inactivity.');
        localStorage.removeItem('isAdminAuthenticated');
        window.location.href = '/admin';
      }, TIMEOUT);
    };
  
    const events = ['mousemove', 'mousedown', 'keypress', 'scroll', 'touchstart'];
  
    events.forEach(event => {
      window.addEventListener(event, resetTimer);
    });
  
    resetTimer(); // initialize on load
  
    return () => {
      clearTimeout(logoutTimer);
      events.forEach(event => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, []);  

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

  const fetchProjects = async () => {
    const res = await fetch('http://localhost:5000/api/projects');
    const data = await res.json();
    setProjects(data.projects);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      ...form,
      type: form.type.split(',').map((t) => t.trim()),
      images: form.images.split(',').map((img) => img.trim())
    };

    const url = editId ? `http://localhost:5000/api/projects/${editId}` : 'http://localhost:5000/api/projects';
    const method = editId ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const result = await res.json();
    alert(result.message || (editId ? 'Project updated!' : 'Project added!'));
    fetchProjects();
    setForm({ id: '', title: '', type: '', description: '', imageUrl: '', client: '', date: '', videoUrl: '', images: '' });
    setEditId(null);
  };

  const handleEdit = (project) => {
    setEditId(project.id);
    setForm({
      ...project,
      type: project.type.join(', '),
      images: project.images.join(', ')
    });
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    const res = await fetch(`http://localhost:5000/api/projects/${id}`, { method: 'DELETE' });
    const result = await res.json();
    alert(result.message || 'Project deleted!');
    fetchProjects();
  };

  return (
    <>
      {/* Custom cursor */}
      <a href="#admin" id="custom-circle" className="custom-circle other-style z-[5000]">
        <span>Admin</span>
      </a>

      <div style={{ padding: '6rem', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
      <h1 style={{ fontSize: '2rem', color: 'white' }}>🛠 Admin Panel</h1>
        <button
          onClick={() => {
            localStorage.removeItem('isAdminAuthenticated');
            window.location.href = '/admin';
          }}
          style={{
            backgroundColor: '#dc2626',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          🔓 Logout
        </button>
      </div>

        {/* Add / Edit Project */}
        <section style={{ background: '#f9f9f9', padding: '2rem', borderRadius: '10px', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{editId ? '✏️ Edit Project' : '➕ Add New Project'}</h2>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <input name="id" placeholder="Project ID" value={form.id} onChange={handleChange} required disabled={!!editId} />
            <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
            <input name="type" placeholder="Type (comma separated)" value={form.type} onChange={handleChange} required />
            <input name="client" placeholder="Client" value={form.client} onChange={handleChange} />
            <input name="imageUrl" placeholder="Main Image URL" value={form.imageUrl} onChange={handleChange} />
            <input name="images" placeholder="Other Images (comma separated)" value={form.images} onChange={handleChange} />
            <input name="videoUrl" placeholder="Video URL" value={form.videoUrl} onChange={handleChange} />
            <input name="date" placeholder="Date" value={form.date} onChange={handleChange} />
            <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required style={{ gridColumn: 'span 2', minHeight: '80px' }} />
            <button type="submit" style={{ gridColumn: 'span 2', background: '#111', color: '#fff', padding: '10px', borderRadius: '6px', cursor: 'pointer' }}>
              {editId ? '💾 Update Project' : 'Add Project'}
            </button>
          </form>
        </section>

        {/* All Projects */}
        <section>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'white' }}>All Projects</h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {projects.map((project) => (
              <div key={project.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>{project.title}</strong> <br />
                  <span style={{ fontSize: '0.9rem', color: '#555' }}>ID: {project.id} — {project.type.join(', ')}</span>
                </div>
                <div>
                  <button onClick={() => handleEdit(project)} style={{ marginRight: '10px', background: '#2563eb', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
                  <button onClick={() => handleDelete(project.id)} style={{ background: '#dc2626', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AdminPanel;
