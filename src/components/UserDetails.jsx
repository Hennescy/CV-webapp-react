import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";

const UserDetails = () => {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const handlePersonChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };
  

  const [educationDetails, setEducationDetails] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const [showEducation, setShowEducation] = useState(false);
  const [savedEducation, setSavedEducation] = useState(null);

  

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducationDetails({ ...educationDetails, [name]: value });
  };

  const toggleEducation = () => {
    setShowEducation(!showEducation);
  };

  const handleSave = () => {
    setSavedEducation(educationDetails);
    setShowEducation(false);
  };

  const handleCancel = () => {
    setShowEducation(false);
    handleClear();
  };

  const handleClear = () => {
    setEducationDetails({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  return (
    <>
      <div className="fullPage">
        <div className="inputs">
          <PersonalDetails
            personalDetails={personalDetails}
            handlePersonChange={handlePersonChange}
          />
          <EducationDetails
            educationDetails={educationDetails}
            showEducation={showEducation}
            handleEducationChange={handleEducationChange}
            toggleEducation={toggleEducation}
            handleSave={handleSave}
            handleCancel={handleCancel}
            handleClear={handleClear}
            savedEducation={savedEducation}
          />
        </div>
        <div className="allInfo">
                <div className="personalInfo">
                    <div className="fullName">{personalDetails.firstName} {personalDetails.lastName}</div>
                    <div className="details">
                    <p className="email">{personalDetails.email}</p>
                    <p className="phone">{personalDetails.phoneNumber}</p>
                    <p className="address">{personalDetails.address}</p>
                    </div>
                 </div>  
        {savedEducation && (
                    <div className="educationInfo">
                        <div className="education">Education</div> 
                        <p className="school">{savedEducation.school}</p>
                        <p className="degree">{savedEducation.degree}</p>
                        <p className="startDate">{savedEducation.startDate}</p>
                        <p className="endDate">{savedEducation.endDate}</p>
                        <p className="location">{savedEducation.location}</p>
                    </div>
                )}
            </div>
      </div>
    </>
  );
};

export default UserDetails;