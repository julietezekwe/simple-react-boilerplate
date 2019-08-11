import React from 'react';
import Auth from '../../components/Auth';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SignUp= () => {
  return (
    <>
    <Header />
    <Auth page = "signup" />
    <Footer />
    </>
  );
};

export default SignUp;
