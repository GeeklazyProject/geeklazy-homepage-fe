import React from 'react'
import styles from './Home.module.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Nav from "../../components/nav/Nav";
import Resume from "../resume/Resume";
import Blog from "../blog/Blog";
import Footer from "../../components/footer/Footer";


const Home = () => {
    return(
        <BrowserRouter>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <div>GeekLazy</div>
                </div>
            </div>
            <div>
                <Nav infos={[{title:"个人简介", path:"/intros"}, {title:"个人博客", path:"/blogs"}, {title:"项目展示", path:"/projects"}]}/>
            </div>
            <div className={styles.content}>
                <Switch>
                    <Route path="/" component={Resume} exact/>
                    <Route path="/intros" component={Resume}/>
                    <Route path="/blogs" component={Blog}/>
                    <Route path="/projects"/>
                </Switch>
            </div>
            <div>

            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default Home;