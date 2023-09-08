import SideHeader from "./sidebarComp/sideHeader";
import Status from "./sidebarComp/status";
function Sidebar() {
  return (
    <div className="border-x-2 bg-[#F5F5F5] mt-12 space-y-8">
      <SideHeader />
      <Status />
    </div>
  );
}

// section 

export default Sidebar;
