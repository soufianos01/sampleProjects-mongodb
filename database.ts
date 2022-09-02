import { MongoClient } from 'mongodb';

async function main(): Promise<void> {
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

async function findOneListingByName(client: MongoClient, nameOfListing: string): Promise<void> {
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
