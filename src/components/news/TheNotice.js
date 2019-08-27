import './TheNotice.css';

import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Imgnotice from '../../assets/img/img-notice.jpg';
import axios from 'axios';

export default function TheNotice(props) {
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
		<Fragment>
			{data &&
				data.map((item, id) => (
					<Link to="/" className="lm-link-notice" key={id}>
						<article className="lm-notice card">
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
						</article>
					</Link>
				))}
		</Fragment>
	);
}
