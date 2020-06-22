const db = require("../database/db-config.js");

function getAllPoll() {
  return db("poll_detail");
}

async function getPollById(id) {
  try {
    let [poll] = await db("poll_detail").where({ poll_link: id });
    let answers = await db("poll_answers").where({ poll_id: poll.id });
    poll.answers = answers;

    return poll;
  } catch (err) {
    throw err;
  }
}

function findPollById(id) {
  return db("poll_detail").where("id", id);
}

function addPoll(nwPoll) {
  return db("poll_detail")
    .insert(nwPoll)
    .returning("id")
    .then(([res]) => {
      return findPollById(res);
    });
}

function findAnswerById(id) {
  return db("poll_answers").where("id", id);
}

function addPollAnswer(nwPoll) {
  return db("poll_answers")
    .insert(nwPoll)
    .returning("id")
    .then(([res]) => {
      return findAnswerById(res);
    });
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
  findAnswerById,
};
