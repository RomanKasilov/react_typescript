import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {useEffect, useState} from "react";
import {ICar} from "../../interfaces/carInterface";
import {car_service} from "../../services/car_service";


const CarsContainer = () => {

    const [cars, setCars] = useState<ICar[]>([])
    const [trigger, setTrigger] = useState<boolean>(null)
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null)
    useEffect(() => {
        car_service.getAll().then(({data})=>setCars(data))
    }, [trigger]);
    const changeTrigger = ()=>{
        setTrigger(value => !value)
    }
    return (
        <div>
           <CarForm changeTrigger={changeTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate} />
            <Cars cars = {cars} setCarForUpdate={setCarForUpdate} changeTrigger={changeTrigger}/>
        </div>
    );
};

export {CarsContainer};