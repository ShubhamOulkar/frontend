import type { TabData } from "~/type/type";

export default function DestinationInfo ({tabData}:{tabData:TabData}){
    return <>
        {
         <article className="destination-info" >
            <h2 className="fs-800 uppercase ff-serif">{tabData.name}</h2>
            <p>{tabData.description}</p>
            <div className="destination-meta flex">
              <div>
                <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
                <p className="ff-serif uppercase">{tabData.distance}</p>
              </div>
              <div>
                <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
                <p className="ff-serif uppercase">{tabData.travel}</p>
              </div>
            </div>
          </article>
      }
    </>
}
