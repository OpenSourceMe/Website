import React from 'react';

const changeButtonColour = (oldStyle) =>
{
	let bstyle = oldStyle
	let rollTheDice = Math.round(Math.random()*5)
	
	switch(rollTheDice) {
	    case 1:
	        bstyle = "success"
	        break;
	    case 2:
	        bstyle = "danger"
	        break;
	    case 3:
	        bstyle = "warning"
	        break;
	    case 4:
	        bstyle = "primary"
	        break;
	    case 5:
	        bstyle = "info"
	        break;
	    case 0:
	        bstyle = "default"
	        break;
	    default:
	        break;
	}

	//always change colour
	if(bstyle === oldStyle)
		{bstyle = changeButtonColour(bstyle)}

	return bstyle
}

export const NumbBox = React.createClass({

	propTypes: {
	    numb: React.PropTypes.number.isRequired
	  },
	  
	onNumbClick() {
		const newColour = changeButtonColour(this.props.colour)
		this.props.actions.changeNumbColour(this.props.index, newColour)
	},
	render() {
		return (
			<button className={"btn btn-sm btn-" + this.props.colour} onClick={this.onNumbClick}>
				{this.props.numb}
				<br />
			</button>
		)
	}
})

