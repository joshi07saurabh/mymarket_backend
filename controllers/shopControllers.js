const Shop = require("../modals/shop");

exports.getAllShops = async (req, res) => {
  console.log("getAllShops");
  res.send("all shops");
};

exports.getShopById = async (req, res) => {
  const shopId = req.params.shopId;
  res.send(`shop with id ${shopId}`);
};

exports.createShop = async (req, res) => {
  try {
    const newShop = req.body;
    const shop = await Shop.create(newShop);
    res.status(200).send({
      data: shop,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Server Error",
    });
  }
};
