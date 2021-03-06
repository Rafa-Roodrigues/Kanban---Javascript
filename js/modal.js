const buttonCreateTask = document.querySelector("#container-button-create-task button");
const modal = document.getElementById("modal");
const date = document.getElementById("date-finish-task");
const description = document.getElementById("description-task");

// function createForm () {
//   const form = `
//     <form id="form-create-task">
//       <h2 id="form-title">Criar Tarefa</h2>
//       <p id="warning">Campos com * são obrigatórios</p>

//       <label for="">
//         <p>Data criação</p>
//         <input class="input" type="text" id="date-created-task" readonly>
//       </label>

//       <label for="">
//         <p class="field-required">Data para finalizar a tarefa</p>
//         <input name="data" placeholder="" class="input" type="date" id="date-finish-task">
//       </label>

//       <label for="">
//         <p class="field-required">Descrição da tarefa</p>
//         <textarea name="data" placeholder="Ex: javascript é da hora demaaais..." id="description-task"></textarea>
//       </label>

//       <button id="button-create-task" type="submit">Criar</button>
//     </form>
//   `;

//   return form;
// }

export function openCloseModal(status) {
  if(status) {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
    clearModal();
  }
}

function clearModal() {
  date.style.borderColor = "#ffffff";
  description.style.borderColor = "#ffffff";
  date.value="";
  description.value="";

  const errorBoxOfFieldDate = date.nextElementSibling;
  const errorBoxOfFieldDescription = description.nextElementSibling;
  
  if(errorBoxOfFieldDate) {
    errorBoxOfFieldDate.remove();
  }

  if(errorBoxOfFieldDescription) {
    errorBoxOfFieldDescription.remove();
  }
}

buttonCreateTask.addEventListener("click", () => openCloseModal(true));
modal.addEventListener("click", (e) => {
  if(e.target.id == "modal") {
    openCloseModal(false);
  }
});