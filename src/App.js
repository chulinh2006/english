import React from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb } from 'antd';

import 'antd/dist/antd.css';

import { Part1, Part2, Part3 } from './containers'

import part1 from './resources/part1.json'
import part2 from './resources/part2.json'
import part3 from './resources/part3.json'


const { Header, Content, Footer } = Layout;


const App = () => (
    <Layout style={{ alignItems: 'center' }}>
        <Content style={{ width: 1000 }}>
            <h1>PHẦN 1: CẤU TRÚC VÀ CÁCH DIỄN ĐẠT</h1>
            <h3>CÂU HỎI 1-20: Chọn đáp án thích hợp (A, B, C hoặc D) để hoàn thành các câu sau.</h3>
            {part1.map(item => {
                return <Part1 {...item} />
            })}
            <h3>CÂU HỎI 21-50: Chọn phần gạch chân được đánh dấu theo thứ tự A, B, C và D có chứa lỗi sai.</h3>
            {part2.map(item => {
                return <Part2 {...item} />
            })}
            <h1>PHẦN 2: ĐỌC HIỂU</h1>
            <h3>CÂU HỎI 21-50: Chọn phần gạch chân được đánh dấu theo thứ tự A, B, C và D có chứa lỗi sai.</h3>
            {part3.map(item => {
                return <Part3 {...item} />
            })}
        </Content>
    </Layout>
)

export default App;
