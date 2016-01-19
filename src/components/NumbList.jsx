import React from 'react';
import {NumbBox} from './NumbBox.jsx'

export const NumbList = React.createClass({
	render() {
		return (
			<div>
				<p className="well"> Click the "plus button" to generate numbers. </p>
				<h3 style={{color: "brown"}}> Numbers </h3>
					{Object.keys(this.props.numbs).map((index) => {
						return <NumbBox
							index={index}
							key={index}
							numb={this.props.numbs[index].number}
							actions={this.props.actions}
							colour={this.props.numbs[index].colour}
						/>
					})}
		       <hr />
		       <button
		       	className="btn btn-sm btn-info glyphicon glyphicon-plus"
		       	onClick={()=>{
		       		this.props.actions.resetStatus()
		       		this.props.actions.resetError()
		       		this.props.actions.addRandNumb()
		       	}}
		        > </button>
			</div>
		)
	}
})

