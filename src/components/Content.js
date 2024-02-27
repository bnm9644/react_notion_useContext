import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const Content = () => {

  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div 
      className ="content"
      style={{
        backgroundColor : isDark? 'black' : 'white',
        color: isDark? 'white' : 'black',
      }}
    >
      <p>{user}, 좋은 하루</p>
    </div>
  );
};

export default Content;

/*
  const Content = () => {

  const {isDark} = useContext(ThemeContext);

  return (
    <div 
      className ="content"
      style={{
        backgroundColor : isDark? 'black' : 'white',
        color: isDark? 'white' : 'black',
      }}
    >
      <p>React, 좋은 하루</p>
    </div>
  );
};
*/