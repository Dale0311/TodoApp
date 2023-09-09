import Header from "./mainContentComp/header";
import Todos from "./mainContentComp/todos";
function MainContent(props) {
  return (
    <div className="col-span-3">
      <Header />
      <Todos {...props} />
    </div>
  );
}

export default MainContent;
