import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Toggle extends React.Component {
	state = {
		on: false,
	}

	toggle = () => {
		this.setState({
			on: !this.state.on
		})
	}

	render() {
		return (
			<div className="lm-menu-mobile">
				{this.state.on && 
					<div className="lm-menu-mobile-box">
                        <Link onClick={this.toggle} className="navbar-item"  to="/">Home</Link>
                        <Link onClick={this.toggle} className="navbar-item" to="/sobre">Sobre</Link>
                        <Link onClick={this.toggle} className="navbar-item" to="/area-de-atuacao">Áreas de atuação</Link>
                        <Link onClick={this.toggle} className="navbar-item" to="/advogados">Advogados</Link>
                        <Link onClick={this.toggle} className="navbar-item" to="/noticias">Notícias</Link>
                        <Link onClick={this.toggle} className="navbar-item" to="/contatos">Contatos</Link>
                    </div>
				}
				<div className="lm-style-menu" onClick={this.toggle}>
				<div></div>
				<div></div>
				<div></div>
				</div>
			</div>
		)
	}
}

export default Toggle;