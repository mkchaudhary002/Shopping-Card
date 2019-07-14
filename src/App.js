import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse,
  Button,
  Popover,
  PopoverBody,
  Card
} from "shards-react";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.toggle1 = this.toggle1.bind(this);
    this.state = { open: false };

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.state = {
      open: false
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

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  toggle1() {
    this.setState({ open: !this.state.open });
  }



  render() {
    return (

      <Navbar type="dark" theme="success" expand="md">
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <Dropdown
              open={this.state.dropdownOpen}
              toggle={this.toggleDropdown}
            >
              <DropdownToggle caret className="btn btn-primary btn-lg">
                Product
                  </DropdownToggle>
              <DropdownMenu>
                <Button id="popover-2" onClick={this.toggle1}>Shirt</Button>
                <Popover
                  placement="right"
                  open={this.state.open}
                  toggle={this.toggle1}
                  target="#popover-2"
                >
                  <PopoverBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
          </PopoverBody>
                </Popover>
                <DropdownItem>T-shirt</DropdownItem>
                <Button>Tshsg</Button>
                <DropdownItem>Jeans</DropdownItem>
                <DropdownItem>Laptop</DropdownItem>
                <DropdownItem>Mobile</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <div style={{ textAlign: "right" }}>
              <Button id="popover-1" onClick={this.toggle} className="btn btn-primary btn-lg ml-5">
                AddToCard
                    </Button>
              <Popover
                placement="bottom"
                open={this.state.open}
                toggle={this.toggle}
                target="#popover-1"
              >

                {/* <PopoverBody> */}
                <Card outline theme="Dark" style={{ height: "200px", width: "300px" }}>
                  {/* <Button className="wNrY50" disabled>-</Button>
                              <div className="_2zH4zc">
                              <input type="text" value="1" className="_2csFM9"></input>
                              </div>
                        <Button className="wNrY50" disabled>+</Button> */}
                </Card>
                {/* </PopoverBody> */}
              </Popover>
            </div>
          </Nav>

          <Nav navbar className="ml-auto">
            <InputGroup size="sm" seamless>
              <InputGroupAddon type="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroupText>
              </InputGroupAddon>
              <FormInput className="border-0" placeholder="Search..." />
            </InputGroup>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
export default App;
