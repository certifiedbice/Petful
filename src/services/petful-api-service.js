import config from '../config';

// store of people
const peopleStore = [
	'Randy Lahey',
	'Trevor Cory',
	'Jim Lahey',
	'Bill Beyer',
	'Susan Summers',
	'Clarence Darrow',
	'Bish Tearmender',
	'Abe Lincoln'
];

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
			body:JSON.stringify({name:user.name}),
		})
		.then(res=>
			(!res.ok)
				? res.json().then(e=>Promise.reject(e))
				: res.json()
		);
	},
	// postRandomUser(){
	// 	const randomUser = peopleStore[Math.floor(Math.random(peopleStore.length()))];
	// 	return fetch(`${config.API_ENDPOINT}/people`,{
	// 		method:'POST',
	// 		headers:{'content-type':'application/json'},
	// 		body:JSON.stringify({full_name:randomUser})
	// 	})
	// 	.then(res=>
	// 		(!res.ok)
	// 			? res.json().then(e=>Promise.reject(e))
	// 			: res.json()			
	// 	);
	// },
	deleteUser(user){
		// dequeue first user in queue
		return fetch(`${config.API_ENDPOINT}/people`,{
			method:'DELETE',
            'headers': {'Content-Type': 'application/json'},
            'body': JSON.stringify({name:user})
		})
	},
	deleteCat(){
		// dequeue first cat in cats list
		return fetch(`${config.API_ENDPOINT}/cat`, {
			method:'DELETE'
		})
	},
	deleteDog(){
		// dequeue first dog in cats list
		return fetch(`${config.API_ENDPOINT}/dog`, {
			method:'DELETE'
		})
	}
}

export default PetfulApiService;
