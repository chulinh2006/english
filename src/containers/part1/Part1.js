import React, { Component } from 'react';

import { Typography, Button, notification } from 'antd';
const { Title } = Typography;

class Part1 extends Component {
    constructor() {
        super();
        this.state = {
            text: null
        }
    }

    componentDidMount() {
        this.setState({
            text: null
        })
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
        if (this.state.text === null && text === this.props.answer) {
            this.props.addScore();

            description = "Chúc mừng bạn đã chọn được đáp án chính xác !^^"
        }

        this.setState({
            text
        })
        // notification.open({
        //     message: 'Thông báo',
        //     description
        // });
    }

    render() {
        const { question, A, B, C, D, answer } = this.props
        const { text } = this.state
        return (
            <div style={{ display: 'flex', flexDirection: 'column', background: "#FFF", padding: 20, margin: 10 }}>
                <Title level={4}>{question}</Title>

                <div style={{ marginTop: 10 }}>
                    <Button disabled={text && A !== answer} onClick={() => this.onclick(A)} danger={text && A === answer} type="primary">A</Button>
                    <span className="left">{A}</span>
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button disabled={text && B !== answer} onClick={() => this.onclick(B)} danger={text && B === answer} type="primary">B</Button>
                    <span className="left">{B}</span>
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button disabled={text && C !== answer} onClick={() => this.onclick(C)} danger={text && C === answer} type="primary">C</Button>
                    <span className="left">{C}</span>
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button disabled={text && D !== answer} onClick={() => this.onclick(D)} danger={text && D === answer} type="primary">D</Button>
                    <span className="left">{D}</span>
                </div>
            </div>
        )
    }
}

export default Part1;