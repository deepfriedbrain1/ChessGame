const requestData = {
	method: 'GET',
	credentials: 'include',
	headers: {
		'Content-Type':'application/json',
	}
}


const checkResponseCode = response => {
	if(response.ok){	
		return response;
	}			
	Promise.reject(new Error("Response not ok"));
};

const request = (url, requestData) => {
	return fetch(url, requestData).then(checkResponseCode);

};

const getScores = () => {
	return request('/api/users/scoreboard', requestData)
		.then(response => {
			return response.json()

		})
};

export default { getScores }