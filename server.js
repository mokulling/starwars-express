const express = require('express')
const app = express()
const PORT= 3000


app.use(express.urlencoded({ extended : true}))
app.use(express.json())


const characters = [
    {name: 'Yoda',
    role: 'Jedi Master',
    forcepoints: 100000,
    age: 900,
    avatar: 'https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/05/yoda-revenge-of-the-sith.jpg?q=50&fit=crop&w=960&h=500',
    routeName: 'yoda'

    },
    {name: "Luke Skywalker",
    role: 'Jedi Master',
    forcepoints: 10000,
    age: 40,
    avatar: 'https://geekculture.co/wp-content/uploads/2020/05/mark-hamill-star-wars-luke-skywalker-1.jpg',
    routeName: 'lukeskywalker'

    },

    {name: 'Princess Leia',
    role: 'General Princess',
    forcepoints: 100,
    age: 40,
    avatar: 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191218151642-princess-leia-buns-4.jpg',
    routeName: 'princessleia'

    }



]


/*HTML ROUTES

*/
app.get('/', (req,res) => {
    res.send('May the force be with you')
})

// /api/characters - show all character data
app.get('/api/characters', (req,res) => {
    res.json(characters)
})

app.get('/api/characters/:routeName', (req,res) => {
    const targetCharacter = req.params.routeName

    const character = characters.find(character => {
        return character.routeName === targetCharacter
      
    })


    res.json(character)
})


app.post('/api/characters/add', (req,res) => {
    const newCharacter = req.body
    newCharacter.routeName = newCharacter.name.replace(/ /g, '').toLowerCase()
    newCharacter.push(req.body)
    console.log(characters)
    res.status(200).send()
})



app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})