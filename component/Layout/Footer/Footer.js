import Link from 'next/link';

const Footer = (props) => {
    return (
        <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left"
                 style={{backgroundColor: "#346ecf", padding: '20px', color: 'white'}}>
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="col-md-4 mb-md-0 mb-3" style={{margin: '0 auto', width: '100px'}}>
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a>Link 1</a>
                                </li>
                                <li>
                                    <a>Link 2</a>
                                </li>
                                <li>
                                    <a>Link 3</a>
                                </li>
                                <li>
                                    <a>Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-3" style={{margin: '0 auto', width: '100px'}}>
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a>Link 1</a>
                                </li>
                                <li>
                                    <a>Link 2</a>
                                </li>
                                <li>
                                    <a>Link 3</a>
                                </li>
                                <li>
                                    <a>Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-3" style={{margin: '0 auto', width: '100px'}}>
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a>Link 1</a>
                                </li>
                                <li>
                                    <a>Link 2</a>
                                </li>
                                <li>
                                    <a>Link 3</a>
                                </li>
                                <li>
                                    <a>Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3"
                 style={{backgroundColor: '#252525', color: 'white'}}
            >© 2019 Copyright:
                <Link href={'/'}><a style={{color: 'white'}}> Rento.com</a></Link>
            </div>
        </footer>
    );
};

export default Footer;