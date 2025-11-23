import React from 'react';

const Curriculum = () => {
  const modules = [
    {
      title: "Module 1 — Intro to Postproduction",
      description: "Project setup, file management, and ingestion workflows."
    },
    {
      title: "Module 2 — Editing Foundations",
      description: "Cuts, timing, J/L-cuts, continuity and storytelling basics."
    },
    {
      title: "Module 3 — Sound Design & Mixing",
      description: "Dialogue editing, ADR, foley, ambience & mixes for broadcast."
    },
    {
      title: "Module 4 — Color Correction & Grading",
      description: "Scopes, LUTs, matching, mood & cinematic looks."
    },
    {
      title: "Module 5 — VFX & Motion Graphics",
      description: "Chroma keying, tracking, compositing, and titles."
    },
    {
      title: "Module 6 — Storytelling in the Edit",
      description: "Rewriting in post, editing for genres, emotional pacing."
    },
    {
      title: "Module 7 — Workflow & Collaboration",
      description: "Proxy workflows, cloud collaboration, and archiving."
    },
    {
      title: "Module 8 — Portfolio & Industry Pathways",
      description: "Showreel creation, client work, and finding paid gigs."
    }
  ];

  return (
    <section id="modules" style={{marginTop: '28px'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px'}}>
        <div>
          <h2>Course Curriculum</h2>
          <p className="small">8 studio-grade modules. Each module includes lessons, downloadable assets, and practical assignments.</p>
        </div>
        <div style={{display: 'flex', gap: '12px'}}>
          <a className="ghost" href="#finalproject">Final Project</a>
          <a className="ghost" href="#pricing">Pricing</a>
        </div>
      </div>

      <div className="modules" style={{marginTop: '16px'}}>
        {modules.map((module, index) => (
          <div key={index} className="card">
            <h3>{module.title}</h3>
            <div className="small">{module.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Curriculum;