import type { TabList } from "~/type/type";

export default function TabList({ tabData, currentTab, setCurrentTab }:TabList ) {

  return (
    <>
      <div className="tab-list underline-indicators flex" role="tablist" aria-label="destination list">
        {tabData.map((tab, i) => 
          <button
            type="button"
            key={`${i}-${tab.name}`}
            aria-selected={tab.name === currentTab ? "true" : "false"}
            className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
            onClick={()=> setCurrentTab(tab.name)}
            role="tab"
          >
            {tab.name}
          </button>
        )}
      </div>
    </>
  );
}
