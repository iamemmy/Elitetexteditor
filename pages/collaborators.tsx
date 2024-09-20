import DashboardSidebar from '../components/DashboardSidebar';
import DashboardNavbar from '../components/DashboardNavbar';

const Collaborators: React.FC = () => {

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <DashboardNavbar />
      <main className="flex flex-1">
        <DashboardSidebar />

        <div className="w-full lg:w-[80%] h-[80vh] p-4 lg:p-6 flex justify-center items-center">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-300 text-center w-[80%] lg:w-[50%]">
                <p className="text-sm lg:text-base text-gray-600">No collaborators available</p>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Collaborators;
