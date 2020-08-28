const {people,dogs,cats}=require('./store');

function seedPeople(db,people){
	// use a transaction to group the queries and auto rollback on any failure
	return db.transaction(async trx=>{
		await trx.into('people').insert(people)
		await trx.raw(
			`SELECT setval('people_id_seq', ?)`,
			[people[people.length-1].id],
		)
	})
}

function makeExpectedPerson(person=[]){
	return {
		id: person.id,
		name: person.name,
		date_created: person.date_created.toISOString(),
	}
}

function seedDogs(db){
	// use a transaction to group the queries and auto rollback on any failure
	return db.transaction(async trx=>{
		await trx.into('dogs').insert(dogs)
		await trx.raw(
			`SELECT setval('dogs_id_seq', ?)`,
			[dogs[dogs.length-1].id],
		)
	})
}

function seedCats(db){
	// use a transaction to group the queries and auto rollback on any failure
	return db.transaction(async trx=>{
		await trx.into('cats').insert(cats)
		await trx.raw(
			`SELECT setval('cats_id_seq', ?)`,
			[cats[cats.length-1].id],
		)
	})
}

function makeFixtures(){
const testPeople = makeUsersArray()
	const testPeople = people
	const testDogs = dogs
	const testDogs = cats
	return { testPeople, testDogs, testCats }
}