const initialData = {
	tasks: {
		'task-1': { id: 'task-1', content: 'Perfomance Valuation in PMS' },
		'task-2': { id: 'task-2', content: 'Adding Funds In and Funds Out functionality in UMO' },
		'task-3': { id: 'task-3', content: 'Wire Fund Allocation service to PMS' },
		'task-4': { id: 'task-4', content: 'Add Client-Correlation-Key' },
		'task-5': { id: 'task-5', content: 'Database Setup in PMS' }
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'Tasks Todo',
			taskIds: [ 'task-1', 'task-2', 'task-3', 'task-4', 'task-5' ]
		},
		'column-2': {
			id: 'column-2',
			title: 'In Dev',
			taskIds: []
		},
		'column-3': {
			id: 'column-3',
			title: 'PR',
			taskIds: []
		},
		'column-4': {
			id: 'column-4',
			title: 'QA',
			taskIds: []
		},
		'column-5': {
			id: 'column-5',
			title: 'Completed',
			taskIds: []
		}
	},
	columnOrder: [ 'column-1', 'column-2', 'column-3', 'column-4', 'column-5' ]
};
export default initialData;
