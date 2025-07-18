import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import logo from './media/coffee.png'
import {HashLink} from 'react-router-hash-link';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';
import { Container,Button } from 'react-bootstrap';

function NavBar() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

  return (
    <>
      <Navbar fixed="top" className='NavBar'>
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/" className="NavBarBrand"><img style={{ width : "50px", paddingRight : "10px"}} src={logo}/>Coffee Census</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-left">
            </Nav>
            <Nav className="ms-auto">
                <div>
                    <Button style={{marginRight: "1rem"}} className="scrollButton" onClick={() => changeLanguage('en')}>English</Button>
                    <Button className="scrollButton" onClick={() => changeLanguage('fr')}>Français</Button>
                </div>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;