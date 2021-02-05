// we are going to play around with our db in here
//require

const db = require('./models')


// firstName: DataTypes.STRING,
// lastName: DataTypes.STRING,
// age: DataTypes.INTEGER,
// email: DataTypes.STRING

// db.user.create({
//     firstName: 'Nikki',
//     lastName: 'Salehi',
//     age: 31
// }).then((data) => {
//     console.log(data)
// })
// db.user.create({
//     firstName: 'Rome',
//     lastName: 'Bell',
//     age: 33
// }).then((data) => {
//     console.log(data)
// })
// db.user.create({
//     firstName: 'Brian',
//     lastName: 'Krabec',
//     age: 27
// }).then((data) => {
//     console.log(data)
// })
// db.user.create({
//     firstName: 'Nick',
//     lastName: 'Schmitt',
//     age: 28
// }).then((data) => {
//     console.log(data)
// })

db.user.findOne({
    where: {firstName: 'Nick'}
}).then(function(user){
    //.get() will clean up user to be one object instead of that long one
    console.log(user.get())
    //user will be an instance of user, remember classes? This stores the content of the table entry with
    // rid 2. if such an entry is not defined you will get null
})

.catch( err => {
    //at the end to catch any errors that happened in the chain
    console.log(err)
})

db.user.findAll()
.then((users) => {
    users.forEach( user =>{
    
        console.log(user.firstName + ' ' + user.lastName)
    })
})