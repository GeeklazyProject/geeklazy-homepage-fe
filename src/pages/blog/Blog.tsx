import React, {useCallback, useState} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {getArticles} from '../../services/Service';
import styles from './Blog.module.scss';

const Articles = () => {
    const Article = (props: any) => {
        return <div className={styles.article}>
            <div>{props.data.title}</div>
            <div>{props.data.created}</div>
            <div>{props.data.desc}</div>
        </div>
    }

    let articles = getArticles()

    return <div className={styles.articles}>
        {articles.map((item, index) => <Article key={index} data={item}/>)}
    </div>
}

const Blog = () => {
    return (
        <div>
            <Articles/>
        </div>
    )
}

export default Blog;