import React, { Component} from 'react';
// import './Form.css';

// I will continue this with the actual redirecting next week! Stay tuned!

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
                    Vaccine Info
				</h1>
                <p> This form will definetly help you keep track of how many vaccines you took, and when you should take your next one!</p>
				<label>
				 	Which vaccine have you taken?
				</label>
				<select name="vaccine" id="vaccine">
                <option value="Pfizer">Pfizer</option>
                <option value="Moderna">Moderna</option>
                <option value="Johnson and Johnson">Johnson and Johnson</option>
                </select>
                <label>
					When did you take your first vaccine?
				</label>
				<input type="date" name="date" placeolder="Date you took your vaccine" />
                <button onclick = "alert()">
					Submit and find out your second dose date!
				</button>
				<script>
					function alert()
						{
							alert("You have successfully submitted your vaccine information. Please wait to be redirected!")
						}
				</script>
	
			</form>
			
		)
	}

	
}



export default Form;