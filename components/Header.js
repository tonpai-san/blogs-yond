import React, { Component } from "react";
import Link from "next/link";


// const Header = () => {
//     return <h1>HEADER..</h1>
// }

class Header extends Component {

    constructor (props) {
        super(props);
        this.state = {date : new Date()};
        
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentDidUpdate() {
        
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // this.state = {date : new Date()};
        this.setState({date : new Date()});
    }
    render() {

        const style = {height : 70};

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1 className="text-warning"><img style={style} src="http://dlucky.me/blog/logo.png" alt="" /> บทความ</h1>
                    </div>
                    <div className="col-md-4 text-right mt-4">
                        <h5 className="text-muted">{this.state.date.toLocaleTimeString()} TIME</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item title"><Link href="/">หน้าหลัก</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title"><Link href="/about">เกี่ยวกับเรา</Link></li>
                    
                        </ul>
                    </div>
                    
                </div>
                <hr />
            </div>
        );
    }
}

export default Header;