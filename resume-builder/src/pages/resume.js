
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Experience from '../components/Experience';
import Header from '../components/Header';
import PersonalDetail from '../components/PersonalDetail';
import Education from '../components/Education';

function Resume() {
  const [experiences, setExperiences] = useState([]);
  const [education,setEducation]= useState([])
   const [formValues, setFormValues] = useState({});

    const handleFormSubmit = (values) => {
      setFormValues(values);
    
    };
const addEducation =()=>{
  setEducation([...education,{id:education.length+1}])
}

const removeEducation = (id) => {
  setEducation(education.filter((item)=>item.id!==id))
}

const handleEducationSubmit=(id,values)=>{
  setEducation((prevEducation) => {
    const updatedEducation = [...prevEducation];
    const index = updatedEducation.findIndex((edu) => edu.id === id);
    updatedEducation[index] = { id, values };
    return updatedEducation;
  });
}

  const addExperience = () => {
    setExperiences([...experiences, { id: experiences.length + 1 }]);
  };

  const removeExperience = (id) => {
    setExperiences(experiences.filter((experience) => experience.id !== id));
  };
  const handleExperienceSubmit = (id, values) => {
    setExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      const index = updatedExperiences.findIndex((exp) => exp.id === id);
      updatedExperiences[index] = { id, values };
      return updatedExperiences;
    });

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const experienceValues = experiences.map((experience) => ({
      ...experience.values,
    }));
    const educationValues = education.map((education) => ({
      ...education.values,
    }));
    console.log('personal values:', formValues);
     console.log('Experience values:', experienceValues);
     console.log('Education values:', educationValues);
  };

  return (
    <>
      <Header />
      <div className='container'>
        <form onSubmit={handleSubmit}>
        <PersonalDetail onSubmit={handleFormSubmit} />

          <h1>Experience</h1>
          {experiences.map((experience) => (
            <Experience
              key={experience.id}
              experienceId={experience.id}
              onRemove={removeExperience}
              onSubmit={handleExperienceSubmit}
            />
          ))}

          <button type='button' className='btn btn-outline-primary mb-3' onClick={addExperience}>
            Add Experience
          </button>

          <h1>Education</h1>
         
          {education.map((item)=>(
               <Education
               key={item.id}
               educationId={item.id}
               onRemove={removeEducation}
               onSubmit={handleEducationSubmit}
               />
          ))}
           <button type='button' className='btn btn-outline-primary mb-3' onClick={addEducation} >
            Add Education
          </button>
        
          <div>
            <center>
          <button type='submit'className='btn btn-primary cente'>Submit</button>
          </center>
          </div>
        </form>
      </div>
    </>
  );
}

export default Resume;
