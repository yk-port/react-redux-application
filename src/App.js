import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: 'Taro', age: 10 },
    { name: 'Hanako', age: 20 },
    { name: 'NoName' },
  ];

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  );
}

const User = (props) => {
  return <div>Hello, {props.name}!! I'm {props.age}years old.</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}

export default App;
