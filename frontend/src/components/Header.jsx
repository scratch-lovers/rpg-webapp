import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/Header.css';

function Header() {
    return (
        <Navbar variant="green" expand="sm">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle className="navbarToggle" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown className="cardsDropdownItem" title="Character cards" id="basic-nav-dropdown">
                        <NavDropdown.Item variant="green" className="cardsDropdownItem" href="#action/3.1">D&D</NavDropdown.Item>
                        <NavDropdown.Item variant="green" className="cardsDropdownItem" href="#action/3.2">Call of Cthulhu</NavDropdown.Item>
                        <NavDropdown.Item variant="green" className="cardsDropdownItem" href="#action/3.3">OHET</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="ml-auto">
                    <Button className="headerButton" variant="success">Log in</Button>
                    <Button className="headerButton" variant="primary">Sign up</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
