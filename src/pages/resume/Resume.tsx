import React, {useCallback, useState} from 'react';
import {getExps, getSkills, getProjects} from '../../services/Service';
import {RouteComponentProps} from 'react-router-dom';
import styles from './Resume.module.scss';

const Basic = () => {
    return (
        <div className={styles.basic}>
            <div className={styles.avatar}>
                <div className={styles.circleImg}>
                    <img src="https://www.lagou.com/i/image2/M00/31/A8/CgotOVpAK1iAVOtAAAAzE2qRu4c682.jpg"/>
                </div>
            </div>
            <div className={styles.brief}>Java开发 | 从业6年</div>
            <div className={styles.intro}>对IT技术充满兴趣和好奇心，热衷探索各种新知识。优秀的学习能力和适应能力</div>
        </div>
    )
}

const Project = (props: any) => {
    let radio = props.data.point*10
    const divStyle: React.CSSProperties ={width:radio+"%"}
    return (
        <div>
            <div className={styles.expBasic}>
                <div className={styles.expDuration}>
                    {props.data.startTime}-{props.data.endTime}
                </div>
                <div className={styles.expCompany}>
                    {props.data.name}
                </div>
            </div>
            <div className={styles.expDesc}>
                {props.data.desc}
            </div>
            <div className={styles.expAchieve}>
                {props.data.achievement}
            </div>
        </div>
    )
}

const Projects = () => {
    // 获取工作经验
    let data = getProjects();
    return (
        <div className={styles.skills}>
            <div className={styles.resumeTitle}>项目经历</div>
            {data.map((item, index) => <Project key={index} data={item}/>)}
        </div>
    )
}

const Experience = (props: any) => {
    return (
        <div>
            <div className={styles.expBasic}>
                <div className={styles.expDuration}>
                    {props.data.startTime}-{props.data.endTime}
                </div>
                <div className={styles.expCompany}>
                    {props.data.company}
                </div>
                <div className={styles.expInfo}>
                    {props.data.department} | {props.data.position}
                </div>
            </div>
            <div className={styles.expDesc}>
                {props.data.desc}
            </div>
            <div className={styles.expAchieve}>
                {props.data.achievement}
            </div>
        </div>
    )
}

const Experiences = () => {
    // 获取工作经验
    let data = getExps();
    return (
        <div>
            <div className={styles.resumeTitle}>工作经验</div>
            {data.map((item, index) => <Experience key={index} data={item}/>)}
        </div>
    )
}

const Skill = (props: any) => {
    let radio = props.data.point*10
    const divStyle: React.CSSProperties ={width:radio+"%"}
    return (
        <div className={styles.skill}>
            <div className={styles.skillName}>{props.data.name}</div>
            <div className={styles.skillPointDefault}>
                <div style={divStyle} className={styles.skillPointActual}/>
            </div>
            <div className={styles.skillPoint}>{props.data.point}分</div>
        </div>
    )
}

const Skills = () => {
    // 获取工作经验
    let data = getSkills();
    return (
        <div className={styles.skills}>
            <div className={styles.resumeTitle}>相关技术栈</div>
            {data.map((item, index) => <Skill key={index} data={item}/>)}
        </div>
    )
}
const Resume = () => {
    return (
        <div>
            <Basic/>
            <Skills/>
            <Experiences/>
            <Projects/>
        </div>
    )
}
export default Resume
