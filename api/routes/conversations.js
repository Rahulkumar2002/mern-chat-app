const router = require("express").Router();
const Conversation = require("../models/Conversation");

// Create a conversastion :

router.post("/", async (req, res) => {
    try {
        let newConversation = {};
        if (req.body.senderId === req.body.receiverId) {
            res.status(403).json("Sender and Receiver should be different users")
        } else {
            newConversation = await new Conversation({
                members: [req.body.senderId, req.body.receiverId]
            })
        }
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
    } catch (err) { res.status(500).json("Error from conversations :" + err); }
});


// Get a conversastion by userId :
router.get("/:userId", async (req, res) => {
    try {
        const conversation = await Conversation.find({
            members: { $in: [req.params.userId] },
        })

        !conversation && res.status(404).json("Conversation doesn't exits");

        res.status(200).json(conversation);
    } catch (err) {
        res.status(500).json("Error from get conversation : " + err)
    }
})

// Delete a conversation of user via conversation id : 
router.delete("/:conversationId", async (req, res) => {
    try {
        await Conversation.findByIdAndDelete(req.params.conversationId);
        res.status(200).json("Conversation has been successfully deleted");
    } catch (err) {
        req.status(500).json(err);
    }
});

module.exports = router;