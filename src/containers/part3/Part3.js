import React, { Component } from 'react';

import { Typography } from 'antd';

import { Part1 } from '..';

const { Paragraph } = Typography;

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

    render() {
        const { passage } = this.props
        const { questions } = this.state
        return (
            <div style={{ display: 'flex', flexDirection: 'column', background: "#FFF", padding: 20, margin: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'column', background: "#FFF", padding: 20, margin: 10, position: 'sticky', top: 0, zIndex: 999, fontSize: window.fontSize }}>
                    {passage.map((item, index) => <Paragraph key={"passage_" + index}>{item}</Paragraph>)}
                </div>
                {questions.map((item, index) => <Part1 key={index} addScore={this.props.addScore} {...item} />)}

            </div>
        )
    }
}

export default Part3;