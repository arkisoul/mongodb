const conn = new Mongo("mongodb+srv://learning:learning123@learning.zejua.mongodb.net");
const db = conn.getDB("mongodb");
db.users.insertOne({
    name: 'Arpit Jain',
    phone: 9877543210,
    email: "arpit.jain@mailinator.com"
})