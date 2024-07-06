import SimpleUseCase from "./simpleUse/simpleUse";
import UpdateWithPreviousState from "./updaterFunc/updaterfunction";
import TodoList from "./initializerFunc/initializer";
import ValueTracker from "./valueTracking/valueTracking";
export default function UseStateExamples() {
  return (
    <>
      <h1>useState examples</h1>
      <SimpleUseCase />
      <UpdateWithPreviousState />
      <TodoList />
      <ValueTracker />
    </>
  );
}
