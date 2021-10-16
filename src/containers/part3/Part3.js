import React, { Component } from 'react';

import { Typography, Button, notification } from 'antd';

import { Part1 } from '..';

const { Title, Paragraph } = Typography;

class Part3 extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            questions: []
        }
    }
    componentDidMount() {
        const { questions } = this.props;
        const randomQuestions = questions.sort(() => Math.random() - 0.5)
        this.setState({
            questions: randomQuestions
        })
        window.fontSize = 18
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props.question !== nextProps.question) {
            this.setState({
                text: null
            })
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
        const { passage, A, B, C, D } = this.props
        const { questions } = this.state
        const { text } = this.state
        return (
            <div style={{ display: 'flex', flexDirection: 'column', background: "#FFF", padding: 20, margin: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'column', background: "#FFF", padding: 20, margin: 10, position: 'sticky', top: 0, zIndex: 999, fontSize: window.fontSize }}>
                    {passage.map(item => <Paragraph>{item}</Paragraph>)}
                </div>
                {questions.map(item => <Part1 addScore={this.props.addScore} {...item} />)}

            </div>
        )
    }
}

export default Part3;