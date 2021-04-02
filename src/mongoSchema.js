const MongoClient = require('mongodb').MongoClient

const client = new MongoClient("mongodb://localhost:27017/applogs", {useUnifiedTopology: true})

module.exports = {
    collection: (collection) => client.db('applogs').collection(collection),

    connect: async () => await client.connect(),

    disconnect: async () => await client.close(),

    clearCollection: async (collection) => await client.db('applogs').collection(collection).removeMany({})
}