import React from 'react'

import { Link } from 'react-router-dom';

export default function NavbarInfo() {
    return (
        <div className="navbar-info">
            <div className="container">
                <div className="content-navbar-info">
                    <div className="box-infos">
                        <div className="box-info">
                            <i class="fas fa-phone-alt"></i> <Link to="http://api.whatsapp.com/send?1=pt_BR&phone=5586994694942">+55 86 9 9469-4942</Link> 
                        </div>
                        <div className="box-info">
                            <i class="fas fa-envelope"></i> <Link href="">lustosaemoura@gmail.com</Link> 
                        </div>
                        <div className="box-info">
                            <i class="fas fa-comment"></i> <Link href="">Solicite uma consulta</Link> 
                        </div>
                    </div>
                    <div className="box-social">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}