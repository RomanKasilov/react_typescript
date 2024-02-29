import axios from "axios";

import {baseURL} from "../constans/urls";

const api_service = axios.create({
    baseURL
})

export {api_service}