import React from 'react';

import Ad from '../../component/ad/ad';
import Address from "../../component/address/address";
import UserInfo from "../../component/userinfo/userinfo";

class FormPage extends React.Component{
    render() {
        return(
            <div>
                <Ad/>
                <Address/>
                <UserInfo/>
            </div>
        )
    }
}

export default FormPage;