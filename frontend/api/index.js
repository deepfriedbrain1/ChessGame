const requestData = {
	method: 'GET',
	credentials: 'include',
	headers: {
		'Content-Type':'application/json',
	}
};


const checkResponseCode = response => {
	if(response.ok){
		return response;
	}
	Promise.reject(new Error("Response not ok"));
};

const request = (url, requestData) => {
	return fetch(url, requestData).then(checkResponseCode);

};


const createGame = () => {
	return request('/api/creatGame', requestData);
};

const joinGame = gameId => {
	return request(`/api/joinGame/${gameId}`);
};


const getGameInfo = gameId => {
	return request(`/api/getGameInfo/${gameId}`)
		.then(response => {
			return response.json()

		})
};


const listGames = () => {
	return request('/api/listGames')
		.then(response => {
			return response.json()				
		})
		.catch(err => {
			console.log("ERRROR " + err);
		})
};

const listCurrentGames = () => {
	return request('/api/listCurrentGames')
		.then(response => {
			return response.json();
		})
		.catch(err => {
			console.log("ERRROR " + err);
		})
}

const leaveGame = gameId => {
	request(`/api/leaveGame/${gameId}`)
}


module.exports = {
	createGame,
	joinGame,
	getGameInfo,
	listGames,
	listCurrentGames,
	leaveGame
}