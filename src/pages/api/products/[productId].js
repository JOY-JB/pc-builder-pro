const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nzciw.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  const { productId } = req.query;

  try {
    await client.connect();

    const productsCollection = await client
      .db("pc-builder-pro")
      .collection("products");

    if (req.method === "GET") {
      const products = await productsCollection.findOne({ id: productId });

      res.send({ message: "success", statusCode: 200, data: products });
    }
  } finally {
    // await client.close();
  }
}

export default run;
