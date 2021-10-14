import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Layout, Statistic, Card, notification, Button } from 'antd';
import { SketchOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';

import { Part1, Part2, Part3 } from './containers'

import P1_2021 from './resources/part1/2021.json'
import P1_2016 from './resources/part1/2016.json'
import P1_2005 from './resources/part1/2005.json'
import P2_2021 from './resources/part2/2021.json'
import P2_2016 from './resources/part2/2016.json'
import P2_2005 from './resources/part2/2005.json'
import part3 from './resources/part3.json'

const part1 = [P1_2021, P1_2016, P1_2005]
const part2 = [P2_2021, P2_2016, P2_2005]

const { Content } = Layout;
const { Countdown } = Statistic;

const deadline = Date.now() + 2 * 60 * 60 * 1000;

class App extends Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            loadding: true,
            time: 0
        }
    }
    onFinish = () => {
        notification.open({
            message: 'Thông báo',
            description: "Hết thời gian làm bài !^^"
        });
    }

    addScore = () => {
        const { score } = this.state;

        this.setState({
            score: score + 1
        })
    }

    start = () => {
        const part1_q = part1.sort(() => Math.random() - 0.5)[0];
        const part2_q = part1.sort(() => Math.random() - 0.5)[0];
        const randomPart1 = part1_q.sort(() => Math.random() - 0.5)
        const randomPart2 = part2_q.sort(() => Math.random() - 0.5)

        this.setState({
            loadding: false,
            time: Date.now() + 4 * 30 * 60 * 1000,
            randomPart1,
            randomPart2,
            score: 0
        })
    }


    render() {
        const { score, loadding, time, randomPart1, randomPart2 } = this.state;


        if (loadding) {
            return (
                <Layout style={{ alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
                    <Card>
                        <h1>Điểm {score} </h1>
                        <Button type="primary" onClick={this.start}>Bắt đầu</Button>
                    </Card>
                </Layout>
            )
        }
        return (
            <Layout style={{ alignItems: 'center' }}>
                <div style={{ position: "fixed", top: 50, left: 50 }} >
                    <Card>
                        <Countdown title="Thời gian làm bài" value={time} onFinish={this.onFinish} />
                    </Card>
                    <Card>
                        <Statistic title="Điểm" value={score} prefix={<SketchOutlined />} />
                    </Card>
                    <Card>
                        <Button type="primary" danger onClick={() => this.setState({ loadding: true })}>Nộp bài</Button>
                    </Card>
                    <Card>
                        <Button type="primary" onClick={this.start}>Đổi đề</Button>
                    </Card>
                </div>

                <Content style={{ width: 1000 }}>
                    <h1>PHẦN 1: CẤU TRÚC VÀ CÁCH DIỄN ĐẠT</h1>
                    <h3>CÂU HỎI 1-20: Chọn đáp án thích hợp (A, B, C hoặc D) để hoàn thành các câu sau.</h3>
                    {randomPart1.map(item => {
                        return <Part1 addScore={this.addScore} {...item} />
                    })}
                    <h3>CÂU HỎI 21-50: Chọn phần gạch chân được đánh dấu theo thứ tự A, B, C và D có chứa lỗi sai.</h3>
                    {randomPart2.map(item => {
                        return <Part2 addScore={this.addScore} {...item} />
                    })}
                    <h1>PHẦN 2: ĐỌC HIỂU</h1>
                    <h3>CÂU HỎI 21-50: Chọn phần gạch chân được đánh dấu theo thứ tự A, B, C và D có chứa lỗi sai.</h3>
                    {part3.map(item => {
                        return <Part3 addScore={this.addScore} {...item} />
                    })}
                </Content>
            </Layout>
        )
    }
}

export default App;
