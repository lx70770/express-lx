import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ad from './component/ad/ad';
import Address from "./component/address/address";
import UserInfo from "./component/userinfo/userinfo";

import 'antd/dist/antd.css';

ReactDOM.render(
    <div>
        <Ad/>
        <Address/>
        <UserInfo/>
    </div>,
    document.getElementById('root'));
