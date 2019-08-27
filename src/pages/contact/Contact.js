import './Contact.css';
import React from 'react';
import TitlePage from '../../components/TitlePage';
import FormSendEmail from '../../components/FormSendEmail';

export default props =>
	<section className="lm-contact-page">
		<TitlePage text="Contatos" />
		<div className="container">
			<div className="lm-content-contact-page">
				<div className="columns">
					<div className="column">
						<div className="lm-content-contact">
							<h3>Entre em contato com a gente</h3>
							<p>Avenida Desembargador Amaral, n° 221, Centro, Amarante - PI, 64400-000<br />
							Avenida Alberto Leal Nunes, n° 396, Centro, Regeneração - PI, 64490-000</p>
							<p><strong>Tel: </strong>(86) 9 9851-3970 - Amarante<br />
							<strong>Tel: </strong>(86) 9 9469-4942 - Regeneração</p>
							<p><strong>E-mail: </strong>vicenteemoura@gmail.com</p>
							<ul>
								<li><i className="fab fa-facebook-f"></i></li>
								<li><i className="fab fa-twitter"></i></li>
								<li><i className="fab fa-instagram"></i></li>
							</ul>
							<p>
								LUSTOSA E MOURA - ADVOCACIA E CONSULTORIA JURÍDICA é um escritório de advocacia localizado em Amarante - PI e Regeneração - PI.
							</p>
						</div>
					</div>
					<div className="column">
						<FormSendEmail />
					</div>
				</div>
			</div>
		</div>
	</section>
