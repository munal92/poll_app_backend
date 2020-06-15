const db = require("../database/db-config.js");

function getAllPoll() {
  return db("poll_detail");
}

async function getPollById(id) {
  //console.log(id);

  try {
    let [poll] = await db("poll_detail").where({ poll_link: id });
    let answers = await db("poll_answers").where({ poll_id: poll.id });
    poll.answers = answers;
    // console.log("try ", poll);
    return poll;
  } catch (err) {
    //console.error("cath ");
    throw err;
  }
}

async function addPoll(nwPoll) {
  //console.log(id);
  try {
    let [poll] = await db("poll_detail").insert(nwPoll);
    if (poll) {
      nwPoll.id = poll;
      return nwPoll;
    }
  } catch (err) {
    //console.error("cath ");
    throw err;
  }
}

async function addPollAnswer(nwPoll) {
  //console.log(id);
  try {
    let [poll] = await db("poll_answers").insert(nwPoll);
    if (poll) {
      nwPoll.id = poll;
      return nwPoll;
    }
  } catch (err) {
    //console.error("cath ");
    throw err;
  }
}

module.exports = {
  getAllPoll,
  getPollById,
  addPoll,
  addPollAnswer,
};
