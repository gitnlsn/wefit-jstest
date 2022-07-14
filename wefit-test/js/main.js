const solveLista = () => {
  const listGroup = document.getElementsByClassName("list-group")[0];
  for (let index = 0; index < listGroup.children.length; index++) {
    listGroup.children[index].classList.remove("active");
  }

  const newLi4 = document.createElement("li");
  newLi4.classList.add("list-group-item");
  newLi4.classList.add("active");
  newLi4.innerHTML = "Quarto item";
  listGroup.appendChild(newLi4);

  const newLi5 = document.createElement("li");
  newLi5.classList.add("list-group-item");
  newLi5.innerHTML = "Quinto item";
  listGroup.appendChild(newLi5);
};
solveLista();

const solveMenu = () => {
  const menuGroup = document.querySelector(
    '[aria-label="Vertical button group"]'
  );
  menuGroup.classList.remove("btn-group-vertical");
  menuGroup.classList.add("btn-group-horizontal");
};
solveMenu();

const solveHeader = () => {
  const headerItems = document.getElementsByClassName("jumbotron")[0];
  for (let index = 0; index < headerItems.children.length - 1; index++) {
    headerItems.children[index].classList.add("text-light");
  }
  headerItems.classList.add("bg-secondary");
  headerItems.children[4].classList.remove("btn-primary");
  headerItems.children[4].classList.add("btn-success");
};
solveHeader();

const solveCards = () => {
  const row = document.getElementsByClassName("row")[2];
  const animaisChild = row.children[1];
  const technologiaChild = row.children[2];
  const pessoasChild = row.children[3];
  const naturezaChild = row.children[4];

  row.removeChild(animaisChild);
  row.removeChild(technologiaChild);
  row.removeChild(pessoasChild);
  row.removeChild(naturezaChild);

  row.appendChild(naturezaChild);
  row.appendChild(animaisChild);
  row.appendChild(pessoasChild);
  row.appendChild(technologiaChild);

  const animalCardBody = document.getElementsByClassName("card-body")[1];
  const animalCardButton = animalCardBody.children[2];
  animalCardButton.classList.remove("btn-primary");
  animalCardButton.classList.add("btn-success");
};
solveCards();
