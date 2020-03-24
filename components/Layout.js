import Header from "./Header";
import SubHeader from "./SubHeader";

const Layout = props => {
  return (
    <>
      <Header />
      <SubHeader />
      {props.children}
    </>
  );
};

export default Layout;
