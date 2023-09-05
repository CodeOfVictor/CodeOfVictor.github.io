import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useTranslation } from 'react-i18next';

const NavbarWeb = () => {
  // CSS
  const useStyles = makeStyles({
    textInfo:
    {
      textAlign:"center",
      paddingTop: 6,
      color: "white"
    }
  });

  const classes = useStyles();

  // Change language
  const [isEnglish, setIsEnglish] = useState(true); // Estado para controlar el idioma
  const { t, i18n} = useTranslation();

  // Función para cambiar el idioma cuando el usuario interactúa con el switch
  const handleLanguageChange = () => {
    setIsEnglish(!isEnglish); // Cambiar el estado del idioma

    const newLanguage = isEnglish ? 'es' : 'en'; // Obtener el nuevo idioma
    i18n.changeLanguage(newLanguage); // Cambiar el idioma utilizando i18next
  };
    
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1 }}>
    <Container fluid>
      <Navbar.Brand href="#"></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#presentation">{t('navbarWeb.presentation')}</Nav.Link>
          <Nav.Link href="#studies">{t('navbarWeb.studies')}</Nav.Link>
          <Nav.Link href="#works">{t('navbarWeb.works')}</Nav.Link>
          <Nav.Link href="#achievements">{t('navbarWeb.achievements')}</Nav.Link>
          <Nav.Link href="#projects">{t('navbarWeb.projects')}</Nav.Link>
          <Nav.Link href="#languages">{t('navbarWeb.languages')}</Nav.Link>
          <Nav.Link href="#courses">{t('navbarWeb.courses')}</Nav.Link>
        </Nav>
        <Navbar.Text style={{ marginRight: '10px' }}>{t('navbarWeb.language')}</Navbar.Text>
        <Form.Check
          type="switch"
          id="language-switch"
          label={isEnglish ? 'English' : 'Español'}
          onChange={handleLanguageChange} // Llamar a la función para cambiar el idioma
          style={{ color: 'white' }}
        />
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavbarWeb;