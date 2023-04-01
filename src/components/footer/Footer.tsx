import React, {useCallback, useState} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import styles from './Footer.module.scss'

interface IProps {
}

const Footer = (props: IProps) => {
    return (
        <div className={styles.footer}>
            <div>
                <strong><a href="//www.geeklazy.com/" target="_blank">极懒计划 geeklazy.com</a></strong><br/>
                Copyright © 2021 All Rights Reserved.<br/>
                备案号：<a href="http://beian.miit.gov.cn" rel="noffolw" target="_blank">粤ICP备19084699号-1</a>
            </div>
        </div>);
}

export default Footer;