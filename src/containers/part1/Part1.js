import React, { Component } from 'react';

import { Typography, Button } from 'antd';
const { Title } = Typography;

class Part1 extends Component {
    constructor() {
        super();
        this.state = {
            text: null
        }
    }

    onclick = (text) => {
        if (this.state.text === null && text === this.props.answer) {
            this.props.addScore();
        }
        this.setState({
            text
        })
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