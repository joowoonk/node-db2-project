exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "NRW13AKENS99",
          make: "Hyundai",
          model: "Sonata",
          mileage: 250000,
        },
        { VIN: "4SAD128SD", make: "Honda", model: "Civic", mileage: 400000 },
        { VIN: "1489DSJAB", make: "Toyota", model: "Corolla", mileage: 220000 },
      ]);
    });
};
