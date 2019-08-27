import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import Brandft from '../assets/img/brand-ft.png';

export default function Footer() {
	return (
		<footer className="lm-footer">
			<div className="container">
				<div className="columns lm-content-footer">
					<div className="column">
						<div className="lm-footer-sobre">
							<h3 className="lm-title-footer">Sobre</h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s.
							</p>
							<Link to="/sobre" className="lm-btn">
								Consulta
							</Link>
						</div>
					</div>
					<div className="column">
						<div className="lm-footer-contact">
							<h3 className="lm-title-footer">Contatos</h3>
							<p>Avenida Desembargador Amaral, n° 221, Centro, Amarante - PI, 64400-000</p>
							<p>Avenida Alberto Leal Nunes, n° 396, Centro, Regeneração - PI, 64490-000</p>
							<p>
								<strong>Tel: </strong>(86) 9 9851-3970 - Amarante<br />
								<strong>Tel: </strong>(86) 9 9469-4942 - Regeneração
							</p>
							<p>
								<strong>E-mail: </strong>vicenteemoura@gmail.com
							</p>
						</div>
					</div>
					<div className="column">
						<div className="lm-footer-links">
							<h3 className="lm-title-footer">Links Úteis</h3>
							<ul>
								<li>
									<a target="blanck" href="http://www.oabpi.org.br/">
										<i class="fas fa-caret-right" /> OAB-PI
									</a>
								</li>
								<li>
									<a target="blanck" href="https://www.sefaz.pi.gov.br/">
										<i class="fas fa-caret-right" /> SEFAZ -PI
									</a>
								</li>
								<li>
									<a target="blanck" href="http://www.pgfn.fazenda.gov.br/">
										<i class="fas fa-caret-right" /> PGNF
									</a>
								</li>
								<li>
									<a target="blanck" href="http://www.agu.gov.br/">
										<i class="fas fa-caret-right" /> AGU
									</a>
								</li>
								<li>
									<a target="blanck" href="http://portal.stf.jus.br/">
										<i class="fas fa-caret-right" /> STF
									</a>
								</li>
								<li>
									<a target="blanck" href="http://www.stj.jus.br/sites/portalp/Inicio">
										<i class="fas fa-caret-right" /> STJ
									</a>
								</li>
								<li>
									<a target="blanck" href="https://www.mppi.mp.br/internet/">
										<i class="fas fa-caret-right" /> MP-PI
									</a>
								</li>
								<li>
									<a target="blanck" href="http://www.mpf.mp.br/">
										<i class="fas fa-caret-right" /> MPF
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="column">
						<div className="lm-noticias-footer">
							<h3 className="lm-title-footer">Últimas noticias</h3>
							<ul>
								<li>
									<i class="fas fa-caret-right" /> Contrary to popular belief, Lorem Ipsum is not simply random text.
								</li>
								<li>
									<i class="fas fa-caret-right" /> Contrary to popular belief, Lorem Ipsum is not simply random text.
								</li>
								<li>
									<i class="fas fa-caret-right" /> Contrary to popular belief, Lorem Ipsum is not simply random text.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="columns">
					<div className="container">
						<div className="lm-copy">
							<p>© 2019 Lustosa e Moura - Advocacia e Consultorio Juridico.</p>
							<a href="http://octalbit.github.io" target="_blank">
								<img src={Brandft} alt="Octalbit" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
