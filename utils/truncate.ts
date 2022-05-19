export default function truncate(str: string) {
	return str.length > 13 ? str.substring(0, 10) + "..." : str;
}