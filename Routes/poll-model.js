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

function findPollById(id) {
  console.log("ekledi find id", id);

  return db("poll_detail").where("id", id);
}

function addPoll(nwPoll) {
  console.log("ekledi", nwPoll);
  return db("poll_detail")
    .insert(nwPoll)
    .then((res) => {
      return findPollById(res[0]);
      // .then((a) => {
      //   return a;
      // });
    });

  // try {
  //   let [poll] = await db("poll_detail").insert(nwPoll);
  //   if (poll) {
  //     console.log("ekledi poll", nwPoll);
  //     nwPoll.id = poll;
  //     return nwPoll;
  //   }
  // } catch (err) {
  //   console.error("error add ic ", err);
  //   throw err;
  // }
}

function addPollAnswer(nwPoll) {
  //console.log(id);
  return db("poll_answers")
    .insert(nwPoll)
    .then(([res]) => {
      return db("poll_answers").where({ id: res });
      // .then((a) => {
      //   return a;
      // });
    });
  // try {
  //   let [poll] = await db("poll_answers").insert(nwPoll);
  //   if (poll) {
  //     nwPoll.id = poll;
  //     return nwPoll;
  //   }
  // } catch (err) {
  //   //console.error("cath ");
  //   throw err;
  // }
}

async function updateAnswer(id) {
  try {
    let poll = await db("poll_answers")
      .where({ id: id })
      .increment("answer_count", 1);

    if (poll) {
      return poll;
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
  updateAnswer,
  findPollById,
};
