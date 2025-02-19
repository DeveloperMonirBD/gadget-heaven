import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster />
            
            {/* Navbar */}
            <Navbar />

            {/* Dunamic Section  */}
            <div className="min-h-[calc(100vh-397px)] max-w-7xl mx-auto px-3">
                <Outlet />
            </div>

            {/* Footer  */}
            <Footer />
        </div>
    );
};

export default MainLayout;
