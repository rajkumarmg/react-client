import {Http} from "../Http";
export const getAllTodo = async () => {
    return Http.get("/todos");
};