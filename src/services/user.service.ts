import {apiService} from "./api.service";

import {IResp} from "../types";
import {IUser} from "../interfaces";
import {urls} from "../constans";

const userService = {
    getAll:():IResp<IUser[]>=>apiService.get(urls.users.base),
    getById:(id:number):IResp<IUser>=>apiService.get(urls.users.byId(id))
}

export {userService}