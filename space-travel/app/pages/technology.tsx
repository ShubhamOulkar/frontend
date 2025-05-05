import TechnologyInfo from "~/components/TechnolgyInfo";
import DotIndicator from "~/components/DotIndicators";
import useCurrentTabMetaData from "~/hook/useCurrentTabMetaData";

export default function technology() {
 const {tabData, currentTab, setCurrentTab, currentTabMetaData } = useCurrentTabMetaData("technology");
  return (
    <main id="main" className="grid-container grid-container--technology flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> Space launch 101
      </h1>
     <picture>
        <source srcSet={currentTabMetaData?.images.landscape} media="(max-width:45em)" type="image/png"/>
        <img src={currentTabMetaData?.images.portrait} alt={currentTabMetaData?.name}/>
      </picture>
      <div className="technology-info">
        <DotIndicator tabData={tabData} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
        <TechnologyInfo tabData={currentTabMetaData} />
      </div>
    </main>
  );
}
