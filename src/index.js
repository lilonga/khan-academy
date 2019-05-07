import axios from "axios";

const sanitizeResponse = (res) => {
	return {
		data:res.data,
		headers:res.headers,
		status:res.status,
	}
} 

/**
 * Fetch the top projects from https://www.khanacademy.org/computing/computer-programming/browse
 *
 * @param {Object} options
 * @param {String} options.sortType=hot Sort by "recent", "hot", "votes" or contest
 * @param {Number} options.page=0 Page numer.
 * @param {Number} options.limit=5 Number of results.
 * @return {Object} Promise
 * @public
 */
export async function fetchTopScratchpads(options = {}) {
	const { page = 0, limit = 5, type = "hot" } = options;
	let types = {
		recent: 2,
		hot: 3,
		contest: 4,
		votes: 5
	};
	let sort = types[type] || 2;
	const response = await axios.get(
		`https://www.khanacademy.org/api/internal/scratchpads/top?casing=camel&sort=${sort}&page=${page}&limit=${limit}&subject=all&topic_id=xffde7c31&lang=en`
	);
	return sanitizeResponse(response);
}

/**
 * Fetch all projects by username
 *
 * @param {Object} options
 * @param {String} options.user fetch projects from this user
 * @param {Number} options.page=0 Page numer.
 * @param {Number} options.limit=5 Number of results.
 * @return {Object} Promise
 * @public
 */
export async function fetchUserScratchpads(options = {}) {
	const response = await axios.get(
		`https://www.khanacademy.org/api/internal/user/scratchpads?casing=camel&username=${
			options.user
		}&sort=1&page=0&limit=10&subject=all&lang=en`
	);
	return sanitizeResponse(response);
}

/**
 * Fetch specific project
 *
 * @param {Object} options
 * @param {String} options.id id of scratchpad
 * @return {Object} Promise
 * @public
 */
export async function fetchScratchpad(options = {}) {
	const response = await axios.get(
		`https://www.khanacademy.org/api/internal/show_scratchpad?scratchpad_id=${
			options.id
		}`
	);
	return sanitizeResponse(response);
}

/**
 * Fetch specific challenge
 *
 * @param {Object} options
 * @param {String} options.id id of challenge
 * @return {Object} Promise
 * @public
 */
export async function fetchChallenge(options = {}) {
	const response = await axios.get(
		`https://www.khanacademy.org/api/internal/show_challenge?challenge_id=${
			options.id
		}`
	);
	return sanitizeResponse(response);
}

