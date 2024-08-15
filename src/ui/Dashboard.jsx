import Header from "./Header";
import SideBar from "./sidebar/SideBar";
import Container from "./Container";
function Dashboard() {
  return (
    <div className="">
      <Header />
      <div className="h-[calc(100vh-67px)] overflow-y-scroll grid grid-cols-[300px_minmax(900px,_1fr)]">
        <SideBar />
        <Container />
      </div>
    </div>
  );
}

export default Dashboard;
