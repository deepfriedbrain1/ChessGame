const requestData = {
	method: 'GET',
	credentials: 'include',
	headers: {
		'Content-Type':'application/json'
	}
}

const initRequestData = (method, body) => {
	requestData.method = method;
	requestData.body = JSON.stringify({body: body});
};


const checkResponseCode = response => {
	if(response.ok){	
		return response;
	}			
	Promise.reject(new Error("Response not ok"));
};

const request = (url, requestData) => {
	fetch(url, requestData).then(checkResponseCode);

};

const sendMessage = (gameId, message) => {
	initRequestData('post', message);
	request(`/api/chat/${gameId}`, requestData);
};

module.exports = {sendMessage};
