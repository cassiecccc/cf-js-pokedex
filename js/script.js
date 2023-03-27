let pokemonList = [
  { name: "Squirtle", height: "0.5", types: ["water"] },
  { name: "Dugtrio", height: "0.7", types: ["ground"] },
  { name: "Machop", height: "0.8", types: ["fighting"] },
  { name: "Eevee", height: "0.3", types: ["normal"] },
  { name: "Slowbro", height: "1.6", types: ["psychic", "water"] },
];

//changed for loop to forEach
pokemonList.forEach((pokemon) =>
  pokemon.height > 1
    ? document.write(
        "<p>" +
          pokemon.name +
          " " +
          "(height" +
          " " +
          pokemon.height +
          ")" +
          " " +
          "Wow, that's big!" +
          "</p>"
      )
    : document.write(
        "<p>" + pokemon.name + " " + "(height" + " " + pokemon.height + ")"
      ) + "</p>"
);
