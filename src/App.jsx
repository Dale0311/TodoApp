import Sidebar from "./sidebar";
import MainContent from "./mainContent";
function App() {
  return (
    <div className="flex flex-col lg:grid lg:flex-none lg:grid-cols-4 container mx-auto h-screen">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
