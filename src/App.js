import React from 'react';

const App = () => {
  const profiles = [
    { id: 1, name: 'taro', age: 20 },
    { id: 2, name: 'hanako', age: 25 },
  ];

  return (
    <div>
      {
        profiles.map(profile => (
          <User
            key={profile.id}
            name={profile.name}
            age={profile.age}
          />
        ))
      }
    </div>
  )
}

const User = ({ name, age }) => {
  return (
    <div>
      I'm {name} and {age} years old.
    </div>
  );
}

export default App;
