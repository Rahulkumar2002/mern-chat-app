const router = require("express").Router();
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
const User = require("../models/User");

// create a new messages : 

router.post("/", async (req, res) => {
    try {
        const newMessage = await Message(req.body);
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    } catch (err) {
        res.status(500).json(err);
    }
});

// find message by messageId :

router.get("/:conversationId", async (req, res) => {
    try {
        const messages = await Message.find({ conversationId: req.params.conversationId });
        !messages && req.status(404).json("Can't be able to find message for this user .");
        res.status(200).json(messages);
    } catch (err) { res.status(500).json("Error from Messages : " + err); }
});

module.exports = router;