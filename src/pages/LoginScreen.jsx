import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const loginScreen = () => {
  return (
    <div className="screen">
      <Header />
      <div className="login-form">
        <Hero />
        <LoginForm />
      </div>

      <Banner />
    </div>
  );
};

export default loginScreen;
