let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  //load list
  function loadList() {
    return fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        json.results.forEach((item) => {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  //load details
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then((respnose) => {
        return respnose.json();
      })
      .then((details) => {
        item.order = details.order;
        item.height = details.height;
        item.types = details.types;
        item.name = details.name;
        item.url = details.sprites.front_default;
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function addListItem(pokemon) {
    const pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    let button = document.createElement("button");
    button.classList.add("name-button");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.classList.add("btn-lg");

    button.type = "button";
    button.innerText = pokemon.name;
    listItem.appendChild(button);
    openModal(button, pokemon);
    pokemonList.appendChild(listItem);
  }

  //show modal
  function showDetails(pokemon) {
    loadDetails(pokemon).then(() => {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    const modalName = document.querySelector("#modal-name");
    const modalHeight = document.querySelector("#modal-height");
    const modalImage = document.querySelector("#modal-image");
    modalName.innerText = `Name: ${pokemon.name}`;
    modalHeight.innerText = `Height: ${pokemon.height}`;
    modalImage.src = `${pokemon.url}`;
  }

  //click function
  const modalContainer = document.querySelector(".modal");

  function openModal(button, pokemon) {
    button.addEventListener("click", () => {
      showDetails(pokemon);
      modalContainer.classList.add("is-visible");
    });
  }

  // closeModal
  function closeModal() {
    const closeButton = document.querySelector(".btn-close");
    closeButton.addEventListener("click", () => {
      if (modalContainer.classList.contains("is-visible")) {
        modalContainer.classList.remove("is-visible");
      }
    });
    window.addEventListener("keydown", (e) => {
      if (
        e.key === `Escape` &&
        modalContainer.classList.contains("is-visible")
      ) {
        modalContainer.classList.remove("is-visible");
      }
    });
  }

  closeModal();

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(() => {
  pokemonRepository.getAll().forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon);
  });
});
