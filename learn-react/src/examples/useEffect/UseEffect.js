import ChatApp from "./chatroom/ChatRoom";
import GlobalEvent from "./global-event/globalevent";
import ModalDialog from "./modal/modalDialog";
import ElementTracking from "./intersectionObserver/intersectionOberver";
import DataDisplayer from "./raceCondition/race";
import Counter from "./previous-state-update/counter";

export default function UseEffectExamples() {
  return (
    <>
      <h1>
        Exampls of useEffect <i>Open console to learn</i>
      </h1>
      <p>1. Chat room</p>
      <ChatApp />
      <p>2. Listening to global browser events</p>
      <GlobalEvent />
      <p>3. Modal Dialog</p>
      <ModalDialog />
      <p>4. Tracking Element</p>
      <ElementTracking />
      <p>5. Race condition in useEffect</p>
      <DataDisplayer />
      <p>6. Updating state based on previous state from an Effect</p>
      <Counter />
    </>
  );
}
