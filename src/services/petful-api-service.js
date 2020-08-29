import config from '../config';

const PetfulApiService={
	getPeople(){
		return fetch(`${config.API_ENDPOINT}/people`)
		.then(res=>
			(!res.ok)
				? res.json().then(e=>Promise.reject(e))
				: res.json()
		)
	},
	getDogs(){
		return fetch(`${config.API_ENDPOINT}/dog`,{
			headers:{}
		})
		.then(res=>
			(!res.ok)
				? res.json().then(e=>Promise.reject(e))
				: res.json()
		);
	},
	getCats(){
		return fetch(`${config.API_ENDPOINT}/cat`,{
			headers:{}
		})
		.then(res=>
			(!res.ok)
				? res.json().then(e=>Promise.reject(e))
				: res.json()
		);
	},
	postUser(user){
		return fetch(`${config.API_ENDPOINT}/people`,{
			method:'POST',
			headers:{'content-type':'application/json'},
			body:JSON.stringify({full_name:user.full_name}),
		})
		.then(res=>
			(!res.ok)
				? res.json().then(e=>Promise.reject(e))
				: res.json()
		);
	}
}

export default PetfulApiService;
