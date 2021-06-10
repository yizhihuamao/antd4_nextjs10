import React from 'react';
import Head from 'next/head';
import { Button } from 'antd';
import styles from './index.less';

const Home = () => (
    <>
        <Head>
            <title>Home</title>
        </Head>
        <div className={styles.btn}>
            <Button>我是按钮，测试antd</Button>
        </div>
    </>
);

export default Home;
