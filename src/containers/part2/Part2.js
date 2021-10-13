import React, { Component } from 'react';

import { Typography, Button, notification } from 'antd';

import './styles.css'

const { Title } = Typography;


class Part2 extends Component {
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
                    <Button onClick={() => this.onclick(A)} danger={text === A} type="primary">A</Button>
                    <Button style={{ marginLeft: 10 }} onClick={() => this.onclick(B)} danger={text === B} type="primary">B</Button>
                    <Button style={{ marginLeft: 10 }} onClick={() => this.onclick(C)} danger={text === C} type="primary">C</Button>
                    <Button style={{ marginLeft: 10 }} onClick={() => this.onclick(D)} danger={text === D} type="primary">D</Button>
                </div>

            </div>
        )
    }
}

export default Part2