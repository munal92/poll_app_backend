exports.seed = function (knex) {
  return knex("poll_answers").insert([
    {
      poll_answer: "Kobe Bryant",
      answer_count: 1,
      poll_id: 1,
    },
    {
      poll_answer: "Michael Jordan",
      answer_count: 4,
      poll_id: 1,
    },
    {
      poll_answer: "Lebron James",
      answer_count: 6,
      poll_id: 1,
    },
    {
      poll_answer: "Popeyes",
      answer_count: 2,
      poll_id: 2,
    },
    {
      poll_answer: "McDonald's",
      answer_count: 3,
      poll_id: 2,
    },
    {
      poll_answer: "Taco Bell",
      answer_count: 1,
      poll_id: 2,
    },
    {
      poll_answer: "Burger King",
      answer_count: 5,
      poll_id: 2,
    },
    {
      poll_answer: "KFC",
      answer_count: 1,
      poll_id: 2,
    },
    {
      poll_answer: "BasketBall",
      answer_count: 1,
      poll_id: 3,
    },
    {
      poll_answer: "Soccer",
      answer_count: 6,
      poll_id: 3,
    },
  ]);
};
