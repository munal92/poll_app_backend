exports.seed = function (knex) {
  return knex("poll_detail").insert([
    {
      poll_link: "12345",
      poll_question: "Who is the best basketball player of all time?",
      location_ip: "109.234.12",
    },
    {
      poll_link: "09876",
      poll_question: "Best fast-food restaurant?",
      location_ip: "109.234.12",
    },
    {
      poll_link: "5678",
      poll_question: "What's your favorite Sport?",
      location_ip: "109.234.12",
    },
  ]);
};
