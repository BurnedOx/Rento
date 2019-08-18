import Head from 'next/head';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = (props) => {

    return (
        <React.Fragment>
            <Head>
                <title>Welcome Rento</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            </Head>
            <div>
                <div style={{position: 'fixed', zIndex: '5000', width: '100%'}}>
                    <Header/>
                </div>
                <main className={"container"} style={{paddingTop: '70px', minHeight: '60vh'}}>
                    {props.children}
                </main>
                <div><Footer/></div>
            </div>
        </React.Fragment>
    );
};
export default Layout;