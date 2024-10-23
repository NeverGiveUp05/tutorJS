import { getAllUser, deleteUser, addUser, getUserById, UpdateUser } from "./services.js";

const app = {
    renderListUser: async function () {
        const data = await getAllUser();

        const trList = data
            ?.map((item, index) => {
                return `
                    <tr>
                        <th scope="row">${item.id}</th>
                        <td>${item.username}</td>
                        <td><img width='30' height='30' src="${item.avatar}" alt=""></td>
                        <td>${item.age}</td>
                        <td>${item.note}</td>
                        <td>
                            <button data-id="${item.id}" class="btn_edit btn btn-warning">Sua</button>

                            <button data-id="${item.id}" class="btn_delete btn btn-danger">Xoa</button>
                        </td>
                    </tr>
            `;
            })
            .join("");

        const tbodyElement = document.querySelector("tbody");
        tbodyElement.innerHTML = trList;

        this.handleDeleteUser();
        this.handleEditUser();
    },

    handleDeleteUser: function () {
        const btnDeletes = document.querySelectorAll(".btn_delete");

        btnDeletes.forEach((item, index) => {
            item.addEventListener("click", async () => {
                const id = item.dataset.id;

                if (window.confirm("Are you sure you want to delete")) {
                    await deleteUser(id);

                    alert("Xoa thanh cong");
                }
            });
        });
    },

    renderAddUser: function () {
        const btnAdd = document.getElementById("btn_add");
        btnAdd.addEventListener("click", () => {
            const content = document.getElementById("content");

            content.innerHTML = `
            <form id="form">
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" />
                </div>

                <div class="mb-3">
                    <label for="avatar" class="form-label">Avatar</label>
                    <input type="text" class="form-control" id="avatar" />
                </div>

                <div class="mb-3">
                    <label for="age" class="form-label">Age</label>
                    <input type="number" class="form-control" id="age" />
                </div>

                <div class="mb-3">
                    <label for="note" class="form-label">Note</label>
                    <input type="text" class="form-control" id="note" />
                </div>
               
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            `;

            const formAdd = document.getElementById("form");

            formAdd.addEventListener("submit", (event) => {
                event.preventDefault();
                this.handleAddUser();
            });
        });
    },

    handleAddUser: async function () {
        const inputUsername = document.getElementById("username");
        const inputAvatar = document.getElementById("avatar");
        const inputAge = document.getElementById("age");
        const inputNote = document.getElementById("note");

        if (!inputUsername.value.trim()) {
            alert("Please enter a username");
            inputUsername.focus();
            return;
        }

        if (!inputAvatar.value.trim()) {
            alert("Please enter a avatar");
            inputAvatar.focus();
            return;
        }

        if (!inputAge.value.trim()) {
            alert("Please enter a age");
            inputAge.focus();
            return;
        }

        const data = {
            username: inputUsername.value,
            avatar: inputAvatar.value,
            age: inputAge.value,
            note: inputNote.value,
        };

        await addUser(data);
        alert("Them thanh cong");
    },

    handleEditUser: function () {
        const btnEdits = document.querySelectorAll(".btn_edit");

        btnEdits.forEach((item) => {
            item.addEventListener("click", async () => {
                const id = item.getAttribute("data-id");

                const data = await getUserById(id);

                const content = document.getElementById("content");

                content.innerHTML = `
            <form id="form">
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" value="${data.username}" />
                </div>

                <div class="mb-3">
                    <label for="avatar" class="form-label">Avatar</label>
                    <input type="text" class="form-control" id="avatar"
                    value="${data.avatar}" />
                </div>

                <div class="mb-3">
                    <label for="age" class="form-label">Age</label>
                    <input type="number" class="form-control" id="age" value="${data.age}"/>
                </div>

                <div class="mb-3">
                    <label for="note" class="form-label">Note</label>
                    <input type="text" class="form-control" id="note"  value="${data.note}"/>
                </div>
               
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            `;

                const formEdit = document.getElementById("form");
                formEdit.addEventListener("submit", (e) => {
                    e.preventDefault();
                    this.handleUpdate(id);
                });
            });
        });
    },

    handleUpdate: async function (id) {
        const inputUsername = document.getElementById("username");
        const inputAvatar = document.getElementById("avatar");
        const inputAge = document.getElementById("age");
        const inputNote = document.getElementById("note");

        if (!inputUsername.value.trim()) {
            alert("Please enter a username");
            inputUsername.focus();
            return;
        }

        if (!inputAvatar.value.trim()) {
            alert("Please enter a avatar");
            inputAvatar.focus();
            return;
        }

        if (!inputAge.value.trim()) {
            alert("Please enter a age");
            inputAge.focus();
            return;
        }

        const data = {
            username: inputUsername.value,
            avatar: inputAvatar.value,
            age: inputAge.value,
            note: inputNote.value,
        };

        await UpdateUser(id, data);
        alert("Cap nhat thanh cong");
    },

    start: function () {
        this.renderListUser();
        this.renderAddUser();
    },
};

app.start();
