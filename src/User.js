import React from 'react'

export default function User(props) {
	return (
		<div>
			<h2>{`The data received from App component via props: Name is ${props.name}`}</h2>
			<h4>{`The data received from App component via props: Contact is ${props.contact}`}</h4>
		</div>
	)
}