import React from 'react';
import {
    Card,
    CardImg
} from 'shards-react';

class Addcart extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-3 col-lg"></div>
                <div className="col-lg-3 col-lg"></div>
                <div className="col-lg-3 col-lg">
                    <div className="mt-4 ml-5">
                        <Card>
                            <h6 className="text-center">Paint</h6>
                            {/* <CardImg top src={require('./pic/p.jpeg')} style={{ width: "100%", height: "300px" }} /> */}
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
export default Addcart;

