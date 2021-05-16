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
                "status": "ok"
            },
            {
                "term": "apple",
                "definition": "pomme",
                "status": "semi"
            },
            {
                "term": "peach",
                "definition": "pêche",
                "status": "none"
            },

        ]
    },
    {
        "title": "Unit 3: Vocabulary",
        "author": "Isabelle la pute",
        "tags": ["Anglais","Ecole"],
        "cards": [
            {
                "term": "Dish",
                "definition": "Plat",
                "status": "ok"
            },
            {
                "term": "The place of the women",
                "definition": "In the kitchen",
                "status": "ok"
            },
            {
                "term": "Rock",
                "definition": "Pierre",
                "status": "semi"
            },
            {
                "term": "Meat",
                "definition": "viande",
                "status": "none"
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

