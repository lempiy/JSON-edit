'use strict';

require('./main.sass');
import { JsonEditor } from './jsoneditor/jsoneditor';
import { Parser } from './jsoneditor/parser';

var appContainer = document.querySelector('#app');

appContainer.innerHTML = '<div class="main-component"><h1 class="main-component__title">JSON Editor</h1></div>';

const jsoneditor = new JsonEditor({
    mountSelector: '#app',
})

let input = Parser.serialize({
  name: {
    value: "Joe",
    tag: `"json": tag`
  },
  sename: {
    value: "Doe"
  },
  sister: {
    tag: `"unique": one`,
    value: {
      name: {
        value: "Jessy"
      },
      sename: {
        value: "Doe"
      },
    }
  },
  colors: {
    value: [
      "red",
      "blue",
      "dark"
    ]
  }
}, false);

let output = Parser.parse(input)

jsoneditor.loadSource([
  {
    "_id": "5971ee1ea6fbbd228ffc6569",
    "index": 0,
    "guid": "b0a942a6-84b2-41d0-8743-a29a7d1728b3",
    "isActive": false,
    "balance": "$1,967.07",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "green",
    "name": "Madge Spencer",
    "gender": "female",
    "company": "OCTOCORE",
    "email": "madgespencer@octocore.com",
    "phone": "+1 (860) 509-3745",
    "address": "959 Beadel Street, Elliston, South Dakota, 9408",
    "about": "Cupidatat aute reprehenderit id veniam mollit qui voluptate exercitation reprehenderit pariatur. Ad anim amet nisi mollit ex consectetur pariatur nulla amet aliqua. Exercitation duis nulla excepteur aute culpa sint occaecat nostrud aliqua consectetur fugiat. Consequat irure aliqua veniam ad sit.\r\n",
    "registered": "2017-07-07T12:54:50 -03:00",
    "latitude": 36.295983,
    "longitude": -99.200515,
    "tags": [
      "non",
      "eu",
      "deserunt",
      "exercitation",
      "ipsum",
      "magna",
      "est"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Zelma Roberson"
      },
      {
        "id": 1,
        "name": "Glenna Tillman"
      },
      {
        "id": 2,
        "name": "Marsha Meyers"
      }
    ],
    "greeting": "Hello, Madge Spencer! You have 1 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5971ee1eb251b7c888919dda",
    "index": 1,
    "guid": "21fabc93-f724-4cc4-a960-b902b1d7358c",
    "isActive": true,
    "balance": "$3,450.10",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "blue",
    "name": "Deleon Robles",
    "gender": "male",
    "company": "KYAGORO",
    "email": "deleonrobles@kyagoro.com",
    "phone": "+1 (830) 518-2794",
    "address": "404 Johnson Avenue, Marysville, Washington, 7759",
    "about": "Eu cupidatat voluptate exercitation sint ullamco et tempor eu. Laborum sint pariatur adipisicing deserunt velit velit adipisicing proident veniam ad eiusmod magna commodo. Excepteur adipisicing est excepteur id pariatur exercitation eiusmod cupidatat aliqua dolore. Ad consequat quis aliqua aliquip excepteur sunt consectetur est do labore quis quis in exercitation. Magna veniam sit amet ullamco cupidatat do. Nostrud pariatur commodo minim consequat tempor ad aliquip culpa anim do eiusmod sunt. Ex nisi non sit laboris cupidatat voluptate.\r\n",
    "registered": "2017-02-10T08:42:51 -02:00",
    "latitude": 29.616067,
    "longitude": -161.124213,
    "tags": [
      "anim",
      "elit",
      "quis",
      "qui",
      "sint",
      "veniam",
      "amet"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Ballard Rosario"
      },
      {
        "id": 1,
        "name": "Shelia Crawford"
      },
      {
        "id": 2,
        "name": "Darcy Kirkland"
      }
    ],
    "greeting": "Hello, Deleon Robles! You have 4 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5971ee1e9602c695f8a53413",
    "index": 2,
    "guid": "612b00b7-e22e-4513-8d72-46ea4508d2c8",
    "isActive": false,
    "balance": "$1,399.99",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "brown",
    "name": "Beverley Huff",
    "gender": "female",
    "company": "ARCHITAX",
    "email": "beverleyhuff@architax.com",
    "phone": "+1 (818) 444-3958",
    "address": "975 Polar Street, Roulette, Kentucky, 9291",
    "about": "Qui ex nulla occaecat ut do nostrud commodo proident ea consequat consectetur ullamco ipsum. Proident eiusmod et consequat aliquip sint nulla nulla nulla exercitation laborum fugiat eu amet irure. In ad culpa reprehenderit pariatur ad nostrud voluptate nisi cupidatat aliquip enim nisi quis. Quis exercitation do aliqua reprehenderit enim est ut. Eiusmod aliquip consequat cupidatat adipisicing excepteur cupidatat labore. Adipisicing do aliqua elit magna id ea tempor ad qui mollit ipsum consectetur. Pariatur anim sit officia ex voluptate exercitation consectetur.\r\n",
    "registered": "2015-05-07T05:14:13 -03:00",
    "latitude": -45.257645,
    "longitude": 158.993708,
    "tags": [
      "aliquip",
      "ullamco",
      "dolor",
      "eiusmod",
      "aliquip",
      "officia",
      "ad"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Baird Haney"
      },
      {
        "id": 1,
        "name": "Cruz Morrison"
      },
      {
        "id": 2,
        "name": "Cindy Perkins"
      }
    ],
    "greeting": "Hello, Beverley Huff! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5971ee1e4df3d88bd7955e46",
    "index": 3,
    "guid": "475d5634-1410-4ff2-9855-4daf6fe9c8a9",
    "isActive": false,
    "balance": "$3,517.58",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "brown",
    "name": "Stella Morales",
    "gender": "female",
    "company": "CENTREXIN",
    "email": "stellamorales@centrexin.com",
    "phone": "+1 (853) 485-2982",
    "address": "942 Franklin Avenue, Chesterfield, Virgin Islands, 4853",
    "about": "Sint id minim nostrud anim nulla labore cupidatat in nulla ex consequat voluptate consequat. Reprehenderit Lorem anim laborum elit magna consectetur tempor. Et elit sunt anim ullamco duis culpa nisi cillum laborum Lorem reprehenderit.\r\n",
    "registered": "2017-01-20T03:53:08 -02:00",
    "latitude": -21.286465,
    "longitude": -26.225775,
    "tags": [
      "magna",
      "occaecat",
      "enim",
      "minim",
      "pariatur",
      "ipsum",
      "aliqua"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Lewis Schwartz"
      },
      {
        "id": 1,
        "name": "Elsie Burton"
      },
      {
        "id": 2,
        "name": "Bird Hobbs"
      }
    ],
    "greeting": "Hello, Stella Morales! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5971ee1eeac1034afccad2c3",
    "index": 4,
    "guid": "70087575-449f-41f3-9aac-554c3e441a49",
    "isActive": true,
    "balance": "$1,481.00",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "brown",
    "name": "Fran Dillon",
    "gender": "female",
    "company": "HOUSEDOWN",
    "email": "frandillon@housedown.com",
    "phone": "+1 (824) 567-2884",
    "address": "824 Knapp Street, Caledonia, South Carolina, 1935",
    "about": "Culpa irure exercitation anim excepteur esse. Sint esse mollit dolor esse commodo sit cillum. Et exercitation cillum reprehenderit minim Lorem sunt consectetur. Excepteur deserunt labore et sint. Sint ullamco ipsum qui dolor nulla. Voluptate do ex duis dolore.\r\n",
    "registered": "2016-12-07T01:34:06 -02:00",
    "latitude": 75.976068,
    "longitude": 50.227993,
    "tags": [
      "quis",
      "qui",
      "dolor",
      "sit",
      "laboris",
      "laborum",
      "magna"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Torres Trujillo"
      },
      {
        "id": 1,
        "name": "Letitia Neal"
      },
      {
        "id": 2,
        "name": "Miriam Knox"
      }
    ],
    "greeting": "Hello, Fran Dillon! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5971ee1eebbc22a0eaccf18f",
    "index": 5,
    "guid": "4d5c3b49-4d8d-4caf-bb30-833b9a871bdd",
    "isActive": true,
    "balance": "$3,734.09",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "blue",
    "name": "Janet Merrill",
    "gender": "female",
    "company": "PURIA",
    "email": "janetmerrill@puria.com",
    "phone": "+1 (953) 516-2127",
    "address": "837 Bridgewater Street, Motley, Arizona, 1606",
    "about": "Cillum ea fugiat magna voluptate tempor qui. Incididunt nulla sunt elit nostrud cillum Lorem cillum cupidatat sunt officia anim cillum incididunt. Excepteur deserunt qui consectetur dolore qui occaecat aliquip ad. Aute occaecat excepteur enim deserunt reprehenderit ex irure nulla.\r\n",
    "registered": "2016-04-03T07:45:56 -03:00",
    "latitude": -19.561361,
    "longitude": 151.796919,
    "tags": [
      "irure",
      "cillum",
      "mollit",
      "ipsum",
      "consequat",
      "elit",
      "magna"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Prince Gallagher"
      },
      {
        "id": 1,
        "name": "Francesca Chen"
      },
      {
        "id": 2,
        "name": "Frazier Bradley"
      }
    ],
    "greeting": "Hello, Janet Merrill! You have 9 unread messages.",
    "favoriteFruit": "banana"
  }
])

jsoneditor.render()