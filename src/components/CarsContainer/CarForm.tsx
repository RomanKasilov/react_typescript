import {SubmitHandler, useForm} from "react-hook-form";
import {FC, useEffect} from "react";

import {ICar} from "../../interfaces/carInterface";
import {ISetState} from "../../types/setSetType";
import {car_service} from "../../services/car_service";

interface IProps {
    changeTrigger: () => void,
    carForUpdate: ICar
    setCarForUpdate: ISetState<ICar>
}

const CarForm: FC<IProps> = ({changeTrigger, carForUpdate, setCarForUpdate}) => {
    const {register, reset, handleSubmit, setValue} = useForm<ICar>();
    useEffect(() => {
        if(carForUpdate){
            setValue("brand",carForUpdate.brand, {shouldValidate:true})
            setValue("price",carForUpdate.price, {shouldValidate:true})
            setValue("year",carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate, setValue]);
    const save: SubmitHandler<ICar> = async (car) => {
        await car_service.create(car)
        changeTrigger()
        reset()
    };
    const update: SubmitHandler<ICar> = async (car) => {
        await car_service.updateById(carForUpdate.id, car)
        changeTrigger()
        reset()
        setCarForUpdate(null)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'}{...register('brand')}/>
                <input type="number" placeholder={'price'}{...register('price')}/>
                <input type="number" placeholder={'year'}{...register('year')}/>
                <button>{carForUpdate ? 'update' : 'save'}</button>
            </form>
        </div>
    );
};

export {CarForm};