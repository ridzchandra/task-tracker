/** @format */

export function get(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.status);
				} else {
					return response;
				}
			})
			.then((response) => response.json())
			.then((data) => resolve(data))
			.catch((error) => reject(error));
	});
}

export function post(url, data) {
	return new Promise((resolve, reject) => {
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.status);
				} else {
					return response;
				}
			})
			.then((response) => response.json())
			.then((data) => resolve(data))
			.catch((error) => reject(error));
	});
}

export function put(url, data) {
	return new Promise((resolve, reject) => {
		fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.status);
				} else {
					return response;
				}
			})
			.then((response) => response.json())
			.then((data) => resolve(data))
			.catch((error) => reject(error));
	});
}

export function del(url) {
	return new Promise((resolve, reject) => {
		fetch(url, {
			method: "DELETE",
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.status);
				} else {
					return response;
				}
			})
			.then((response) => response.json())
			.then((data) => resolve(data))
			.catch((error) => reject(error));
	});
}
