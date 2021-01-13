// import React, { useState } from 'react';
 
// const ControlledUncontrolled = () => {
//   const [value, setValue] = useState('Hello React');
 
//   const handleChange = event => setValue(event.target.value);
 
//   return (
//     <div>
//       <label>
//         My still uncontrolled Input:
//         <input type="text" onChange={handleChange} />
//       </label>
 
//       <p>
//         <strong>Output:</strong> {value}
//       </p>
//     </div>
//   );
// };
 
// export default ControlledUncontrolled;

// import React, { useState } from 'react';
 
// const ControlledUncontrolled = () => {
//   const [value, setValue] = useState('');
 
//   const handleChange = event => setValue(event.target.value);
 
//   return (
//     <div>
//       <label>
//         My still uncontrolled Input:
//         <input type="text" onChange={handleChange} />
//       </label>
 
//       <p>
//         <strong>Output:</strong> {value}
//       </p>
//     </div>
//   );
// };
 
// export default ControlledUncontrolled;

// import React, { useState } from 'react';
 
// const ControlledUncontrolled = () => {
//   const [value, setValue] = useState('Hello React');
 
//   const handleChange = event => setValue(event.target.value);
 
//   return (
//     <div>
//       <label>
//         My controlled Input:
//         <input type="text" value={value} onChange={handleChange} />
//       </label>
 
//       <p>
//         <strong>Output:</strong> {value}
//       </p>
//     </div>
//   );
// };
 
// export default ControlledUncontrolled;

import React from 'react';
class UserProfile extends React.Component {
    constructor(props) {
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.input = React.createRef()
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.input.current.value)
      event.preventDefault()
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            {'Name:'}
            <input type="text" ref={this.input} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
export default UserProfile;