let pokemonList = [
  { name: "Squirtle", height: "0.5", types: ["water"] },
  { name: "Dugtrio", height: "0.7", types: ["ground"] },
  { name: "Machop", height: "0.8", types: ["fighting"] },
  { name: "Eevee", height: "0.3", types: ["normal"] },
  { name: "Slowbro", height: "1.6", types: ["psychic", "water"] },
];

//iterate over and log pokemonList
for (let i = 0; i <= pokemonList.length; i++) {
  //add height conditions
  if (pokemonList[i].height > 1) {
    document.write(
      `${pokemonList[i].name} height(${pokemonList[i].height}) - Wow, that's big!` +
        "<br>"
    );
  } else {
    document.write(
      `${pokemonList[i].name} height(${pokemonList[i].height})` + "<br>"
    );
  }
}
