import { useState, useEffect } from "react";
import tabData from "data.json";
import type { TabData } from "~/type/type";

export default function useCurrentTabMetaData(category: "technology" | "crew" | "destinations") {
    const data:TabData = tabData[category][0];
    const [currentTab, setCurrentTab] = useState(data.name);
    const [currentTabMetaData, setCurrentTabMetaData] = useState(data);
  
    useEffect(() => {
      const currentData = tabData[category].find(item => item.name === currentTab);
      setCurrentTabMetaData(currentData || data);
    }, [currentTab, category]);
  
    return { tabData: tabData[category], currentTab, setCurrentTab, currentTabMetaData };
}