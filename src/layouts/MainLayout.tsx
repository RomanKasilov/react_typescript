import {useContext} from "react";
import {FirstContext, SecondContext} from "../hoc";

const MainLayout = () => {
    const context1 = useContext(FirstContext);
    const context2 = useContext(SecondContext);
    return (
        <div>
            <h1>{context1} :{context2.name}</h1>
        </div>
    );
};

export {MainLayout};