import Footer from "../common/Footer";
import Header from "../common/Header";

const RootLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
