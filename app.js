const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://127.0.0.1:27017";

  const client = new MongoClient(uri);

  try {
    await client.connect();
    // await createListing(client, {
    //   name: "Lovely Loft",
    //   summary: "A charming loft in Paris",
    //   bedrooms: 1,
    //   bathrooms: 1,
    // });
    await findOneListingByName(client, "Lovely Loft");
  } catch (e) {
    console.error(e);
  } finally {
    setTimeout(() => {
      client.close();
    }, 1500);
  }
}

main().catch(console.error);

async function findOneListingByName(client, nameOfListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .findOne({ name: nameOfListing });
  if (result) {
    console.log(result);
  } else {
    console.log("no listing found");
  }
}

async function createListing(client, newListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .insertOne(newListing);

  console.log(`new listing created with following id: ${result.insertedId}`);
}

async function listDatabases(client) {
  client
    .db()
    .admin()
    .listDatabases(function (err, dbs) {
      dbs.databases.forEach((db) => {
        console.log(`- ${db.name}`);
      });
    });
}
