import React from 'react';

import './address.css';

class Address extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            address: '知园小区菜鸟驿站'
        }
    }

    render() {
        return (
            <div className="address-wrapper">
                <div className="address-top">
                    <span>你取件的地方在:</span>
                    <div>
                        <span>{this.state.address}</span>
                    </div>
                </div>
                <div className="address-bottom">
                    <span className="address-bottom-left">快递到寝签收</span>
                    <span className="address-bottom-right">首单免费</span>
                </div>
            </div>
        )
    }
}

export default Address;