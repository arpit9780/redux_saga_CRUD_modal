

export const GetData = () => {
    console.log("hello Action");
    return {
        type: "GET_DATA",
    }
};

export const CreateData = (data) => {
    console.log("create Action", data);
    return {
        type: "CREATE_DATA",
        payload: data
    }
};

export const DeleteUser = (id) => {
    console.log("delete Action", id);
    return {
        type: "DELETE_USER",
        payload: id
    }
}

export const UpdateUser = (data) => {
    console.log("UpdateUser", data);
    return {
        type:"UPDATE_USER",
        payload:data
    }
}