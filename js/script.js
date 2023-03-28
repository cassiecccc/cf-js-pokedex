let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Squirtle", height: "0.5", types: ["water"] },
    { name: "Dugtrio", height: "0.7", types: ["ground"] },
    { name: "Machop", height: "0.8", types: ["fighting"] },
    { name: "Eevee", height: "0.3", types: ["normal"] },
    { name: "Slowbro", height: "1.6", types: ["psychic", "water"] },
    { name: "Psyduck", height: "0.8", type: ["water"] },
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  //update DOM
  function addListItem(pokemon) {
    const pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.classList.add("name-button");
    button.innerText = pokemon.name;
    listItem.appendChild(button);
    clickButton(button, pokemon);
    pokemonList.appendChild(listItem);
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  //click function
  function clickButton(button, pokemon) {
    button.addEventListener("click", () => {
      pokemonRepository.showDetails(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  };
})();

pokemonRepository.getAll().forEach((pokemon) => {
  pokemonRepository.addListItem(pokemon);
});
