import React from 'react';
import Aside from './Aside/Aside';
import Header from './Header/Header';
import Main from './Main/Main';
import MainContent from './MainContent/MainContent';
import Navbar from './Navbar/Navbar';
import Container from './Container/Container';

function Layouts() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default Layouts;

export { Aside, Header, Main, MainContent, Navbar, Container };

