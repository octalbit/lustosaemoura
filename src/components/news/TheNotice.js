import './TheNotice.css';

import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
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
						<article className="lm-notice">
							<div className="lm-notice-date">
								<span>04/09/2019</span>
							</div>
							<div className="lm-title-notice">
								<h3>{item.title}</h3>
							</div>
							<div className="lm-descricao-notice">
								<p>{item.subtitle}</p>
							</div>
						</article>
					</Link>
				))}
		</Fragment>
	);
}
