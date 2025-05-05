import TabList from "~/components/TabbingComponent";
import DestinationInfo from "~/components/DestinationInfo";
import useCurrentTabMetaData from "~/hook/useCurrentTabMetaData";

export default function destination() {
  const {tabData, currentTab, setCurrentTab, currentTabMetaData } = useCurrentTabMetaData("destinations");
  return (
    <main id="main" className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span> Pick your destination
      </h1>
      <TabList tabData={tabData} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      <picture>
        <source srcSet={currentTabMetaData?.images.png} type="image/png" />
        <img src={currentTabMetaData?.images.webp} alt={currentTabMetaData?.name}/>
      </picture>
      <DestinationInfo tabData={currentTabMetaData} />
    </main>
  );
}
