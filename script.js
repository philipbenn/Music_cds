const form = document.querySelector("form");
const cdList = document.getElementById("cd-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const author = document.getElementById("author").value.trim();
  const title = document.getElementById("title").value.trim();
  const year = document.getElementById("year").value.trim();

  if (localStorage.getItem("cds") === null) {
    localStorage.setItem("cds", JSON.stringify([]));
  }
  const cds = JSON.parse(localStorage.getItem("cds"));
  cds.push({ author, title, year });
  localStorage.setItem("cds", JSON.stringify(cds));

  const newRow = `<tr>
				<td>${author}</td>
				<td>${title}</td>
				<td>${year}</td>
				<td><button class="delete-btn">Delete</button></td>
			</tr>`;
  cdList.innerHTML += newRow;

  form.reset();
});

cdList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest("tr").remove();
  }
});

window.addEventListener("load", function () {
  if (localStorage.getItem("cds") !== null) {
    const cds = JSON.parse(localStorage.getItem("cds"));
    cds.forEach(function (cd) {
      const row = `<tr>
          <td>${cd.author}</td>
          <td>${cd.title}</td>
          <td>${cd.year}</td>
          <td><button class="delete-btn">Delete</button></td>
        </tr>`;
      cdList.innerHTML += row;
    });
  }
});
