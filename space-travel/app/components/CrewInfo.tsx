import type { TabData } from "~/type/type"
export default function CrewInfo ({tabData}:{tabData:TabData}){
    return <article className="crew-info flow" >
                <header className="flow flow--space--small">
                  <h2 className="fs-600 uppercase ff-serif">{tabData.role}</h2>
                  <p className="fs-700 uppercase ff-serif">{tabData.name}</p>
                </header>
                <p>{tabData.bio}</p>
            </article>
}