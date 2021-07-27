import axios from 'axios'

export const get = () => {
return Promise.resolve({ "data": [
    {
      "_id": "1",
      "alumnoName": "Pepe",
      "imagePath": "img/monsters/monster2.svg",
    },
    {
      "_id": "1",
      "alumnoName": "Marco",
      "imagePath": "img/monsters/monster1.svg",}
    ]
  })
}