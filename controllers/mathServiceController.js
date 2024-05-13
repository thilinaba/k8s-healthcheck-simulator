
exports.getSqrt = async function (req, res, next) {
    const num = req.params.num;
    
    console.log(`Calculating square root of ${num}`);
    const sqrt = Math.sqrt(num);
    res.status(200).json({num: num, sqrt: sqrt});
}