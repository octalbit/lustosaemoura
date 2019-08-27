import './News.css';
import React from 'react';
import TitlePage from '../../components/TitlePage';
import TheNotice from '../../components/news/TheNotice';

export default function About() {
	return (
		<section className="lm-news-page">
			<TitlePage text="Nossas notícias" />
			<div className="container">
				<div className="lm-content-news">
					<div className="columns">
						<div className="column">
							<TheNotice />
						</div>
						<div className="column">
							<TheNotice />
						</div>
						<div className="column">
							<TheNotice />
						</div>
					</div>
					<button className="lm-btn-main">Carregar mais</button>
				</div>
			</div>
		</section>
	);
}
