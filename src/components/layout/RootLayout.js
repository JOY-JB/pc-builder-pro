import Footer from "../common/Footer";
import Header from "../common/Header";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
