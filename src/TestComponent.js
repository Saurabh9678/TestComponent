import React from 'react';

const TestComponent = ({name}) => {
  const [username, setUsername] = React.useState("");
  React.useEffect(() => {
    if(name){
      setUsername(name);
    }else{
      setUsername("Guest");
    }
  },[name]);
  return (
    <div>
      <div>Hello from TestComponent!</div>
      <h1>{username}</h1>
    </div>
  );

};

export default TestComponent;
