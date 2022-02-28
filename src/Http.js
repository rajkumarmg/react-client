import axios from "axios";
import {initializeAxiosMockAdapter,} from "./mock/Mock";

let instance = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-type": "application/json"
    }
});

initializeAxiosMockAdapter(instance);

export const Http = instance;