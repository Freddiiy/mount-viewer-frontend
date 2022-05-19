export const animationContainer = {
	hidden: {opacity: 0},
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0,
			staggerChildren: 0.02,
		},
	},
};

export const animationItem = {
	hidden: {opacity: 0},
	show: {opacity: 1},
	exit: {
		transition: {
			duration: 0.3,
		},
		opacity: 0,
	},
};