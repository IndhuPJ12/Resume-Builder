
function FinalResume({personalDetail, initialExperience,experienceDetails,educationDetails, initialEducation,skills}) {
  
    return(
       
   <div  className="mx-auto p-5" style={{backgroundColor:"#00A4FF45",border:'3px solid #007BFF73' ,width:'65%'}}>
    
    <h4><u>Personal Details</u></h4>
   
   <p>First Name :{personalDetail.firstName}</p>
   <p>Last Name :{personalDetail.lastName} </p>
   <p>Email :  {personalDetail.email}</p>
   <p>Mobile No : {personalDetail.mobile}</p>
   <p>Address Line1 :{personalDetail.address1} </p>
   <p>Address Line2 :{personalDetail.address2}</p>
   
   
   <h4><u>Experience</u></h4>


   <div>
   <p>Designation : {initialExperience.jobTitle} </p>
   <p>Employer :  {initialExperience.employer}</p>
   <p>Start Date : {initialExperience.startDate}</p>
   <p>End Date :  {initialExperience.endDate}</p>
   <hr className="my-4"/>
   </div>
  
    {experienceDetails.map((experience)=>(

   <div>
   <p>Designation : {experience.values.jobTitle} </p>
   <p>Employer :  {experience.values.employer}</p>
   <p>Start Date : {experience.values.startDate}</p>
   <p>End Date :  {experience.values.endDate}</p>
   <hr className="my-4"/>
   </div>
   ))}

<h4><u>Education</u></h4>

<div>
   <p>Institution : {initialEducation.institutionName} </p>
   <p>Qualification :  {initialEducation.degree}</p>
   <p>Location :{initialEducation.location} </p>
   <p>Start Date : {initialEducation.startDate}</p>
   <p>End Date :  {initialEducation.endDate}</p>
   <hr className="my-4"/>
   </div>

    {educationDetails.map((education)=>(

   <div>
   <p>Institution : {education.values.institutionName} </p>
   <p>Qualification :  {education.values.degree}</p>
   <p>Location :{education.values.location} </p>
   <p>Start Date : {education.values.startDate}</p>
   <p>End Date :  {education.values.endDate}</p>
   <hr className="my-4"/>
   </div>
   ))}
   <h4><u>Skills</u></h4>
   {skills.map((skill)=>(
    <h4>
        <span className="badge badge-primary">
        {skill.label}
        </span>
        
        </h4>
   ))}
  
   </div>
  
    )
}
export default FinalResume