import React from 'react';

const Instructors = () => {
  const instructors = [
    {
      initials: "CO",
      name: "Chukwudi Ononiwu",
      role: "Lead Editor • Cinematographer • Course Founder"
    },
    {
      initials: "KM",
      name: "Kemi Adetola",
      role: "Senior Colorist • Dolby Certified"
    },
    {
      initials: "RA",
      name: "Ramon Akintola",
      role: "Sound Designer • Foley Artist"
    },
    {
      initials: "LS",
      name: "Linda S.",
      role: "VFX Supervisor • Motion Graphics"
    }
  ];

  return (
    <section id="instructors" style={{marginTop: '30px'}}>
      <h2>Meet Your Instructors</h2>
      <p className="small">Industry practitioners with real credits — editors, colorists, sound designers and VFX artists.</p>

      <div className="instructors" style={{marginTop: '12px'}}>
        {instructors.map((instructor, index) => (
          <div key={index} className="inst">
            <div className="avatar">{instructor.initials}</div>
            <div>
              <strong>{instructor.name}</strong>
              <div className="small">{instructor.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;