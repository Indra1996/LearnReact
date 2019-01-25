import React from 'react';
import styled from 'styled-components';
import Column from './column.jsx';
import { DragDropContext } from 'react-beautiful-dnd';
import { newState1 } from './actions/newStateActions';
import { newState2 } from './actions/newStateActions';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/newStateActions';

const Container = styled.div`display: flex;`;
class App extends React.Component {
	onDragStart = () => {
		document.body.style.color = 'orange';
	};
	componentDidMount() {
		this.props.fetchPosts();
	}
	onDragEnd = (result) => {
		document.body.style.color = 'inherit';
		const { destination, source, draggableId } = result;
		if (!destination) {
			return;
		}
		if (destination.droppableId === source.droppableId && destination.index === source.index) {
			return;
		}
		const start = this.props.posts.columns[source.droppableId];
		const finish = this.props.posts.columns[destination.droppableId];

		if (start === finish) {
			const newTaskIds = Array.from(start.taskIds);
			newTaskIds.splice(source.index, 1);
			newTaskIds.splice(destination.index, 0, draggableId);

			const newColumn = {
				...start,
				taskIds: newTaskIds
			};
			this.props.newState1(newColumn);
		} else {
			const startTaskIds = Array.from(start.taskIds);
			startTaskIds.splice(source.index, 1);
			const newStart = {
				...start,
				taskIds: startTaskIds
			};
			const finishTaskIds = Array.from(finish.taskIds);
			finishTaskIds.splice(destination.index, 0, draggableId);
			const newFinish = {
				...finish,
				taskIds: finishTaskIds
			};
			this.props.newState2(newStart, newFinish);
		}
	};
	render() {
		console.log(this.props.posts.columnOrder);

		return (
			<DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart} onDragUpdate={this.onDragUpdate}>
				<Container>
					{this.props.posts.columnOrder.map((columns, columnId) => {
						const column = this.props.posts.columns[columns];

						const tasks = column.taskIds.map((taskId) => this.props.posts.tasks[taskId]);
						return <Column key={column.id} column={column} tasks={tasks} />;
					})}
				</Container>
			</DragDropContext>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	};
};

const mapDispatchToProps = {
	fetchPosts,
	newState1,
	newState2
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
