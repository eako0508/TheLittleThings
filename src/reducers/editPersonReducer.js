const initState = {	
	info: {
		id: 1,
		firstName: 'Jessica',
		lastName: 'Johnes',
		DOB: 'March 17',
		url: './images/portraits/template_female_01.jpg'
	},
	data: {
		likes: [
			'cooking Italian food',
			'shopping from Macy\'s',
			'she likes to be recognized with her hard work and efforts',
			'likes those who are kind to others'
		],
		dislikes: [
			'She hates when people taker her food away without asking, like snacks',
			'she doesn\'t like rude people'
		],
		notes: [
			'cooking Italian food',
			'shopping from Macy\'s',
			'she likes to be recognized with her hard work and efforts',
			'likes those who are kind to others',
			'She hates when people taker her food away without asking, like snacks',
			'she doesn\'t like rude people'
		],
		events: [
			'start working for a new company from June 1',
			'parents visiting on May 20th'
		]
	},
	questionnair: [
		{
			q:'What is your favorite local restaurant and the meal you most enjoy eating when there?',
			a: 'There\'s a vietnamese restaurant in the flushing and I always eat Pho and summer roll from there every time I visit.'
		},{
			q: 'What\'s your favorite drink?',
			a: 'Lately it\'s black coffee.'
		},{
			q: 'What songs have you completely memorized?',
			a: 'Lot of songs from Seo Taiji from South Korea.'
		},{
			q: 'Are you usually early or late?',
			a: 'I am an early bird at the beginning, but then ...'
		},{
			q: 'How do you relax after a hard day of work?',
			a: 'I used to play computer games, or watch TV shows.'
		}
	]	
}

export default (state=initState, action) => {
	return state;
}