import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {formatStylesa} from '../../support/CommonUtils';
import styles from './Nav.module.scss';

type propTypes = {
    title: string;
    path: string;
    key: number;
    selected: boolean;
    onItemSelected: Function;
};

type states = {
    classes: string;
    selected: boolean;
};


class NavItem extends Component<propTypes, states> {
    static defaultProps = {
        selected: false,
    }

    componentWillReceiveProps(nextProps:any) {
        let myStyles: string = styles.navItem
        if (nextProps.selected) {
            myStyles = formatStylesa(styles.navItem, styles.navItemSelected)
        }
        this.state = {
            classes: myStyles,
            selected: nextProps.selected
        }
    }

    constructor(props: any) {
        super(props);
        this.componentWillReceiveProps(props)
    }



    onMouseOver(e: any) {
        this.setState({
            classes: formatStylesa(this.state.classes, styles.navItemActive)
        })
    }

    onMouseOut(e: any) {
        let myStyles: string = styles.navItem
        if (this.props.selected) {
            myStyles = formatStylesa(styles.navItem, styles.navItemSelected)
        }
        this.setState({
            classes: myStyles
        })
    }

    onClick(e: any) {
        this.props.onItemSelected(this.props.title)
    }

    render() {
        return (
            <li className={this.state.classes}
                onClick={this.onClick.bind(this)}
                onMouseOver={this.onMouseOver.bind(this)}
                onMouseOut={this.onMouseOut.bind(this)}>
                <Link className={styles.nativeLink} to={this.props.path}>{this.props.title}</Link>
            </li>
        );
    }
}

// function onMouseOver(e: any) {
//     console.log(e)
// }
//
// function onClick(e: any) {
//     console.log("click")
//
//     console.log(e)
// }

// const NavItem = (props: IProps) => {
//     return (
//         <li onClick={onClick} onMouseOver={onMouseOver} className={styles.navItem}>{props.title}</li>
//     );
// }
export default NavItem
