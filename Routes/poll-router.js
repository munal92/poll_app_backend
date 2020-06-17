const express = require("express");
const router = express.Router();
const DB = require("./poll-model.js");
const shortid = require("shortid");
const ip = require("ip");

router.get("/:id", async (req, res) => {
  const { id } = req.params; /// Poll Session id

  console.log("get Poll ", id);
  try {
    const Allpoll = await DB.getPollById(id);

    //console.log("location_ip:", ip.address());
    if (Allpoll && Allpoll.id) {
      res.status(200).json(Allpoll);
    }
  } catch (err) {
    res.status(404).json({ error: "Couldnt find the poll id", err: err });
  }
});

router.post("/createpoll", async (req, res) => {
  //const { id } = req.params; /// Poll Session id
  const nwPoll = req.body;

  const editedPoll = {
    poll_link: shortid.generate(),
    poll_question: nwPoll.poll_question,
    location_ip: "00.000",
  };
  //console.log("create Poll ", id);
  try {
    Allpoll = await DB.addPoll(editedPoll);
    // console.log("new Poll req ", Allpoll);
    if (Allpoll) {
      // console.log("1");
      res.status(200).json(Allpoll);
    }
  } catch (err) {
    //  console.log("3");
    res.status(404).json({ error: "Couldnt add the poll ", err: err });
  }
});

router.post("/createanswer", async (req, res) => {
  // const { id } = req.params; /// Poll Session id
  const nwPoll = req.body;

  const editedPoll = {
    poll_answer: nwPoll.poll_answer,
    answer_count: 0,
    poll_id: nwPoll.poll_id || 2,
    order_id: nwPoll.order_id,
  };

  console.log("createAnswer", editedPoll);

  try {
    Allpoll = await DB.addPollAnswer(editedPoll);
    // console.log("new PollAns req ", Allpoll);
    if (Allpoll) {
      res.status(200).json(Allpoll);
    }
  } catch (err) {
    res.status(404).json({ error: "Couldnt add the answer ", err: err });
  }
});

router.put("/answer/:id", async (req, res) => {
  const { id } = req.params; /// Poll Session id & question id

  try {
    Allpoll = await DB.updateAnswer(id);
    // console.log("new PollAns req ", Allpoll);
    if (Allpoll) {
      res.status(200).json(Allpoll);
    }
  } catch (err) {
    res.status(404).json({ error: "Couldnt update the answer ", err: err });
  }
  //console.log("ans id: ", id);
});

// router.get("/hepsi/bir", async (req, res) => {
//   //const { id } = req.params; /// Poll Session id

//   try {
//     const Allpoll = await DB.getAllPoll();
//     console.log("AllPoll", Allpoll, Allpoll.id);
//     //console.log("location_ip:", ip.address());
//     if (Allpoll) {
//       res.status(200).json(Allpoll);
//     }
//   } catch (err) {
//     res.status(404).json({ error: "Couldnt find the poll id", err: err });
//   }
// });
module.exports = router;
