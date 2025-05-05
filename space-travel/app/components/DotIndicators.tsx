import type { TabList } from "~/type/type";
import { usePathnameContext } from "~/context/pathname/createPathnameContext";

export default function DotIndicator({ tabData, currentTab, setCurrentTab }:TabList ) {
    const {pathname} = usePathnameContext();
  
    return (
      <>
        <div className="dot-indicators flex" role="tablist" aria-label="crew list">
          {tabData.map((tab, i) => 
            <button
              type="button"
              key={`${i}-${tab.name}`}
              aria-selected={tab.name === currentTab ? "true" : "false"}
              onClick={()=> setCurrentTab(tab.name)}
              role="tab"
            >
              <span className="sr-only">
                the {tab.role}
              </span>
              {pathname === "technology" && i+1}
            </button>
          )}
        </div>
      </>
    );
  }
  