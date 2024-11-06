
import { Outlet } from 'react-router-dom';
import Heading from '../components/Heading';

const Dashboard = () => {


    return (
        <div className="mb-20">
            {/* heading */}
            <Heading
                headingTitle={'Dashboard'}
                headingDescription={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
            />

            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
