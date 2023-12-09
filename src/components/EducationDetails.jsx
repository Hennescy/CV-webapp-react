/* eslint-disable react/prop-types */
const EducationDetails = ({
    educationDetails,
    showEducation,
    handleEducationChange,
    toggleEducation,
    handleSave,
    handleCancel,
    handleClear,
  }) => {
    return (
        <div className="educationInputs">
        <h2 onClick={toggleEducation}>
            Education <span className={showEducation ? 'active' : ''}>^</span>
        </h2>
        {showEducation && (
            <div>
                <div>
                    <label htmlFor="school">School:</label>
                        <input
                            type="text"
                            id="school"
                            name="school"
                            value={educationDetails.school}
                            onChange={handleEducationChange}
                        />
                </div>
                <div>
                    <label htmlFor="degree">Degree:</label>
                        <input
                            type="text"
                            id="degree"
                            name="degree"
                            value={educationDetails.degree}
                            onChange={handleEducationChange}
                        />
                </div>
                <div>
                    <label htmlFor="startDate">Start Date:</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={educationDetails.startDate}
                            onChange={handleEducationChange}
                        />
                </div>
                <div>
                    <label htmlFor="endDate">End Date:</label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={educationDetails.endDate}
                            onChange={handleEducationChange}
                        />
                </div>
                <div>
                        <label htmlFor="location">Location:</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={educationDetails.location}
                                onChange={handleEducationChange}
                            />
                </div>
            <div>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleClear}>Clear</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default EducationDetails;