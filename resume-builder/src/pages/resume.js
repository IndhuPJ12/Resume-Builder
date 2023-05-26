
import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Experience from '../components/Experience';
import Header from '../components/Header';
import PersonalDetail from '../components/PersonalDetail';
import Education from '../components/Education';
import FinalResume from '../components/FinalResume';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const Resume = () => {

  const formRef = useRef(null)
  const [showResume, setShowResume] = useState(false) //to show final resume
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([])
  const [personalFormValues, setPersonalFormValues] = useState({});
  const [skill, setSkill] = useState([])
  const [additionalExperience, setAdditionalExperience] = useState(null);
  const [additionalEducation, setAdditionalEducation] = useState(null);


  const options = [
    { value: 'reactjs', label: 'ReactJS' },
    { value: 'javascript', label: 'Javascript' },
    { value: 'nodejs', label: 'NodeJs' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'mongodb', label: 'MongoDB' }
  ]

  const handlePersonalDetailSubmit = (values) => {
    setPersonalFormValues(values);

  };
  const addEducation = () => {
    setEducation([...education, { id: education.length + 1 }])
  }

  const removeEducation = (id) => {
    setEducation(education.filter((item) => item.id !== id))
  }

  const handleEducationSubmit = (id, values) => {
    if (id == 'additional') {
      setAdditionalEducation(values);
    } else {
      setEducation((prevEducation) => {
        const updatedEducation = [...prevEducation];
        const index = updatedEducation.findIndex((edu) => edu.id === id);
        updatedEducation[index] = { id, values };
        return updatedEducation;
      });
    }
  }

  const addExperience = () => {
    setExperiences([...experiences, { id: experiences.length + 1 }]);
  };

  const removeExperience = (id) => {
    setExperiences(experiences.filter((experience) => experience.id !== id));
  };
  const handleExperienceSubmit = (id, values) => {

    if (id == 'additional') {
      setAdditionalExperience(values);
    }
    else {

      setExperiences((prevExperiences) => {
        const updatedExperiences = [...prevExperiences];

        const index = updatedExperiences.findIndex((exp) => exp.id === id);
        updatedExperiences[index] = { id, values };
        return updatedExperiences;
      });
    }
    //  }

  };
  const addSkill = (selectedSkills) => {
    setSkill(selectedSkills)

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const experienceValues = experiences.map((experience) => ({
      ...experience.values,
    }));
    const educationValues = education.map((education) => ({
      ...education.values,
    }));
    console.log(personalFormValues)
    console.log(additionalExperience)
    setShowResume(true)

  };

  return (
    <>
      <Header />
      <div className='container'>
        {!showResume ? (
          <form onSubmit={handleSubmit} ref={formRef}>
            <h3>Personal Details</h3>
            <PersonalDetail onSubmit={handlePersonalDetailSubmit} />

            <h3>Experience</h3>

            <Experience
              //key={"additional"}
              //experienceId={"additional"}
              key="additional-experience"
              experienceId="additional"
              onRemove={removeExperience}
              onSubmit={handleExperienceSubmit}
            />



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

            <h3>Education</h3>
            <Education
              key="additional-education"
              educationId="additional"
              onRemove={removeEducation}
              onSubmit={handleEducationSubmit}
            />

            {education.map((item) => (
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

            <h3>Skills</h3>
            <div className='row  mb-3'>
              <Select isMulti options={options} name='skills' className='col-sm-6' onChange={addSkill} />
            </div>


            <div>
              <center>
                <button type='submit' className='btn btn-primary center mt-5'>Submit</button>
              </center>
            </div>
          </form>
        )
          :
          <FinalResume
            personalDetail={personalFormValues}
            initialExperience={additionalExperience}
            experienceDetails={experiences}
            educationDetails={education}
            initialEducation={additionalEducation}
            skills={skill}
          />
        }
      </div>
    </>
  );
}

export default Resume;
