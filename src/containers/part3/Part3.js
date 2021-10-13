import React, { Component } from 'react';

import { Typography, Button, notification } from 'antd';

import { Part1 } from '..';

const { Title, Paragraph } = Typography;

class Part3 extends Component {
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
        const { passage, questions, A, B, C, D, answer } = this.props
        const { text } = this.state
        return (
            <div style={{ display: 'flex', flexDirection: 'column', background: "#FFF", padding: 20, margin: 10 }}>
                {passage.map(item => <Paragraph>{item}</Paragraph>)}
                {questions.map(item => <Part1 {...item} />)}

            </div>
        )
    }
}

export default Part3;