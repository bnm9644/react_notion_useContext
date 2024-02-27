import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
//import { ThemeContext } from "../context/ThemeContext";


const Page = () => {

  //const data = useContext(ThemeContext);

  return (
    <div className="page">
        <Header />
        <Content />
        <Footer />
    </div> 
  )
};

export default Page;

/*
 const Page = () => {

  const data = useContext(ThemeContext); // App Component에 있는 prop의 isDark , setIsDark를 Page Component에 전달 함
  console.log(data);

  return (
    <div className="page">
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark}/> 
    </div> 
  )
};
 */