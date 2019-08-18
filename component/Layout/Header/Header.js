import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu,
    DropdownItem } from 'reactstrap';

const Header = (props) => {

    const [toggler,settoggle] = React.useState({
       isOpen: false
    });
    const toggle = () => { settoggle({isOpen: !toggler.isOpen})};
    return(
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/"><strong>Rento</strong></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={toggler.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    );
};
export default Header;