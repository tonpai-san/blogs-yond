import React , {Component} from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";


class Layout extends Component {
    render () {
        const { children, title="เฮลตี้ คาเฟ่ บล๊อกเกอร์"} = this.props;
        return (
            <div>
                <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />


                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/static/css/style.css" />

                </Head>
                <Header />
                {children}
                <Footer />
            </div>
        )
    }
}

export default Layout;