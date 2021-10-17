import React, { Component } from 'react';

import { Typography, Button } from 'antd';

import './styles.css'

const { Title } = Typography;


class Part2 extends Component {
    constructor() {
        super();
        this.state = {
            text: null,
            question: ""
        }
    }


    onclick = (text) => {
        if (text === this.props.answer) {
            this.props.addScore();
        }

        this.setState({
            text
        })
    }

    render() {
        const { question, A, B, C, D, answer } = this.props
        const { text } = this.state
        let temp = question;

        temp = temp.replace(new RegExp(`\\b${A}\\b`), `<span class="underline">${A}</span>`)
        temp = temp.replace(new RegExp(`\\b${B}\\b`), `<span class="underline">${B}</span>`)
        temp = temp.replace(new RegExp(`\\b${C}\\b`), `<span class="underline">${C}</span>`)
        temp = temp.replace(new RegExp(`\\b${D}\\b`), `<span class="underline">${D}</span>`)
        return (
            <div className="part2" style={{ display: 'flex', flexDirection: 'column', background: "#FFF", padding: 20, margin: 10 }}>
                <Title level={4}>
                    <div dangerouslySetInnerHTML={{ __html: temp }}></div>
                </Title>

                <div style={{ marginTop: 10, display: 'flex', justifyContent: 'flex-start' }}>
                    <Button disabled={text && A !== answer} onClick={() => this.onclick(A)} danger={text && A === answer} type="primary">A</Button>
                    <Button disabled={text && B !== answer} style={{ marginLeft: 10 }} onClick={() => this.onclick(B)} danger={text && B === answer} type="primary">B</Button>
                    <Button disabled={text && C !== answer} style={{ marginLeft: 10 }} onClick={() => this.onclick(C)} danger={text && C === answer} type="primary">C</Button>
                    <Button disabled={text && D !== answer} style={{ marginLeft: 10 }} onClick={() => this.onclick(D)} danger={text && D === answer} type="primary">D</Button>
                </div>

            </div>
        )
    }
}

export default Part2