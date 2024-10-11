const yakService = require("../services/yakservices");

const getStock = (req, res, next) => {
  try {
    const { days } = req.params;
    // Check if days is a valid number
    const parsedDays = Number(days);
    if (isNaN(parsedDays) || parsedDays < 0) {
      return res
        .status(400)
        .json({ error: "Invalid 'days' parameter. Must be a non-negative number." });
    }

    const stock = yakService.calculateStock(parsedDays);
    res.json(stock);
  } catch (error) {
    next(error); // Passing the error to the error handler
  }
};

const getHerd = (req, res, next) => {
  try {
    const { days } = req.params;
    // Check if days is a valid number
    const parsedDays = Number(days);
    if (isNaN(parsedDays) || parsedDays < 0) {
      return res
        .status(400)
        .json({ error: "Invalid 'days' parameter. Must be a non-negative number." });
    }

    const herd = yakService.calculateHerd(parsedDays);
    res.json({ herd });
  } catch (error) {
    next(error); // Passing the error to the error handler
  }
};

module.exports = {
  getStock,
  getHerd,
};
