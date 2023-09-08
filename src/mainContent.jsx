import Header from "./mainContentComp/header";
import Todos from "./mainContentComp/todos";
function MainContent() {
  return (
    <div className="col-span-3">
      <Header />
      <Todos />
    </div>
  );
}

export default MainContent;
