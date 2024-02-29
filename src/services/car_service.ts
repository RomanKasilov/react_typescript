import {api_service} from "./api_service";
import {urls} from "../constans/urls";
import {ICar} from "../interfaces/carInterface";
import {IResp} from "../types/response_type";

const car_service = {
    getAll:():IResp<ICar[]> => api_service.get(urls.cars.base),
    create:(item:ICar):IResp<ICar>=> api_service.post(urls.cars.base, item),
    updateById:(id: number, item:ICar):IResp<ICar> => api_service.put(urls.cars.byId(id), item),
    deleteById:(id:number):IResp<void> => api_service.delete(urls.cars.byId(id))
}
export {car_service}
