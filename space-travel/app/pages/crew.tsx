import CrewInfo from "~/components/CrewInfo";
import useCurrentTabMetaData from "~/hook/useCurrentTabMetaData";
import DotIndicator from "~/components/DotIndicators";

export default function crew() {
  const {tabData, currentTab, setCurrentTab, currentTabMetaData } = useCurrentTabMetaData("crew");
  return (
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>
      <picture>
        <source srcSet={currentTabMetaData?.images.png} type="image/png"/>
        <img src={currentTabMetaData?.images.webp} alt={currentTabMetaData?.name}/>
      </picture>
      <DotIndicator tabData={tabData} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      <CrewInfo tabData={currentTabMetaData} />
    </main>
  );
}
