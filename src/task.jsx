import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
	border: 1px solid lightgrey;
	border-radius: 2px;
	padding: 8px;
	margin-bottom: 8px;
	background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
`;
const Handle = styled.div`
	width: ${(props) =>
		props.content === 'Database Setup in PMS'
			? '200px'
			: props.content === 'Perfomance Valuation in PMS' ? '120px' : '60px'}
	height: 20px;
	background-color: ${(props) =>
		props.content === 'Database Setup in PMS'
			? 'red'
			: props.content === 'Perfomance Valuation in PMS' ? 'orange' : 'green'}
	border-radius: 4px;
	margin-right: 8px;
`;
export default class Task extends React.Component {
	render() {
		return (
			<Draggable
				draggable={this.props.task.id}
				index={this.props.index}
				draggableId={this.props.uniqueid.toString()}
				priority={this.priority}
			>
				{(provided, snapshot) => (
					<Container
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
						isDragging={snapshot.isDragging}
					>
						<Handle {...provided.dragHandleProps} content={this.props.task.content} />
						{this.props.task.content}
					</Container>
				)}
			</Draggable>
		);
	}
}
