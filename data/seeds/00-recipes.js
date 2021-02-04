exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, name: "Spagetti Bologense" },
        { id: 2, name: "Fettuchini Alfredo" },
        { id: 3, name: "Penne Arabiatta" },
      ]);
    });
};
