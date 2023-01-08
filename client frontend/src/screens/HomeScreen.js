import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import Footer from "./../components/Footer";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <>
    <Header />
      <main className="main-wrap">
        <ShopSection keyword={keyword} pagenumber={pagenumber} />
        <Footer />
      </main>
    </>
  );
};

export default HomeScreen;
