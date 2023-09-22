import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const LoginScreen = () => {
  return (
    <div className="screen">
      <Header />
      <div className="">
        <Hero />
        <LoginForm />
      </div>

      <Banner />
    </div>
  );
};

export default LoginScreen;
