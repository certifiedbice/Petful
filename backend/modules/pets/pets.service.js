const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    const nextPets = {
      nextCat,
      nextDog
    };

    nextPets.nextCat = pets.cats.show();
    nextPets.nextDog = pets.dogs.show();

    return nextPets;
  },

  getAllDogs() {
    return pets.dogs.all();
  },

  getAllCats() {
	return pets.cats.all();
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if (type === 'cat') {
      return pets.cats.dequeue();
    }
    else if (type === 'dog') {
      return pets.dogs.dequeue();
    }
    else
      throw new Error('Pet type should be "cat" or "dog".');
  }
}
