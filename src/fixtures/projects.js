import { IMAGES, ICONS } from '../constants';

const projects = [
	{
		key: 'p1',
		title: 'Sendchamp Developers',
		description:
			'Everything you need to get started with Sendchamp as a developer. Learn how you can send SMS, Whatsapp, Email, Voice Message To Your Customers in Africa. ',

		url: 'https://developers.sendchamp.com',
		image: IMAGES.sendchamp,
		icon: ICONS.logo,
		stack: ['Next.js', 'Chakra UI', 'Sanity'],
	},
	{
		key: 'p2',
		title: 'Fly Cash',
		description:
			'FlyCash gives you the perfect customer experience with faster  instore payments, self-checkout and post-sales engagements.',
		url: 'https://flycash.vercel.app/',
		image: IMAGES.flycash,
		icon: ICONS.logo,
		stack: ['React.js', 'Context API', 'Styled-components'],
	},
	{
		key: 'p3',
		title: 'Sambe',
		description:
			'Sambe provides unlimited premium content for users who explore social media for business and personal growth',
		url: 'https://play.google.com/store/apps/details?id=com.autogen',
		image: IMAGES.sambe,
		icon: ICONS.logo,
		stack: ['React Native'],
	},
	{
		key: 'p4',
		title: 'Currency Rates Application',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti totam repudiandae iusto nostrum voluptas unde ducimus deserunt accusamus neque non.',
		url: 'https://mycurrency-rates.herokuapp.com/',
		image: IMAGES.currency,
		icon: ICONS.logo,
		stack: ['Node.js', 'CSS'],
	},
];

export default projects;
