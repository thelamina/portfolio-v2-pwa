import { IMAGES, ICONS } from '../constants';

const projects = [
	{
		key: 'p1',
		title: 'Sendchamp',
		description:
			'Simple Messaging Platform & APIs for SMS, Voice, Whatsapp, Email, USSD and Verification',
		url: 'https://sendchamp.com',
		image: IMAGES.sendchamp,
		icon: ICONS.logo,
		stack: ['React.js','Next.js', 'Chakra UI', 'Sanity'],
	},
	{
		key: 'p2',
		title: 'Fly Cash',
		description:
			'FlyCash gives you the perfect customer experience with faster  instore payments, self-checkout and post-sales engagements.',
		url: 'https://flycash.ng/',
		image: IMAGES.flycash,
		icon: ICONS.flycash,
		stack: ['React.js', 'React Native', 'Next.js', 'Styled-components', 'TailwindCSS'],
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
		title: 'Coin For Barter',
		description:
			'A solution that makes it easier to accept payment in cryptocurrencies. Developers’ friendly with open APIs and SDKs for sweet integration.',
		url: 'https://coinforbarter.com/',
		image: IMAGES.c4b,
		icon: ICONS.c4b,
		stack: ['React.js', 'Next.js', 'Styled-components', 'TailwindCSS'],
	},
];

export default projects;
