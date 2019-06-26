//this is useful to standardize how URI paths are written for CMS. URI's should ALWAYS finish with a trailing slash

let hasSlash = uri => {
	var l = uri.length - 1;
	if (uri[l] !== '/') {
		return false;
	} else {
		return true;
	}
};
module.exports = hasSlash;