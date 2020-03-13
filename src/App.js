import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: 'Taro', age: 10 },
    { name: 'Hanako', age: 12 },
    { name: 'Hanako' },
  ];

  return (
    <React.Fragment>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </React.Fragment>
  );
}

const User = (props) => {
  return (
    <div>
      Hi! I'm {props.name}, and {props.age} years old.
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
}

export default App;
