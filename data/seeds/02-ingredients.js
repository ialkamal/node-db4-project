exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "water" },
        { id: 2, name: "pasta" },
        { id: 3, name: "tomato sauce" },
        { id: 4, name: "cumin" },
        { id: 5, name: "garlic" },
      ]);
    });
};
