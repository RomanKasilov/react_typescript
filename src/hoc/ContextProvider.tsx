import {createContext, FC, PropsWithChildren} from "react";
const FirstContext = createContext<number>(null)
const SecondContext = createContext<{name:string}>(null)
interface IProps extends PropsWithChildren{

}
const ContextProvider:FC<IProps> = ({children}) => {
    return (
        <FirstContext.Provider value={777}>
          <SecondContext.Provider value={{name:'kokos'}}>
              {children}
          </SecondContext.Provider>
        </FirstContext.Provider>
    );
};

export {
    ContextProvider,
    FirstContext,
    SecondContext
};