const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json({
		message:`Welcome ${process.env.ALL}`,
		fact: process.env.FUN_FACT || "Dogs can fly",
	})
})

module.exports = router
