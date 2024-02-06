// import React, { useState } from 'react';

// export function Addentry(props) 
// {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mcq1: 0,
//     mcq2: 0
//   });

//   const handleChange = (fieldName, value) => {
//     setFormData({
//       ...formData,
//       [fieldName]: value,
//     });
//   };

//   const submitForm = () => {
//     fetch('http://localhost:3000/addentry', {
//       method: 'POST',
//       body: JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         mcq1: formData.mcq1,
//         mcq2: formData.mcq2,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(async (res) => {
//         const json = await res.json();
//         alert('Entry has been added');
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Add Entry</h2>
//       <div>
//         Name:{' '}
//         <input
//           type="text"
//           placeholder="Enter a name"
//           onChange={(event) => handleChange('name', event.target.value)}
//         />
//       </div>
//       <div>
//         Email:{' '}
//         <input
//           type="email"
//           placeholder="Enter an email"
//           onChange={(event) => handleChange('email', event.target.value)}
//         />
//       </div>
//       <div>
//         MCQ1:{' '}
//         <input
//           type="number"
//           placeholder="Enter MCQ1"
//           onChange={(event) => handleChange('mcq1', parseInt(event.target.value, 10))}
//         />
//       </div>
//       <div>
//         MCQ2:{' '}
//         <input
//           type="number"
//           placeholder="Enter MCQ2"
//           onChange={(event) => handleChange('mcq2', parseInt(event.target.value, 10))}
//         />
//       </div>
//       <button onClick={submitForm}>Submit</button>
//     </div>
//   );
// }
import React, { useState } from 'react';

export function Addentry(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mcq1: 0,
    mcq2: 0,
    mcq3: 0,
    mcq4: 0,
    mcq5: 0,
    mcq6: 0,
    interestedPeople: [],
    connectedUsers:[]
  });

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleMCQChange = (questionNumber, option) => {
    const mcqField = `mcq${questionNumber}`;
    handleChange(mcqField, option);
  };

  const handleInterestedPeopleChange = (column, value) => {
    const names = value.split(',').map((name) => name.trim());
    const interestedPeopleField = [...formData.interestedPeople];
    interestedPeopleField[column - 1] = names;
    handleChange('interestedPeople', interestedPeopleField.flat());
  };

  const submitForm = () => {
    const entryRequest = fetch('https://demo-app-v4ik.onrender.com/addentry', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        mcq1: formData.mcq1,
        mcq2: formData.mcq2,
        mcq3: formData.mcq3,
        mcq4: formData.mcq4,
        mcq5: formData.mcq5,
        mcq6: formData.mcq6,
        interestedPeople: formData.interestedPeople,
        connectedUsers:[]
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const entryRequest1 = fetch('https://demo-app-v4ik.onrender.com/mutual', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        mcq1: formData.mcq1,
        mcq2: formData.mcq2,
        mcq3: formData.mcq3,
        mcq4: formData.mcq4,
        mcq5: formData.mcq5,
        mcq6: formData.mcq6,
        interestedPeople: formData.interestedPeople,
        connectedUsers:[]
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    const entryRequest2 = fetch('https://demo-app-v4ik.onrender.com/matchPreferences', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        mcq1: formData.mcq1,
        mcq2: formData.mcq2,
        mcq3: formData.mcq3,
        mcq4: formData.mcq4,
        mcq5: formData.mcq5,
        mcq6: formData.mcq6,
        interestedPeople: formData.interestedPeople,
        connectedUsers:[]
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    Promise.all([entryRequest,entryRequest1,entryRequest2])
    .then(async (responses) => {
      const entryResponse = await responses[0].json(); // Response from the first endpoint
      const entryResponse1 = await responses[1].json(); // Response from the second endpoint
      const entryResponse2 = await responses[2].json(); // Response from the second endpoint
      
      // Handle responses if needed
      alert('Entry has been added');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    //   .then(async (res) => {
    //     const json = await res.json();
    //     alert('Entry has been added');
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };

  return (
    <div>
      <h2>Add Entry</h2>
      <div>
        Name:{' '}
        <input
          type="text"
          placeholder="Enter a name"
          onChange={(event) => handleChange('name', event.target.value)}
        />
      </div>
      <div>
        Email:{' '}
        <input
          type="email"
          placeholder="Enter an email"
          onChange={(event) => handleChange('email', event.target.value)}
        />
      </div>
       <div>
        MCQ1:{' '}
        <select onChange={(event) => handleMCQChange(1, parseInt(event.target.value,10))}>
          <option value="0">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      <div>
        MCQ2:{' '}
        <select onChange={(event) => handleMCQChange(2,parseInt(event.target.value,10))}>
          <option value="0">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      <div>
        MCQ3:{' '}
        <select onChange={(event) => handleMCQChange(3,parseInt(event.target.value,10))}>
          <option value="0">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      <div>
        MCQ4:{' '}
        <select onChange={(event) => handleMCQChange(4,parseInt(event.target.value,10))}>
          <option value="0">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      <div>
        MCQ5:{' '}
        <select onChange={(event) => handleMCQChange(5,parseInt(event.target.value,10))}>
          <option value="0">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      <div>
        MCQ6:{' '}
        <select onChange={(event) => handleMCQChange(6,parseInt(event.target.value,10))}>
          <option value="0">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      
       {/* Interested People columns */}
       <div>
        Interested People 1 :- {''}
        <input
          type="text"
          placeholder="Enter interested people"
          onChange={(event) => handleInterestedPeopleChange(1, event.target.value)}
        />
      </div>
      <div>
        Interested People 2 :- {''}
        <input
          type="text"
          placeholder="Enter interested people"
          onChange={(event) => handleInterestedPeopleChange(2, event.target.value)}
        />
      </div>
      <div>
        Interested People 3 :- {''}
        <input
          type="text"
          placeholder="Enter interested people"
          onChange={(event) => handleInterestedPeopleChange(3, event.target.value)}
        />
      </div>

      <button onClick={submitForm}>Submit</button>
    </div>
  );
}
