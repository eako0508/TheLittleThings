//lookupReducer
const initState = {
	friends: [
		{ id: 1, name: {firstName: 'Jessica', lastName: 'Johnes'}, description: 'A girl from Maine', url: './images/portraits/template_female_01.jpg'},
		{ id: 2, name: {firstName: 'Josh', lastName: 'somelastname'}, description: 'he\'s alright', url: './images/portraits/template_male_01.jpg' },
		{ id: 3, name: {firstName: 'Ted', lastName: 'Devon'}, description: 'No image template', url: '' },
		{ id: 4, name: {firstName: 'Ed', lastName: 'Harris'}, description: 'The legendary Ed Harris', url: './images/portraits/template_male_02.jpg'}
	]
};

export default (state=initState, action) => {
	return state;
}