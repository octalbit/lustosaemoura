import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [telefone, setTelefone] = useState('');
	const [areaAtuacao, setareaAtuacao] = useState('');
	const [message, setMessage] = useState('');
	const [sucessMessage, setSucessMessage] = useState(false);

	function handleSubmit(event) {
		if (email === '' || name === '' || telefone === '' || areaAtuacao === '' || message === '') {
			alert('Preencha todos os campos ');
		}
		axios
			.post(`${process.env.REACT_APP_URL_DATABASE}/email`, {
				name,
				message,
				telefone,
				email,
				areaAtuacao
			})
			.then(resp => {
				if(resp.status === 200) {
					setSucessMessage(true);
					setName('');
					setEmail('');
					setTelefone('');
					setareaAtuacao('');
					setMessage('')
				}
			})
			.catch(err => {
				alert('Alguma coisa deu errado, por favor tente novamente.');
			});
		event.preventDefault();
	}

	const options = [
		'Direito Empresarial',
		'Direito da Familia',
		'Direito Cívil',
		'Direito do Trabalho',
		'Direito Imobiliário',
		'Direito Tributário',
		'Direito Administrativo'
	];

	return (
		<form className="lm-form-contact" onSubmit={handleSubmit}>
			{sucessMessage && 
				<h2 style={{ color: 'red', alignSelf: 'center', textAlign: 'center', fontSize: '3em', marginBottom: 15, fontFamily: 'Roboto-BoldCondensed' }}>
					Mensagem enviada com sucesso.
				</h2>
			}
			<div className="columns">
				<div className="column">
					<div className="field">
						<div className="control">
							<input
								className="input lm-form-input"
								type="text"
								placeholder="Nome"
								value={name}
								onChange={name => setName(name.target.value)}
								required
							/>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="field">
						<div className="control">
							<input
								className="input lm-form-input"
								type="email"
								placeholder="Email"
								value={email}
								onChange={email => setEmail(email.target.value)}
								required
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="columns">
				<div className="column">
					<div className="field">
						<div className="control">
							<input
								className="input lm-form-input"
								type="tel"
								placeholder="Telefone"
								value={telefone}
								onChange={telefone => setTelefone(telefone.target.value)}
								required
							/>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="field">
						<div className="control">
							<select
								className="lm-form-select input lm-form-input"
								name="area-de-atuacao"
								value={areaAtuacao}
								onChange={event => setareaAtuacao(event.target.value)}
								required
								placeholder="Selecione o assunto"
							>
								{' '}
								<option value="" disabled selected>
									Selecione a área de atuação...
								</option>
								{options.map(item => (
									<option className="lm-form-select lm-form-select" style={{ color: 'red' }} name={item} value={item}>
										{item}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
			</div>
			<div className="columns">
				<div className="column">
					<div className="field">
						<div className="control">
							<textarea
								className="textarea lm-form-textarea"
								placeholder="Menssagem"
								value={message}
								onChange={msg => setMessage(msg.target.value)}
								required
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="columns">
				<div className="control lm-control-box">
					<button className="button is-link lm-btn-form" type="submit">
						Enviar pedido
					</button>
				</div>
			</div>
		</form>
	);
}
