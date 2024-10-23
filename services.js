export const getAllUser = async () => {
    try {
        const res = await fetch("http://localhost:3000/users", {
            method: "GET",
        });

        const data = await res.json();

        return data;
    } catch (error) {
        alert("loi");
    }
};

export const deleteUser = async (id) => {
    try {
        await fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE",
        });
    } catch (error) {
        alert("loi");
    }
};

export const addUser = async (data) => {
    try {
        await fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    } catch (error) {}
};

export const getUserById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/users/${id}`, {
            method: "GET",
        });

        const data = await res.json();

        return data;
    } catch (error) {}
};

export const UpdateUser = async (id, data) => {
    try {
        await fetch(`http://localhost:3000/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    } catch (error) {}
};
