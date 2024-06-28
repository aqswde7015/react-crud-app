import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = (props) => {
    return (
        <div className="footer my-3">
        <div className="container">
            <div className="row">
                <div className="container showing d-flex justify-content-between">
                <div className="col-md-6 show-data">
                    <p>Hiển thị {props.data.length}/25 bản ghi</p>
                </div>

                <div className=" col-md-6 page-data d-flex justify-content-end">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href='/'>Trước</a></li>
                        <li className="page-item"><a className="page-link" href='/'>1</a></li>
                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                        <li className="page-item"><a className="page-link" href="/">4</a></li>
                        <li className="page-item"><a className="page-link" href="/">5</a></li>
                        <li className="page-item"><a className="page-link" href="/">Sau</a></li>
                      </ul>
                </div>
            </div>
           </div>
        </div>
    </div>
    );
};

export default Footer;