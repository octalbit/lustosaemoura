import React, { useEffect, useState } from 'react';
import './News.css';

// import { Link } from 'react-router-dom';

import Imgnotice from '../assets/img/img-notice.jpg';

import TitleSecundary from './TitleSecondary';
import axios from 'axios';

function News(props) {
	const [data, setData] = useState('');
	useEffect(() => {
		// Atualiza o titulo do documento usando a API do browser
		console.log('buscando da api');
		axios
			.get(`${process.env.REACT_APP_URL_DATABASE}/posts`)
			.then(resp => {
				console.log(resp);
				setData(resp.data);
			})
			.catch(err => console.log(err));
	}, []);
	return (
		<section className="lm-news">
			<TitleSecundary text="Notícias" />
			<div className="container">
				<div className="columns">
					{data &&
						data.slice(0, 3).map((item, id) => (
							<div className="column ">
								<div className="card">
									<div className="card-image">
										<figure className="image">
											<img src={Imgnotice} alt="Vem da Api" />
										</figure>
									</div>
									<div className="card-content">
										<div className="lm-content-news">
											<div className="lm-title-info-news">
												<h3>{item.title}</h3>
											</div>
											<div className="lm-desc-info-news">
												<p>{item.description}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	);
}

export default News;
