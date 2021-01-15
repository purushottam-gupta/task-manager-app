const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true ,
    useFindAndModify: false
})

// const user = new users({
//     name: '  Puru  ',
//     email: ' MYEMAIL@GMAIL.COM  ',
//     password: ' PASSWORD'
// })

// user.save().then(() => {
//     console.log(user)
// }).catch((error) => {
//     console.log(error)
// })



// const task = new Tasks({
//     description: '  Meeting  '
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })