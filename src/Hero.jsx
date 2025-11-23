import React from 'react';

const Hero = () => {
  return (
    <section className="hero" role="banner" aria-label="FixIt Post Academy hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="eyebrow">NEW SHORT-INTENSIVE | ENROLLING NOW</div>
          <h1>FixIt Post Academy — From Rough Cut to Release</h1>
          <p>Hands-on cinematic postproduction training covering picture editing, sound design, color grading, VFX, and professional delivery. Build a showreel and master industry workflows used in studios worldwide.</p>

          <div className="cta-row">
            <a className="btn" href="#enroll">Start Free Module</a>
            <a className="ghost" href="#curriculum" style={{marginLeft: '8px'}}>See Curriculum</a>
          </div>

          <div className="stats">
            <div className="stat">8 Modules</div>
            <div className="stat">Portfolio Project</div>
            <div className="stat">Live Feedback</div>
          </div>
        </div>

        <div className="hero-right" style={{width: '380px'}}>
          <div className="card" style={{padding: '16px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <div style={{
                width: '72px', 
                height: '72px', 
                background: 'linear-gradient(180deg,#111,#0b0b0b)', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontWeight: '800'
              }}>🎬</div>
              <div>
                <div style={{fontWeight: '800'}}>FixIt Post Academy</div>
                <div className="small">Next cohort: <strong style={{color: 'var(--accent)'}}>Dec 1, 2025</strong></div>
              </div>
            </div>

            <hr style={{border: 'none', height: '1px', background: 'rgba(255,255,255,0.03)', margin: '12px 0'}} />
            <div className="small">Free preview: Module 1 — Intro to Postproduction</div>
            <div style={{marginTop: '12px', display: 'flex', gap: '8px'}}>
              <a className="btn" href="#enroll" style={{flex: '1'}}>Reserve Spot</a>
              <a className="ghost" href="#faq" style={{alignSelf: 'center'}}>How it works</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;