export interface TabData {
    name: string;
    images: {
      png?: string;
      webp?: string;
      portrait?:string;
      landscape?:string;
    },
    description?: string;
    distance?: string;
    travel?: string;
    role?: string;
    bio?: string;
  }
  
export  interface TabList {
    tabData: TabData[], currentTab:string, setCurrentTab:React.Dispatch<React.SetStateAction<string>> 
  }
  
export interface PathNameContextType {
  pathname:string;
  setPathname:React.Dispatch<React.SetStateAction<string>>;
}