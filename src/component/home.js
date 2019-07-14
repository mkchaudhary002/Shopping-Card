import React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu
} from 'shards-react';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);

        this.state = {
            dropdownOpen: false
        };
    }

    toggleDropdown() {
        this.setState({
            ...this.state,
            ...{
                dropdownOpen: !this.state.dropdownOpen
            }
        });
    }
    render() {
        return (
            <div>
                <Navbar type="dark" expand="md" style={{ backgroundColor: "green" }}>
                    <div className="container">
                        <NavbarBrand href="#">
                            <h5 className="text-white font-weight-bold">Shopping</h5>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} />

                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className="p-2 px-3 " active href="#">
                                    <h6 className="text-white"> Home</h6>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="p-2 px-3 " active href="#">
                                    <h6 className="text-white">Product</h6>
                                </NavLink>
                            </NavItem>

                            {/* <Dropdown open={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                                <DropdownToggle nav caret className="text-white">
                                    Product Name
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Shirt</DropdownItem>
                                    <DropdownItem>T-Shirt</DropdownItem>
                                    <DropdownItem>Jeans</DropdownItem>
                                    <DropdownItem>Paint</DropdownItem>
                                    <DropdownItem>Kurta</DropdownItem>
                                </DropdownMenu>
                            </Dropdown> */}

                            <NavItem>
                                <NavLink className="p-2 px-3 " active href="#">
                                    <h6 className="text-white"> Signin</h6>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="p-2  px-3" active href="#">
                                    <h6 className="text-white"> Signup</h6>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </div>
        )
    }
}
export default Home;