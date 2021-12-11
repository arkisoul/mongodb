# Mongodb Shell Commands

## Helper commands
- `db` Prints the current selected database name
- `show databases` to show the list of databases in the connected mongodb server
- `use db` to select a db or create a db if not exist
- `show collections` to show the list of collections in the current db

## CRUD Operations
### CREATE (Insert) Operation
- insertOne (To insert a single document in a collection)
eg 
```
db.<collection_name>.insertOne({})
db.patients.insertOne({
    name: "Patient name",
    gender: "Male",
    dob: "12-12-1990"
})
```
- insertMany (To insert multiple documet in a collection)
eg
```
db.<collection_name>.insertMany([{}, {}])
db.patients.insertMany([
    {
        name: "Patient name",
        gender: "Male",
        dob: "12-12-1990"
    },
    {
        name: "Another Patient name",
        gender: "Male",
        dob: "12-12-1990"
    },
])
```

### READ operation
- find (To retrieve data from a collection)
eg
```
db.<collection_name>.find();
db.patients.find();
```

We can provide an optional query/filter paramter to the find function.
eg
```
db.patients.find({
    name: "Ramcharan Gupta"
})
```

### Update operation
- updateOne (Updates a single document. If there are multiple matching documents, it will update only first matching document)
eg
```
db.<collection_name>.updateOne({filter_query}, {updated data}, {options})
db.patients.updateOne({gender: 'male'}, {$set: { weight: 66}}, {$upsert: true})
```
- updateMany (Updates multiple documents that matche the condition/filter query)
eg
```
db.<collection_name>.updateMany({filter_query}, {updated data}, {options})
db.patients.updateMany({gender: 'male'}, {$set: { weight: 66}}, {$upsert: true})
```

### Delete operation
- deleteOne
- deleteMany

findAndModify
findOneAndUpdate
replaceOne
findOneAndReplace
findOneAndDelete