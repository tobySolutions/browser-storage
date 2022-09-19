// Cookies

// Cookies can be manually created using the document.cookie property. However sometimes the server sets the cookies.

// Adding and editing cookies
// document.cookie = 'user=Conner';
// document.cookie = 'course=FrontendExpert';
// document.cookie = 'course=AlgoExpert';
// document.cookie = 'isAwesome=true';

// Deleting Cookies:
// Using the Date to UTC  string method:
// document.cookie = `user=Conner; expires=${new Date().toUTCString()}`;
// document.cookie = `undefined; expires=${new Date().toUTCString()}`;

// Using the max-age property:
// document.cookie = 'user=Conner; max-age=0';

// Setting a Path, secure(for https) and the Samesite property for a cookie:
// document.cookie ='user=Conner; path=/myDirectory; secure; samesite=strict';


// Getting values from the cookies
// const courses = document
//     .cookie
//     .split('; ')
//     .find(cookie => cookie.startsWith('course='))
//     .split('=')[1]


// console.log(document.cookie);
// console.log(courses)


// Local Storage and Session Storage:
// They basically share the same methods, except that;
// LocalStorage has no expiration, but Session expires at the end of a session

localStorage.setItem('user', 'Conner');
localStorage.setItem('course', 'FrontendExpert');
// console.log(localStorage.getItem('user'));
// The removeItem method removes a specific item (gotten by its key)
// localStorage.removeItem('user');
// The clear method clears out the localStorage
// localStorage.clear();
// console.log(localStorage.getItem('course'));


// IndexedDB
// To create or open an indexedDB.

const request = indexedDB.open('myDataBase', 1);

// request.addEventListener('upgradeneeded', event => {
//     const database = event.target.result;
//     const store = database.createObjectStore('users', { keyPath: 'id' });
//     store.createIndex('name', 'name');

//     store.add({
//         id: 0,
//         name: 'Conner',
//         course: 'FrontendExpert',
//     });
//     store.add({
//         id: 1,
//         name: 'Clement',
//         course: 'AlgoExpert',
//     })
// })


// Now that we've created our indexedDB, now we can interact with it via "transactions"
// We can add to it, read from it and "other" stuff (with an existing indexedDB);

// To add an index to an existing objectStore
// request.addEventListener('success', event => {
//     const database = event.target.result;
//     database
//         .transaction(['users'], 'readwrite')
//         .objectStore('users')
//         .add({
//             id: 2,
//             name: 'Ryan',
//             course: 'MLExpert',
//         })
// })

// To delete an index from the database
// request.addEventListener('success', event => {
//     const database = event.target.result;
//     database
//         .transaction(['users'], 'readwrite')
//         .objectStore('users')
//         .delete(1)
// })


// To get a value from the indexedDB objectStore
request.addEventListener('success', event => {
    const database = event.target.result;
    const reqDatabase = database
        .transaction(['users'], 'readwrite')
        .objectStore('users')
        .get(0)
    
    reqDatabase.addEventListener('success', event => {
        console.log(event.target.result.name)
    })
})


// There is also an index function that you can pass values to
// the get can then take a specific argument, for example:

/*
  request.addEventListener('success', event => {
    const database = event.target.result;
    const reqDatabase = database
        .transaction(['users'], 'readwrite')
        .objectStore('users')
        .index('name')
        .get('Conner)
    
    reqDatabase.addEventListener('success', event => {
        console.log(event.target.result.course)
    })
})



*/


