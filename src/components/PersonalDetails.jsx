/* eslint-disable react/prop-types */

const PersonalDetails = ({ personalDetails, handlePersonChange }) => {

    
  return (
    <div className="personalInputs">
            <h2>Personal Details</h2>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={personalDetails.firstName}
                    onChange={handlePersonChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id='lastName'
                        name='lastName'
                        value={personalDetails.lastName}
                        onChange={handlePersonChange}
                    />    
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={personalDetails.email}
                        onChange={handlePersonChange}
                    />    
                </div>
                <div>
                    <label htmlFor='phoneNumber'>Phone number:</label>
                    <input
                        type='text'
                        id='phoneNumber'
                        name='phoneNumber'
                        value={personalDetails.phoneNumber}
                        onChange={handlePersonChange}
                    />    
                </div> 
                <div>
                    <label htmlFor='address'>Address:</label>
                    <input
                        type='text'
                        id='address'
                        name='address'
                        value={personalDetails.address}
                        onChange={handlePersonChange}
                    />    
                </div>

        </div>
  );

};
export default PersonalDetails;