import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="">
            <footer className="md:footer-center max-w-7xl mx-auto rounded pt-6 px-10 md:px-3 bg-base-100 text-gray-900 rounded-t-3xl shadow-sm">
                <nav className="mb-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Gadget Heaven</h2>
                    <p className="text-lg pt-3 text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
                </nav>

                <aside className="footer border-t pt-4 pb-8 text-lg ">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <Link className="link link-hover">Product Support</Link>
                        <Link className="link link-hover">Order Tracking</Link>
                        <Link className="link link-hover">Shipping & Delivery</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <Link className="link link-hover">About us</Link>
                        <Link className="link link-hover">Careers</Link>
                        <Link className="link link-hover">Contact</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <Link className="link link-hover">Terms of use</Link>
                        <Link className="link link-hover">Privacy policy</Link>
                        <Link className="link link-hover">Cookie policy</Link>
                    </nav>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;