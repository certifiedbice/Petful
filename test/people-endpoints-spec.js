const knex=require('knex');
const app=require('../src/app');
const helpers=require('./test-helpers');

describe('People Endpoints',function(){
	let db;
	const {testPeople,dogs,cats}=helpers.makeFixtures();

	before('make knex instance',()=>{
		db=knex({client:'pg',connection:process.env.TEST_DB_URL});
		app.set('db', db);
	});

	after('disconnect from db',()=>db.destroy());

	before('cleanup',()=>helpers.cleanTables(db));

	afterEach('cleanup',()=>helpers.cleanTables(db));

	describe(`GET /api/articles`, () => {
		context(`Given no people`, () => {
			it(`responds with 200 and an empty list`, () => {
				return supertest(app)
					.get('/api/people')
					.expect(200, [])
			})
		})
		context('Given there are articles in the database', () => {
			beforeEach('insert articles', () =>
				helpers.seedPeople(
					db,
					testPeople,
				)
			)

			it('responds with 200 and all of the people',()=>{
				const expectedPeople=testPeople.map(person=>
					helpers.makeExpectedPerson(
						person
					)
				)
				return supertest(app)
					.get('/api/people')
					.expect(200, expectedPeople)
			})
		})
	})
});