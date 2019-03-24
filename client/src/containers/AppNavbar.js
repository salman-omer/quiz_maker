import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
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
                                <NavLink href= "/" exact>Home</NavLink>
                                <NavLink href= "/forum" exact>Forum</NavLink>
                                <NavLink href= "/quizzes" exact>Quizzes</NavLink> 
                                <NavLink href= "/announcements/view" exact>announcements</NavLink>   
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>    
        );       
    }
}
export default AppNavbar;