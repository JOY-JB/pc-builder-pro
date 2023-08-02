import { categoryLink } from "@/assets/commonData/categoryLink";

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
  const { category } = req.query;

  const getCategoryNameFromLink = (link) => {
    const categoryName = Object.keys(categoryLink).find(
      (key) => categoryLink[key] === link
    );
    return categoryName || link;
  };

  const categoryName = getCategoryNameFromLink(category);

  try {
    await client.connect();

    const productsCollection = await client
      .db("pc-builder-pro")
      .collection("products");

    if (req.method === "GET") {
      const products = await productsCollection
        .find({
          category: categoryName,
        })
        .toArray();

      res.send({ message: "success", statusCode: 200, data: products });
    }
  } finally {
    // await client.close();
  }
}

export default run;
