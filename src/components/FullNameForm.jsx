import React, { useState } from 'react';

function FullNameForm() {
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [fullName, setFullName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setFullName(`${firstName} ${lastName}`); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} 
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
      {fullName && <div>Hello, {fullName}</div>} {/* Display the full name if available */}
    </div>
  );
}

export default FullNameForm