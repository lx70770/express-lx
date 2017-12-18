import React from 'react';
import {Select, InputNumber} from 'antd'
import {connect} from 'react-redux';
import {confirmSuccess} from "../../redux/redux";
import {withRouter} from 'react-router-dom';
import classnames from 'classnames';

import './userinfo.css';

const Option = Select.Option;

@withRouter
@connect(
    state => state.userinfo,
    {confirmSuccess}
)
class UserInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            building: '',
            room: '',
            phoneNumber: '',
            goodsNumber: '',
            arriveTime: '',
            labelChecked: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleChange(key, value) {
        this.setState({
            [key]: value
        });
    }

    handleNext() {
        console.log(this.state);
        this.props.confirmSuccess(this.state);
        this.props.history.push('/infopage')
    }

    handleSelect(event) {
        this.setState({
            arriveTime: event.target.innerHTML,
            labelChecked: true
        });

    }

    render() {
        const styleObject = {
            width: '100%',
            marginBottom: 15
        };

        const labelClass = classnames({
            'checked': this.state.labelChecked
        });

        return (
            <div className="wrapper">
                <div className="address-select">
                    <span>选择您的楼栋:</span>
                    <Select
                        placeholder="请选择楼栋(德园小区)"
                        style={styleObject}
                        onChange={value => {
                            this.handleChange('building', value)
                        }}
                    >
                        <Option value="一栋">一栋</Option>
                        <Option value="二栋">二栋</Option>
                        <Option value="三栋">三栋</Option>
                        <Option value="四栋">四栋</Option>
                        <Option value="五栋">五栋</Option>
                        <Option value="六栋">六栋</Option>
                        <Option value="七栋">七栋</Option>
                        <Option value="八栋">八栋</Option>
                        <Option value="九栋">九栋</Option>
                        <Option value="十栋">十栋</Option>
                        <Option value="十一栋">十一栋</Option>
                        <Option value="十二栋">十二栋</Option>
                        <Option value="十三栋">十三栋</Option>
                        <Option value="十四栋">十四栋</Option>
                        <Option value="十五栋">十五栋</Option>
                    </Select>
                    <span>输入您的寝室号:</span>
                    <InputNumber
                        style={styleObject}
                        type="number"
                        placeholder="输入您的寝室号"
                        onChange={value => {
                            this.handleChange('room', value)
                        }}
                    />
                    <span>输入您的手机号码:</span>
                    <InputNumber
                        style={styleObject}
                        type="number"
                        placeholder="输入您的手机号码"
                        onChange={value => {
                            this.handleChange('phoneNumber', value)
                        }}
                    />
                    <span>输入您的取件码:</span>
                    <InputNumber
                        style={styleObject}
                        type="text"
                        placeholder="输入您的取件码"
                        onChange={value => {
                            this.handleChange('goodsNumber', value)
                        }}
                    />
                    <div className="arrive-time">
                        <div>
                            <label className={labelClass} onClick={this.handleSelect}
                                   htmlFor="8:00~12:00">8:00~12:00</label>
                            <input name="arrive-time" type="radio" id="8:00~12:00"/>
                        </div>
                        <div>
                            <label className={labelClass} onClick={this.handleSelect}
                                   htmlFor="12:00~16:00">12:00~16:00</label>
                            <input name="arrive-time" type="radio" id="12:00~16:00"/>
                        </div>
                        <div>
                            <label className={labelClass} onClick={this.handleSelect}
                                   htmlFor="16:00~20:00">16:00~20:00</label>
                            <input name="arrive-time" type="radio" id="16:00~20:00"/>
                        </div>
                        <div>
                            <label className={labelClass} onClick={this.handleSelect}
                                   htmlFor="20:00~23:00">20:00~23:00</label>
                            <input name="arrive-time" type="radio" id="20:00~23:00"/>
                        </div>
                    </div>

                </div>
                <div className="next-button" onClick={this.handleNext}>
                    <span>下一步</span>
                </div>
            </div>
        )
    }
}

export default UserInfo;