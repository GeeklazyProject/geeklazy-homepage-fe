import React from 'react';
import styles from './Nav.module.scss';
import NavItem from './NavItem';

type NavInfo = {
    title: string;
    path: string;
}

type propTypes = {
    infos: NavInfo[];
};

type states = {
    classes: string
    selected: string;
};

class Nav extends React.Component<propTypes, states>{
    static defaultProps = {

    };

    constructor(props: any) {
        super(props);
        this.state = {
            classes: styles.nav,
            selected:'个人简介'
        }
    }

    onItemSelected(title: string) {
        this.setState({
            selected: title
        })
    }

    render() {
        let infos = Array.from(this.props.infos)
        let tmps = []
        tmps = infos.map((item, index) => {
            return <NavItem onItemSelected={this.onItemSelected.bind(this)} key={index} path={item.path} title={item.title} selected={this.state.selected == item.title}/>
        })
        return (
            <ul className={this.state.classes}>
                {tmps}
            </ul>
        );
    }
}

export default Nav
