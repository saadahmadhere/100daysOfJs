const obj = { a: { b: { c: [1, 2, 3] } } };

// write a function get which can do the following:

// console.log(get(obj, 'a.b.c'))
// console.log(get(obj, 'a.b.c.0'))
// console.log(get(obj, 'a.b.c[1]'))
// console.log(get(obj, ['a', 'b', 'c', '2']))
// console.log(get(obj, 'a.b.c[3]'))
// console.log(get(obj, 'a.c'))

function get(obj, path) {
	// check if path is an empty string or it is an empty array.
	if (!path || path.length === 0) return undefined;

	const excludeChars = ['[', ']', '.'];
	const keys = [];

	for (let i = 0; i < path.length; i++) {
		if (!excludeChars.includes(path[i])) keys.push(path[i]);
	}

	// let res = keys.reduce((obj, key) => obj[key], obj);

	// return res;
	let res;
	for (let ch of keys) {
		res = res ? res[ch] : obj[ch];
		console.log(res);
	}

	return res;
}
