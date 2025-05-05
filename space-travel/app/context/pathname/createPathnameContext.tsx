import { createContext, useState, useEffect, useContext, type ReactNode } from "react";
import { useLocation } from "react-router";
import type { PathNameContextType } from "~/type/type";

const PathContext = createContext({} as PathNameContextType);

export function PathNameContext({ children }:{children:ReactNode}) {
    const location = useLocation();
    const [pathname, setPathname] = useState("home");
    useEffect(() => {
        const currentPath = location.pathname.replace("/", "")
        currentPath ? setPathname(currentPath) : setPathname("home");
    }, [location])
    return <PathContext.Provider value={{ pathname, setPathname }}>{children}</PathContext.Provider>
}

export function usePathnameContext (){
    const pathName = useContext(PathContext);
    return pathName
}