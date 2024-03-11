import {apiService} from "./api.service";
import {IPost} from "../interfaces";
import {IResp} from "../types";
import {urls} from "../constans";

const postService = {
    getAll:():IResp<IPost[]>=>apiService.get(urls.posts.base),
    getById:(id:number)=>apiService.get(urls.posts.byId(id))

}
export {postService}