import { useState ,useRef}  from 'react';
import  'bootstrap/dist/css/bootstrap.css';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Header from '../components/Header';
import PersonalDetail from '../components/PersonalDetail';



function Resume () {

const expref=useRef(0)

const [experiences, setExperiences] = useState([]);
const [education, setEducation] = useState([]);

const experienceHandler = (event) => {
    event.preventDefault()
 setExperiences([...experiences, <Experience key={experiences.length} />]);
};

const educationHandler = (event) => {
    event.preventDefault()
 setEducation([...education, <Education key={education.length} />]);
};

const [formValues, setFormValues] = useState({});

const handleFormSubmit = (values) => {
  setFormValues(values);
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form values in parent component:', formValues);
  // Perform further actions with the form values in the parent component
};

    return (
        <>
        <Header/>
        <div className='container'>
    
        <form onSubmit={handleSubmit} >
            <PersonalDetail onSubmit={handleFormSubmit} />
            <h1>Experience</h1>

           <Experience />
          
           {experiences.map((experience, index) => (
          <div key={index} className="experience">
            <Experience name={`experience[${index}]`} />
          </div>
        ))}
          
         <button onClick={experienceHandler}>Add Experience</button>
         <h1>Education</h1>
         <Education/>

         {education.map((education, index) => (
          <div key={index} className="education">
            <Education />
          </div>
        ))}
          
         <button onClick={educationHandler} className='mb-5'>Add Education</button>
          <center>
        <button className='btn btn-primary center' type='submit'>Sumbit</button>
        </center>
        </form>

        </div>
        </>
    )
}
export default Resume