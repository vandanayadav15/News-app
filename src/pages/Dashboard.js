import React from "react";
import Header from "../component/Header/Index";
import NewsPage from "../component/Newpage/Newpage";

function Dashboard() {
  return (
    <div>
      <Header />
      <NewsPage/>
      {/* <NewsGrid />
      <NewsList /> */}
      {/* <NewsDetail/> */}
    </div>
  );
}

export default Dashboard;
