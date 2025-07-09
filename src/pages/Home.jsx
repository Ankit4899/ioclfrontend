import Header from '../components/Header';
import '../index.css'
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 animate-fade-in">
      <Header />
      <main className="p-6 flex flex-col lg:flex-row gap-6">
        <div className="bg-white shadow-md rounded p-4 w-full lg:w-2/3 animate-slide-up">
        </div>
        <aside className="bg-white shadow-md rounded p-4 w-full lg:w-1/3 animate-slide-up">
          <h3 className="text-lg font-bold mb-2">What's New</h3>
          <ul className="text-sm list-disc pl-4 space-y-1">
            <li>List of candidates shortlisted for document verification</li>
            <li>New tender notifications released</li>
            <li>Upcoming internship programs at IOCL</li>
          </ul>
        </aside>
      </main>
    </div>
  );
}

export default Home;