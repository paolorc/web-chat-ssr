const calculatePrimesNumbers = (req, res) => {
    try {
        return res.status(200).json({
            totalNumbers: 2,
            primesNumbersList: [1, 2],
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

module.exports = {
    calculatePrimesNumbers
}