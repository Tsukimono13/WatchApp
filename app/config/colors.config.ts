const colorConfig = {
	primary: '#BF335',
	'gray.400': '#626262',
	yellow: '#FBC903'
};
export const getColor = (color: keyof typeof colorConfig) => colorConfig[color];