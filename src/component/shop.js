import React from 'react';
import {
    Dropdown,
    Card,
    CardImg,
    Button
} from 'shards-react';
import axios from "axios";


class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { open: false };
        this.state = {
            dropdownOpen: false,
            open: false
        };
    }
    toggle() {
        this.setState({ open: !this.state.open });
    }
    handleDrugCodeForm = (e) => {
        console.log(e.target.value);
        if (e.target.value == "Paint") {
            this.setState({
                showForm1: true,
                showForm2: false,
                showForm3: false,
                showForm4: false,
                showForm5: false
            })
        }

        if (e.target.value == "Shirt") {
            this.setState({
                showForm1: false,
                showForm2: true,
                showForm3: false,
                showForm4: false,
                showForm5: false
            })
        }
        if (e.target.value == "T-shirt") {
            this.setState({
                showForm1: false,
                showForm2: false,
                showForm3: true,
                showForm4: false,
                showForm5: false
            })
        }
        if (e.target.value == "Jacket") {
            this.setState({
                showForm1: false,
                showForm2: false,
                showForm3: false,
                showForm4: true,
                showForm5: false
            })
        }
        if (e.target.value == "Jeans") {
            this.setState({
                showForm1: false,
                showForm2: false,
                showForm3: false,
                showForm4: false,
                showForm5: true
            })
        }
    }
    componentDidMount = () => {
        // GLOBAL_API
        axios.get(`http://192.168.50.110:5001/category`)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    this.setState({
                        category: res.data,
                        success: true
                    });
                }
            })
            .catch(function () {
                console.log("Server issue / no data found");
            });
    };
    render() {
        // const { category } = this.state;
        // let categoryListItems = category.map((item) => {
        //     // console.log(item.pId);
        //     return (
        //         <select >
        //             <option> {item.type}</option>
        //             {/* <option onClick={(e) => { this.handlePatientAcc(e, item.type) }} ><i class="far fa-eye" onClick={this.patientAcc}></i></option> */}
        //         </select>
        //     )
        // })
        return (
            <div className="row">
                <div className="col-lg-3 col-lg">
                    <div className="mt-4 ml-5">
                        <Dropdown open={this.state.open} toggle={this.toggle} group>
                            <select className="" name="hospital_code" className="form-control text-success mt-3" onChange={(e) => { this.handleDrugCodeForm(e) }}>
                                <option value="1">Select Product name</option>
                                <option value="Paint">Paint</option>
                                {/* <option value="Shirt">Shirt</option>
                                <option value="T-shirt">T-Shirt</option>
                                <option value="Jacket">Jacket</option>
                                <option value="Jeans">Jeans</option> */}
                                {/* <option>{categoryListItems}</option> */}
                                
                            </select>
                        </Dropdown>
                    </div>
                </div>

                <div className="col-lg-3 col-lg">
                    <div className="mt-4 ml-5">
                        {this.state.showForm1 &&
                            <div>
                                <Card>
                                    <h6 className="text-center">Paint</h6>
                                    <CardImg top src={require('./pic/p.jpeg')} style={{ width: "100%", height: "300px" }} />
                                    <Button squared theme="success" className="">AddCard</Button>
                                    <Button squared theme="info" >Rs.1200</Button>
                                </Card>
                            </div>
                        }
                        {this.state.showForm2 &&
                            <div>
                                <h6 className="text-center">Shirt</h6>
                                <CardImg top src={require('./pic/p1.jpeg')} style={{ width: "100%", height: "300px" }} />
                                <Button squared theme="success" className="ml-5">AddCard</Button>&nbsp;&nbsp;
                                <Button squared theme="info" >Rs.1200</Button>
                            </div>
                        }
                        {this.state.showForm3 &&
                            <div>
                                <h6 className="text-center">T-Shirt</h6>
                                <CardImg top src={require('./pic/p.jpeg')} style={{ width: "100%", height: "300px" }} />
                                <Button squared theme="success" className="ml-5">AddCard</Button>&nbsp;&nbsp;
                                <Button squared theme="info" >Rs.1200</Button>
                            </div>
                        }
                        {this.state.showForm4 &&
                            <div>
                                <h6 className="text-center">Jacket</h6>
                                <CardImg top src={require('./pic/p.jpeg')} style={{ width: "100%", height: "300px" }} />
                                <Button squared theme="success" className="ml-5">AddCard</Button>&nbsp;&nbsp;
                                <Button squared theme="info" >Rs.1200</Button>
                            </div>
                        }
                        {this.state.showForm5 &&
                            <div>
                                <h6 className="text-center">Jeans</h6>
                                <CardImg top src={require('./pic/p1.jpeg')} style={{ width: "100%", height: "300px" }} />
                                <Button squared theme="success" className="ml-5">AddCard</Button>&nbsp;&nbsp;
                                <Button squared theme="info" >Rs.1200</Button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Shop;























// import React from 'react';
// import {
//     Dropdown,
//     Card,
//     CardImg,
//     Button,
//     Popover,
//     PopoverBody
// } from 'shards-react';
//  import Addcart from './addcart';

// class Shop extends React.Component {
//     constructor(props) {
//         super(props);
//         this.toggle = this.toggle.bind(this);
//         this.state = { open: false };
//         this.state = {
//             dropdownOpen: false,
//             open: false
//         };
//         this.addToCart = this.addToCart.bind(this);
//     }
//     toggle() {
//         this.setState({ open: !this.state.open });
//     }
//     addToCart() {
//         this.setState({ data: 'Added to cart' })
//         console.log("added")
//     }

//     handleDrugCodeForm = (e) => {
//         console.log(e.target.value);
//         if (e.target.value == "Paint") {
//             this.setState({
//                 showForm1: true,
//                 showForm2: false,
//                 showForm3: false,
//                 showForm4: false,
//                 showForm5: false
//             })
//         }

//         if (e.target.value == "Shirt") {
//             this.setState({
//                 showForm1: false,
//                 showForm2: true,
//                 showForm3: false,
//                 showForm4: false,
//                 showForm5: false
//             })
//         }
//         if (e.target.value == "T-shirt") {
//             this.setState({
//                 showForm1: false,
//                 showForm2: false,
//                 showForm3: true,
//                 showForm4: false,
//                 showForm5: false
//             })
//         }
//         if (e.target.value == "Jacket") {
//             this.setState({
//                 showForm1: false,
//                 showForm2: false,
//                 showForm3: false,
//                 showForm4: true,
//                 showForm5: false
//             })
//         }
//         if (e.target.value == "Jeans") {
//             this.setState({
//                 showForm1: false,
//                 showForm2: false,
//                 showForm3: false,
//                 showForm4: false,
//                 showForm5: true
//             })
//         }
//     }
//     render() {
//         return (
//             <div className="row">
//                 <div className="col-lg-3 col-lg">
//                     <div className="mt-4 ml-5">
//                         <Dropdown open={this.state.open} toggle={this.toggle} group>
//                             <select className="" name="hospital_code" className="form-control text-success mt-3" onChange={(e) => { this.handleDrugCodeForm(e) }}>
//                                 <option value="1">Select Product name</option>
//                                 <option value="Paint">Paint</option>
//                                 <option value="Shirt">Shirt</option>
//                                 <option value="T-shirt">T-Shirt</option>
//                                 <option value="Jacket">Jacket</option>
//                                 <option value="Jeans">Jeans</option>
//                             </select>
//                         </Dropdown>
//                     </div>
//                 </div>

//                 <div className="col-lg-3 col-lg">
//                     <div className="mt-4 ml-5">
//                         {this.state.showForm1 &&
//                             <div>
//                                 <Card>
//                                     <h6 className="text-center">Paint</h6>
//                                     <CardImg top src={require('./pic/p.jpeg')} style={{ width: "100%", height: "300px" }} />
//                                     <Button onClick={this.addToCart} squared theme="success" className="">AddCard</Button>
//                                     <Button squared theme="info" >Rs.1200</Button>
//                                 </Card>
//                             </div>
//                         }
//                         {this.state.showForm2 &&
//                             <div>
//                                 <h6 className="text-center">Shirt</h6>
//                                 <CardImg top src={require('./pic/p.jpeg')} style={{ width: "100%", height: "300px" }} />
//                                 <Button squared theme="success" className="ml-5" id="popover-2" onClick={this.toggle}>AddCard</Button>&nbsp;&nbsp;
//                                 {/* <Button squared theme="info" >Rs.1200</Button> */}
//                                 <Popover placement="right" open={this.state.open} toggle={this.toggle} target="#popover-2">
//                                     <PopoverBody>
//                                         <Addcart></Addcart>
//                                     </PopoverBody>
//                                 </Popover>
//                             </div>
//                         }
//                         {this.state.showForm2 &&
//                             <div>
//                                 <h6 className="text-center">Shirt</h6>
//                                 <CardImg top src={require('./pic/p1.jpeg')} style={{ width: "100%", height: "300px" }} />
//                                 <Button squared theme="success" className="ml-5">AddCard</Button>&nbsp;&nbsp;
//                                 <Button squared theme="info" >Rs.1200</Button>
//                             </div>
//                         }
//                         {this.state.showForm2 &&
//                             <div>
//                                 <Card>
//                                     <h6 className="text-center">Shirt</h6>
//                                     <CardImg top src={require('./pic/p.jpeg')} style={{ width: "100%", height: "300px" }} />
//                                     <Button squared theme="success" className="">AddCard</Button>
//                                     <Button squared theme="info" >Rs.1200</Button>
//                                 </Card>
//                             </div>
//                         }
//                         {this.state.showForm3 &&
//                             <div>
//                                 <h6 className="text-center">T-Shirt</h6>
//                                 <CardImg top src={require('./pic/p.jpeg')} style={{ width: "100%", height: "300px" }} />
//                                 <Button squared theme="success" className="ml-5">AddCard</Button>&nbsp;&nbsp;
//                                 <Button squared theme="info" >Rs.1200</Button>
//                             </div>
//                         }
//                         {this.state.showForm4 &&
//                             <div>
//                                 <h6 className="text-center">Jacket</h6>
//                                 <CardImg top src={require('./pic/p.jpeg')} style={{ width: "100%", height: "300px" }} />
//                                 <Button squared theme="success" className="ml-5">AddCard</Button>&nbsp;&nbsp;
//                                 <Button squared theme="info" >Rs.1200</Button>
//                             </div>
//                         }
//                         {this.state.showForm5 &&
//                             <div>
//                                 <h6 className="text-center">Jeans</h6>
//                                 <CardImg top src={require('./pic/p1.jpeg')} style={{ width: "100%", height: "300px" }} />
//                                 <Button squared theme="success" className="ml-5">AddCard</Button>&nbsp;&nbsp;
//                                 <Button squared theme="info" >Rs.1200</Button>
//                             </div>
//                         }
//                     </div>
//                 </div>
//                 {/* <div className="col-lg-4 col-lg">
//                     <div className="mt-4 ml-5">
//                         {this.state.showForm1 &&
//                             <Card style={{ height: "350px", width: "300px" }}>
//                                 <h6 className="text-center">Paint</h6>
//                                 <CardImg top src="https://place-hold.it/300x200" />
//                                 <Button className="text-center ml-5" style={{ height: "50px", width: "100px" }}>AddCard</Button>
//                             </Card>
//                         }
//                         {this.state.showForm2 &&
//                             <Card style={{ height: "350px", width: "300px" }}>
//                                 <h6 className="text-center">Shirt</h6>
//                             </Card>
//                         }
//                         {this.state.showForm3 &&
//                             <Card style={{ height: "350px", width: "300px" }}>
//                                 <h6 className="text-center">T-Shirt</h6>
//                             </Card>
//                         }
//                         {this.state.showForm4 &&
//                             <Card style={{ height: "350px", width: "300px" }}>
//                                 <h6 className="text-center">Jacket</h6>
//                             </Card>
//                         }
//                         {this.state.showForm5 &&
//                             <Card style={{ height: "350px", width: "300px" }}>
//                                 <h6 className="text-center">Jeans</h6>
//                             </Card>
//                         }
//                     </div>
//                 </div> */}
//             </div>
//         )
//     }
// }
// export default Shop;