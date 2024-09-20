import History from '../components/History';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardNavbar from '../components/DashboardNavbar';

const Home: React.FC = () => {

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <DashboardNavbar />
      <main className="flex flex-1">
        <DashboardSidebar />
        <div className="w-full lg:w-[80%] p-4 lg:p-6">
          <History />
        </div>
      </main>
    </div>
  );
};

export default Home;
