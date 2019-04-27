import axios from "axios";

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
export async function fetchTopScratchpads(opts) {
	const { page = 0, limit = 5, type = "hot" } = opts;
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
	return response;
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
export async function fetchUserScratchpads(opts) {
	const response = await axios.get(
		`https://www.khanacademy.org/api/internal/user/scratchpads?casing=camel&username=${
			opts.user
		}&sort=1&page=0&limit=10&subject=all&lang=en`
	);
	return response;
}

/**
 * Fetch specific project
 *
 * @param {Object} options
 * @param {String} options.id id of scratchpad
 * @return {Object} Promise
 * @public
 */
export async function fetchScratchpad(opts) {
	const response = await axios.get(
		`https://www.khanacademy.org/api/internal/show_scratchpad?scratchpad_id=${
			opts.id
		}`
	);
	return response;
}