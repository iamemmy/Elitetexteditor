import QuillEditor from '../components/Editor';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSidebar from '../components/DashboardSidebar';

const Home: React.FC = () => {

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <DashboardNavbar />
      <main className="flex flex-1">
        <DashboardSidebar />
        <div className="w-full lg:w-[80%] p-4 lg:p-6">
        <div className='w-full flex justify-end items-center gap-2 mb-4'>
            <button className='bg-gray-300 text-white px-4 py-2 rounded-md text-sm' disabled>Discard</button>
            <button className='bg-indigo-600 text-white px-4 py-2 rounded-md text-sm'>Save</button>
          </div>
          <QuillEditor />
          <div className='mt-10 lg:mt-16'>
            <p className='text-xs lg:text-sm text-gray-600 italic'>
              To use this editor, open it and start typing directly in the main area. Use the toolbar to format text with bold, italics, underline, and more. Add images and adjust alignment as needed. Click the - Save - button to ensure your edits are saved. Customize settings to enhance your editing experience.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
