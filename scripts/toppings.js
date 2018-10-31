const shortId = require('short-id')
const axios = require('axios')

const toppings = [
  {
    id: shortId.generate(),
    name: 'Cheese',
    deliciousness: 10
  },
  {
    id: shortId.generate(),
    name: 'Pepperoni',
    deliciousness: 9
  },
  {
    id: shortId.generate(),
    name: 'Anchovies',
    deliciousness: 3
  },
  {
    id: shortId.generate(),
    name: 'Pineapple',
    deliciousness: 10
  },
  {
    id: shortId.generate(),
    name: 'Mushroom',
    deliciousness: 8
  },
  {
    id: shortId.generate(),
    name: 'Kalamata Olives',
    deliciousness: 8
  }
]

const getToppings = () => {
  return axios.get('https://immense-lake-82822.herokuapp.com/toppings')
}

const addTopping = (name, deliciousness) => {
  const newTopping = {name, deliciousness}
  return axios.post('https://immense-lake-82822.herokuapp.com/toppings', newTopping).then(function(response){
    console.log(response)
    return getToppings()
  })
}

const deleteTopping = id => {
  return axios.delete('https://immense-lake-82822.herokuapp.com/toppings/' + id)
}

const updateTopping = (id, name, deliciousness) => {
  return axios.put('https://immense-lake-82822.herokuapp.com/toppings/' + id, {
    name: name,
    deliciousness: parseInt(deliciousness)
  })
}

module.exports = {
  getToppings,
  addTopping,
  deleteTopping,
  updateTopping
}
