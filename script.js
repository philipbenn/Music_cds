const form = document.querySelector("form");
const cdList = document.getElementById("cd-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const author = document.getElementById("author").value.trim();
  const title = document.getElementById("title").value.trim();
  const year = document.getElementById("year").value.trim();

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
