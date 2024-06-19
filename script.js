document.addEventListener("DOMContentLoaded", function () {
  let saldoTotal = 0;
  const saldoElement = document.querySelector(".saldo h1");
  saldoElement.textContent = `R$${saldoTotal.toFixed(2)}`;

  const modal = document.getElementById("myModal");
  const btn = document.getElementById("open-modal-btn");
  const span = document.querySelector(".close-button");
  const form = document.getElementById("addForm");

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  form.onsubmit = function (event) {
    event.preventDefault();

    const descricao = document.getElementById("descricao").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const tipoTransacao = document.getElementById("tipo-transacao").value;
    const categoriaTransacao = document.getElementById(
      "categoria-transacao"
    ).value;

    console.log("Descrição:", descricao);
    console.log("Valor:", valor);
    console.log("Tipo de Transação:", tipoTransacao);
    console.log("Categoria de Transação:", categoriaTransacao);

    const itemContainer = document.querySelector(".display-recentes");

    const newItem = document.createElement("div");
    newItem.classList.add("itens");

    const icon = document.createElement("i");
    icon.classList.add("fa-solid");
    if (tipoTransacao === "entrada") {
      icon.classList.add("fa-arrow-up");
      saldoTotal += valor;
    } else {
      icon.classList.add("fa-arrow-down");
      saldoTotal -= valor;
    }

    const itemText = document.createElement("p");
    itemText.textContent = `${descricao}, R$${valor.toFixed(2)}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.classList.add("delete-button");

    deleteButton.onclick = function () {
      if (tipoTransacao === "entrada") {
        saldoTotal -= valor;
      } else {
        saldoTotal += valor;
      }
      saldoElement.textContent = `R$${saldoTotal.toFixed(2)}`;
      newItem.remove();
    };

    newItem.appendChild(icon);
    newItem.appendChild(itemText);
    newItem.appendChild(deleteButton);

    itemContainer.appendChild(newItem);

    saldoElement.textContent = `R$${saldoTotal.toFixed(2)}`;

    form.reset();

    modal.style.display = "none";
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const greetingText = document.getElementById("greeting-text");
  const currentHour = new Date().getHours();

  if (currentHour >= 6 && currentHour < 12) {
    greetingText.textContent = "Olá, Bom dia!";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingText.textContent = "Olá, Boa tarde!";
  } else {
    greetingText.textContent = "Olá, Boa noite!";
  }
});
