import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
    state ={
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return(
            <div>
                <Navbar
                color="dark"
                dark expand="sm"
                className="mb-5"
                >
                    <Container>
                        <NavbarBrand href ="/">Minerva</NavbarBrand>
                        <NavbarToggler onClick = {this.toggle}/>
                        <Collapse isOpen ={ this.state.isOpen} navbar>
                            <Nav className= "ml-auto" navbar>
                                <NavLink to= "/" exact>Home</NavLink>
                                <NavLink to= "/forum" exact>Forum</NavLink>
                                <NavLink to= "/quizzes" exact>Quizzes</NavLink> 
                                <NavLink to= "/announcements/view" exact>announcements</NavLink>   
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>    
        );       
    }
}
export default AppNavbar;