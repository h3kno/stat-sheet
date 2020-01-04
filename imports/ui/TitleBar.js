import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { moment } from 'meteor/momentjs:moment';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

Modal.setAppElement(document.getElementById('app'));

const TitleBar = props => {
	const [currentClassName, setCurrentClassName] = useState();
	let history = useHistory();

	const handleNewGame = e => {
		console.log('handleNewGame');
		e.preventDefault();
		const gameTime = {
			timeStarted: moment().format('MMMM Do YYYY, h:mm:ss a')
		};
		Meteor.call('newGame', gameTime, (error, result) => {
			if (error) {
				alert('Oops seomthing went wrong: ' + error.reason);
			} else {
				//this.props.setGameId(result);
				history.push(`/games/${result}`);
				window.location.reload();
			}
		});
	};

	var subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.marginTop = '0';
	}

	function closeModal() {
		setIsOpen(false);
	}

	useEffect(() => {
		setCurrentClassName(
			location.pathname === '/' ? 'title-bar' : 'game-title-bar'
		);
	});

	return (
		<h1 className={currentClassName}>
			{props.title}{' '}
			<button onClick={openModal} className="btn btn-link">
				New Game
			</button>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<h3 ref={_subtitle => (subtitle = _subtitle)}>New Game?</h3>
				<p>Are you sure you want to start a new game?</p>
				<button onClick={closeModal} className="btn btn-link btn-danger">
					No
				</button>
				<button onClick={handleNewGame} className="btn btn-danger">
					Yes
				</button>
			</Modal>
		</h1>
	);
};

TitleBar.propTypes = {
	title: PropTypes.string.isRequired
};

TitleBar.defaultProps = {
	title: 'Default Title'
};

export default TitleBar;
