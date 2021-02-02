import products from "../../src/data/products.json";
const getListOfProducts = (req, res) => {
  res.status(200).json(products);
};
export default getListOfProducts;
