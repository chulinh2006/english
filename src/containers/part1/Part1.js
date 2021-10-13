import React, { Component } from 'react';

import { Typography, Button, notification } from 'antd';
const { Title } = Typography;

class Part1 extends Component {
    constructor() {
        super();
        this.state = {
            text: ""
        }
    }

    onclick = (text) => {
        let description = 'Bạn đã làm sai câu hỏi này, đề nghị chọn câu khác để chọn được đáp án đúng !^^'
        if (text === this.props.answer) {
            this.setState({
                text
            })
            description = "Chúc mừng bạn đã chọn được đáp án chính xác !^^"
        }

        notification.open({
            message: 'Thông báo',
            description
        });
    }

    render() {
        const { question, A, B, C, D, answer } = this.props
        const { text } = this.state
        return (
            <div style={{ display: 'flex', flexDirection: 'column', background: "#FFF", padding: 20, margin: 10 }}>
                <Title level={4}>{question}</Title>

                <div style={{ marginTop: 10 }}>
                    <Button onClick={() => this.onclick(A)} danger={text === A} type="primary">A</Button> <Button onClick={this.onclick} type="text">{A}</Button>
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button onClick={() => this.onclick(B)} danger={text === B} type="primary">B</Button>  <Button onClick={this.onclick} type="text">{B}</Button>
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button onClick={() => this.onclick(C)} danger={text === C} type="primary">C</Button> <Button onClick={this.onclick} type="text">{C}</Button>
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button onClick={() => this.onclick(D)} danger={text === D} type="primary">D</Button> <Button onClick={this.onclick} type="text">{D}</Button>
                </div>
            </div>
        )
    }
}

export default Part1;