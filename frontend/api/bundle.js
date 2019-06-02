(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//js interface for apis using fetch


const requestData = {
	method: 'GET',
	credentials: 'include',
	headers: {
		'Content-Type':'application/json',
	}
};






const initRequestData = (method, body) => {
	requestData.method = method;
	requestData.body = body;
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
	//console.log("listgames");
	return request('/api/listGames')
	/*
		.then(response => {
			return response.json()
				.then(json => {
					console.log("response " + json.text());
				})


		})
		*/
		.then(response => {
			return response.json()
				
		})
		//.then(text => console.log("response: " + text))
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



//set request data
//create a new request
// feed new request to fetch
//check response code


module.exports = {
	createGame,
	joinGame,
	getGameInfo,
	listGames,
	listCurrentGames,
	leaveGame


}
},{}]},{},[1]);
