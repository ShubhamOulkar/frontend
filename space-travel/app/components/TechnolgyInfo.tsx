import type { TabData } from "~/type/type"

export default function TechnologyInfo ({tabData}:{tabData:TabData}){
    return <article>
              <header className="flow flow--space--small">
                <h2 className="fs-500 uppercase ff-serif">The Terminology...</h2>
                <p className="fs-700 uppercase ff-serif">{tabData.name}</p>
              </header>
              <p>{tabData.description}</p>
            </article>
}