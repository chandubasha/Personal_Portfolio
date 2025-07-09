
import React, { useState } from 'react';

const projectsData  = [
        {
          title: "Traffic Sign Recognition System using Deep Learning",
          category: "Machine Learning",
          technologies: "Python, TensorFlow, OpenCV, GTSRB Dataset",
          description: [
            "Built a CNN model to classify 43 types of traffic signs using the GTSRB dataset.",
            "Achieved high accuracy through image pre-processing, augmentation, and tuning.",
            "Enabled real-time recognition for use in ADAS and autonomous driving systems.",
          ],
        },
        {
          title: "Order Tracking System Project",
          category: "Web Development",
          technologies: "",
          description: [
            "Developed a comprehensive order tracking system to streamline order management and improve customer satisfaction by providing real-time updates on order status.",
          ],
        },
        {
          title: "Machine Learning Approach for Employee Performance Prediction",
          category: "Machine Learning",
          technologies: "",
          description: [
            "Developed and implemented a machine learning model to predict employee performance, leveraging features such as demographics, work experience, and feedback scores.",
          ],
        },
        {
          title: "Portfolio Website",
          category: "Web Development",
          technologies: "",
          description: [
            "Developed a responsive portfolio website using HTML, CSS, and ReactJS to showcase personal projects and skills.",
            "Implemented interactive elements using JavaScript to enhance user engagement.",
          ],
        },
      ];
      

      const categories = ['All', 'Machine Learning', 'Web Development'];
      
      const Projects = () => {
        const [selectedCategory, setSelectedCategory] = useState('All');
      
        const filteredProjects = selectedCategory === 'All' 
          ? projectsData 
          : projectsData.filter(project => project.category === selectedCategory);
      
        return (
          <section className="projects-section">
            <h2>Projects</h2>
      
            <div className="filter-buttons">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={selectedCategory === cat ? 'active' : ''}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
      
            <div className="project-list">
              {filteredProjects.map(({ title, description, technologies }, index) => (
                <div className="project-card" key={index}>
                  <h3>{title}</h3>
                  {technologies && (
                    <p className="project-tech"><strong>Technologies:</strong> {technologies}</p>
                  )}
                  <ul className="project-description">
                    {description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        );
      };

export default Projects;
