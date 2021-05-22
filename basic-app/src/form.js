// function Form(){
//     return <input> 

// }

import React, { Component} from 'react';
// import './Form.css';

class Form extends Component { // Smart Component
	constructor(props) {// Props are passed here (e.g. heading)
		super();
		this.heading = props.heading;
	}

	render() { // We return the component HTML in this function
		return (
			<form>
				<h1>
					{this.heading}
				</h1>
				<label>
					Principal
				</label>
				<input type="number" name="principal" placeolder="Your Principal" />
				<label>
					Yearly APR %
				</label>
				<input type="number" name="apr" placeolder="Your APR" />
				<label>
					Number of months
				</label>
				<input type="number" name="months" placeolder="Your number of months" />
				<button>
					Calculate
				</button>
			</form>
		)
	}
}



export default Form;