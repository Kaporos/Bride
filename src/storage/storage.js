import { writable } from 'svelte/store'

let tmpCollections = [
    {
        "title": "Unit 2: Vocabulary",
        "author": "Théo Daron",
        "tags": ["Anglais","Ecole","Relou"],
        "cards": [
            {
                "term": "table",
                "definition": "table",
                "points": 15
            },
            {
                "term": "apple",
                "definition": "pomme",
                "points": 8
            },
            {
                "term": "peach",
                "definition": "pêche",
                "points": 1
            },

        ]
    },
    {
        "title": "Unit 3: Vocabulary",
        "author": "Isabelle Noel",
        "tags": ["Anglais","Ecole"],
        "cards": [
            {
                "term": "Dish",
                "definition": "Plat",
                "points": 8
            },
            {
                "term": "The place of the women",
                "definition": "In the kitchen",
                "points": 15
            },
            {
                "term": "Rock",
                "definition": "Pierre",
                "points": 9
            },
            {
                "term": "Meat",
                "definition": "viande",
                "points": 14
            },

        ]
    },
    {
        "title": "Unit 3: Vocabulary",
        "author": "Isabelle Noel",
        "tags": ["Anglais","Ecole"],
        "cards": [
            {
                "term": "Dish",
                "definition": "Plat",
                "points": 8
            },
            {
                "term": "The place of the women",
                "definition": "In the kitchen",
                "points": 15
            },
            {
                "term": "Rock",
                "definition": "Pierre",
                "points": 9
            },
            {
                "term": "Meat",
                "definition": "viande",
                "points": 14
            },

        ]
    },
    {
        "title": "Unit 3: Vocabulary",
        "author": "Isabelle Noel",
        "tags": ["Anglais","Ecole"],
        "cards": [
            {
                "term": "Dish",
                "definition": "Plat",
                "points": 8
            },
            {
                "term": "The place of the women",
                "definition": "In the kitchen",
                "points": 15
            },
            {
                "term": "Rock",
                "definition": "Pierre",
                "points": 9
            },
            {
                "term": "Meat",
                "definition": "viande",
                "points": 14
            },

        ]
    },
    {
        "title": "Unit 3: Vocabulary",
        "author": "Isabelle Noel",
        "tags": ["Anglais","Ecole"],
        "cards": [
            {
                "term": "Dish",
                "definition": "Plat",
                "points": 8
            },
            {
                "term": "The place of the women",
                "definition": "In the kitchen",
                "points": 15
            },
            {
                "term": "Rock",
                "definition": "Pierre",
                "points": 9
            },
            {
                "term": "Meat",
                "definition": "viande",
                "points": 14
            },

        ]
    },
    {
        "title": "Unit 3: Vocabulary",
        "author": "Isabelle Noel",
        "tags": ["Anglais","Ecole"],
        "cards": [
            {
                "term": "Dish",
                "definition": "Plat",
                "points": 8
            },
            {
                "term": "The place of the women",
                "definition": "In the kitchen",
                "points": 15
            },
            {
                "term": "Rock",
                "definition": "Pierre",
                "points": 9
            },
            {
                "term": "Meat",
                "definition": "viande",
                "points": 14
            },

        ]
    },
    {
        "title": "Unit 3: Vocabulary",
        "author": "Isabelle Noel",
        "tags": ["Anglais","Ecole"],
        "cards": [
            {
                "term": "Dish",
                "definition": "Plat",
                "points": 8
            },
            {
                "term": "The place of the women",
                "definition": "In the kitchen",
                "points": 15
            },
            {
                "term": "Rock",
                "definition": "Pierre",
                "points": 9
            },
            {
                "term": "Meat",
                "definition": "viande",
                "points": 14
            },

        ]
    },
    {
        "title": "Unit 3: Vocabulary",
        "author": "Isabelle Noel",
        "tags": ["Anglais","Ecole"],
        "cards": [
            {
                "term": "Dish",
                "definition": "Plat",
                "points": 8
            },
            {
                "term": "The place of the women",
                "definition": "In the kitchen",
                "points": 15
            },
            {
                "term": "Rock",
                "definition": "Pierre",
                "points": 9
            },
            {
                "term": "Meat",
                "definition": "viande",
                "points": 14
            },

        ]
    },

]


export function save(data) {
    localStorage.setItem("brite", JSON.stringify(data))
}

function getData() {
    let data = localStorage.getItem("brite")
    if (data === null) {
        save(tmpCollections)
        return getData()
    }
    return JSON.parse(data)
}




export const collectionsStorage = writable(getData())

