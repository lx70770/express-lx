import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Ad from '../../component/ad/ad';

import './info-concer-page.css';

@withRouter
@connect(
    state => state,
    null
)
class InfoConcer extends React.Component{

    constructor(props) {
        super(props);
        this.handleLastStep = this.handleLastStep.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleLastStep() {
        this.props.history.goBack();
    }

    handleSubmit() {
        console.log(this.props.userinfo)
    }

    render() {
        const {building, room, phoneNumber, arriveTime, goodsNumber} = this.props.userinfo;
        return(
            <div>
                <Ad/>
                <div className="address-wrapper1">
                    <div className="address-top1">
                        <span>信息填写完成,</span>
                        <br/>
                        <span>请核对你的信息。</span>
                    </div>
                </div>
                <div className="confirm-info">
                   <div className="info-list">
                       <span>楼栋: {building}</span><br/>
                       <span>寝室号: {room}</span><br/>
                       <span>手机号: {phoneNumber}</span><br/>
                       <span>取件号: {goodsNumber}</span><br/>
                       <span>送达时间: {arriveTime}</span>
                   </div>
                </div>
                <div className="button-bottom">
                    <div onClick={this.handleLastStep} className="button-left">
                        <span>上一步</span>
                    </div>
                    <div onClick={this.handleSubmit} className="button-right">
                        <span>提交</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoConcer;