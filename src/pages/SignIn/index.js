import React from 'react';
import Auth from '../../components/Auth';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SignIn = () => {
  return (
    <>
    <Header />
    <Auth page = "signin" />
    <Footer />
    </>
  );
};

export default SignIn;
