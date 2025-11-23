import React, { useState } from 'react';

const Enrollment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'self'
  });
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Thanks — check your inbox for the enrollment packet (this is a demo).');
    setFormData({ name: '', email: '', interest: 'self' });
    setTimeout(() => setMessage(''), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const downloadSyllabus = () => {
    const content = 'FixIt Post Academy — Syllabus\n\nModules:\n1. Intro to Postproduction\n2. Editing Foundations\n3. Sound Design\n4. Color Grading\n5. VFX\n6. Storytelling in Edit\n7. Workflow & Collaboration\n8. Portfolio';
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'FixItPost_Syllabus.txt';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section id="enroll" style={{marginTop: '36px'}}>
      <div style={{display: 'flex', gap: '18px', flexWrap: 'wrap', alignItems: 'stretch'}}>
        <div style={{flex: '1', minWidth: '320px'}}>
          <h2>Reserve Your Spot</h2>
          <p className="small">Enter your details and we'll send the enrollment packet and next steps.</p>
          <form onSubmit={handleSubmit} style={{marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '520px'}}>
            <input 
              name="name" 
              placeholder="Full name" 
              required 
              value={formData.name}
              onChange={handleChange}
              style={{padding: '12px', borderRadius: '10px', border: 'none', background: 'rgba(255,255,255,0.02)', color: 'white'}} 
            />
            <input 
              name="email" 
              type="email" 
              placeholder="Email address" 
              required 
              value={formData.email}
              onChange={handleChange}
              style={{padding: '12px', borderRadius: '10px', border: 'none', background: 'rgba(255,255,255,0.02)', color: 'white'}} 
            />
            <select 
              name="interest" 
              value={formData.interest}
              onChange={handleChange}
              style={{padding: '12px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', color: 'white'}}
            >
              <option value="self">Self-Paced</option>
              <option value="cohort">Live Cohort</option>
              <option value="pro">Pro Package</option>
            </select>
            <div style={{display: 'flex', gap: '10px'}}>
              <button className="btn" type="submit">Get Enrollment Info</button>
              <button type="button" onClick={downloadSyllabus} className="ghost">Download Syllabus</button>
            </div>
            {message && (
              <div className="small" style={{marginTop: '8px', color: 'var(--accent)'}}>
                {message}
              </div>
            )}
          </form>
        </div>

        <div style={{flex: '1', minWidth: '320px'}}>
          <h3 style={{marginTop: '2px'}}>Need a custom training?</h3>
          <p className="small">We offer group training for churches, production houses, and schools. Email <a href="mailto:hello@fixitpostacademy.com">hello@fixitpostacademy.com</a>.</p>
          <div style={{marginTop: '12px'}}>
            <div className="card">
              <h3>Free Preview</h3>
              <div className="small">Access Module 1 and our toolkit (project files & LUTs)</div>
              <div style={{marginTop: '10px'}}><a className="btn" href="#modules">Watch Free Module</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enrollment;