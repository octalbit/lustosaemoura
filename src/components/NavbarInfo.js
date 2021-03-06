import React from 'react'
import './Navbarinfo.css';

import { Link } from 'react-router-dom';

export default function NavbarInfo() {
    return (
        <div className="navbar-info">
            <div className="container">
                <div className="content-navbar-info">
                    <div className="box-infos">
                        <div className="box-info">
                            <i className="fas fa-phone-alt"></i> <a target="blanck" href="http://api.whatsapp.com/send?1=pt_BR&phone=5586994694942">+55 86 9 9469-4942</a>
                        </div>
                        <div className="box-info">
                            <i className="fas fa-envelope"></i> <Link href="mailto:lustosamoura9@gmail.com">lustosaemoura@gmail.com</Link>
                        </div>
                        <div className="box-info">
                            <i className="fas fa-comment"></i> <Link to="/contatos">Solicite uma consulta</Link>
                        </div>
                    </div>
                    <div className="box-social">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
