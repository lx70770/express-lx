import React from 'react';
import {Select, Input} from 'antd';
import './userinfo.css';

const Option = Select.Option;

class UserInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            building: '',
            room: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({
            building: value
        })
    }

    render() {
        const styleObject = {
            width: '100%'
        };
        return (
            <div className="wrapper">
                <div className="address-select">
                    <span>选择您的楼栋:</span>
                    <Select
                        placeholder="请选择楼栋(德园小区)"
                        style={styleObject}
                        onChange={this.handleChange}
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
                    <div className="WhiteSpace"></div>
                    <div className="WhiteSpace"></div>
                    <span>输入您的寝室号:</span>
                    <Input placeholder="输入您的寝室号(eg: 520)"/>
                    <div className="WhiteSpace"></div>
                    <div className="WhiteSpace"></div>
                    <span>输入您的手机号码:</span>
                    <Input placeholder="输入您的手机号码(eg: 520)"/>
                </div>
            </div>
        )
    }
}

export default UserInfo;