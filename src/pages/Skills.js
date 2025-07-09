import React from 'react';

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python (OOPs, Loops, Problem Solving)', 'SQL (Queries, Joins, Optimization)','Libraries (Pandas, Numpy, Matplotlib)'],
  },
  {
    category: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'VS Code', 'Google Colab', 'Jupyter Notebook'],
  },
  {
    category: 'Cloud & Software',
    items: ['AWS (Basics)', 'MS Word', 'Microsoft Excel'],
  },
];

const Skills = () => (
  <section className="skills-section">
    <h2>Skills</h2>
    <div className="skills-grid">
      {skills.map((group, index) => (
        <div className="skill-card" key={index}>
          <h3>{group.category}</h3>
          <ul>
            {group.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
