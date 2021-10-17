import React, { Component } from 'react';

import { Layout, Statistic, Card, notification, Button, Table } from 'antd';
import { SketchOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';

import { Part1, Part2, Part3 } from './containers'

import P1_2021 from './resources/part1/2021.json'
import P1_2016 from './resources/part1/2016.json'
import P1_2005 from './resources/part1/2005.json'

import P2_2021 from './resources/part2/2021.json'
import P2_2016 from './resources/part2/2016.json'
import P2_2005 from './resources/part2/2005.json'

import P3_2021 from './resources/part3/2021.json'
import P3_2005 from './resources/part3/2005.json'
import P3_2016 from './resources/part3/2016.json'

const part1 = [P1_2021, P1_2016, P1_2005]
const part2 = [P2_2021, P2_2016, P2_2005]
const part3 = [P3_2021, P3_2016, P3_2005]

const tests = [
    {
        name: "2021",
        part1: P1_2021,
        part2: P2_2021,
        part3: P3_2021,
        socre: 0,
        highScore: 0
    },
    {
        name: "2016",
        part1: P1_2016,
        part2: P2_2016,
        part3: P3_2016,
        socre: 0,
        highScore: 0
    },
    {
        name: "2005",
        part1: P1_2005,
        part2: P2_2005,
        part3: P3_2016,
        socre: 0,
        highScore: 0
    }
]

const { Content } = Layout;
const { Countdown } = Statistic;


class App extends Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            loadding: true,
            time: 0,
            dataSource: [],
            randomTest: [],
            item: null
        }
    }

    componentDidMount() {
        const randomTest = localStorage.getItem('randomTest');
        if (randomTest) {
            this.setState({
                dataSource: JSON.parse(randomTest)
            })
        } else {
            localStorage.setItem('randomTest', JSON.stringify(tests));
            this.setState({
                dataSource: tests
            })
        }
    }
    columns = [
        {
            title: 'Tên bài',
            dataIndex: 'name',
            width: '30%',
            editable: true,
        },
        {
            title: 'Điểm cao nhất',
            dataIndex: 'highScore',
        },
        {
            title: 'Điểm',
            dataIndex: 'socre',
        },
        {
            title: 'Chức năng',
            dataIndex: 'operation',
            render: (_, item) => {
                return <Button type="primary" onClick={() => this.start(item)}>Bắt đầu</Button>
            }
        },
    ]

    handleAdd = () => {
        const { dataSource } = this.state;

        const part1_q = part1.sort(() => Math.random() - 0.5)[0];
        const part2_q = part2.sort(() => Math.random() - 0.5)[0];
        const part3_q = part3.sort(() => Math.random() - 0.5)[0];
        const randomPart1 = part1_q.sort(() => Math.random() - 0.5)
        const randomPart2 = part2_q.sort(() => Math.random() - 0.5)
        const randomPart3 = part3_q.sort(() => Math.random() - 0.5)

        const newData = {
            name: "random test " + dataSource.length,
            part1: randomPart1,
            part2: randomPart2,
            part3: randomPart3,
            socre: 0,
            highScore: 0
        };

        const data = [...dataSource, newData];

        this.setState({
            dataSource: data,
        });
        localStorage.setItem('randomTest', JSON.stringify(data));
    };

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

    start = (item) => {
        this.setState({
            loadding: false,
            time: Date.now() + 4 * 30 * 60 * 1000,
            item,
            score: 0
        })
    }
    end = () => {
        const { item, dataSource, score } = this.state;
        const test = dataSource.find(p => p.name === item.name);
        if (score > test.highScore) test.highScore = score
        test.score = score;

        this.setState({
            loadding: true,
            dataSource: Array.from(dataSource)
        })
        localStorage.setItem('randomTest', JSON.stringify(dataSource));
    }


    render() {
        const { score, loadding, time, dataSource, item } = this.state;


        if (loadding) {
            return (
                <Layout style={{ height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 800 }}>
                        <Button
                            onClick={this.handleAdd}
                            type="primary"
                            style={{
                                marginBottom: 16,
                            }}
                        >
                            Add a row
                        </Button>
                        <Table
                            rowKey="name"
                            bordered
                            dataSource={dataSource}
                            columns={this.columns}
                        />
                    </div>
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
                        <Button type="primary" danger onClick={this.end}>Nộp bài</Button>
                    </Card>
                    {/* <Card>
                        <Button type="primary" onClick={this.start}>Đổi đề</Button>
                    </Card> */}
                </div>

                <Content style={{ width: 1000 }}>
                    <h1>PHẦN 1: CẤU TRÚC VÀ CÁCH DIỄN ĐẠT</h1>
                    <h3>CÂU HỎI 1-20: Chọn đáp án thích hợp (A, B, C hoặc D) để hoàn thành các câu sau.</h3>
                    {item.part1.map((item, index) => {
                        return <Part1
                            key={"parrt1_" + index}
                            addScore={this.addScore}
                            question={item.question}
                            A={item.A}
                            B={item.B}
                            C={item.C}
                            D={item.D}
                            answer={item.answer} />
                    })}
                    <h3>CÂU HỎI 21-50: Chọn phần gạch chân được đánh dấu theo thứ tự A, B, C và D có chứa lỗi sai.</h3>
                    {item.part2.map((item, index) => {
                        return <Part2
                            key={"parrt1_" + index}
                            addScore={this.addScore}
                            {...item}
                        />
                    })}
                    <h1>PHẦN 2: ĐỌC HIỂU</h1>
                    <h3>CÂU HỎI 21-50: Chọn phần gạch chân được đánh dấu theo thứ tự A, B, C và D có chứa lỗi sai.</h3>
                    {item.part3.map((item, index) => {
                        return <Part3
                            key={"parrt1_" + index}
                            addScore={this.addScore}
                            {...item}
                        />
                    })}
                </Content>
            </Layout>
        )
    }
}

export default App;
