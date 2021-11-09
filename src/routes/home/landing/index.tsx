import "./style.scss";
import { Header } from "../../../components";

const LandingPage = (): JSX.Element => {
  return (
    <>
      <div className="background-image-container" />
      <div className="layout-red" />
      <div className="login-page">
        {/* eslint-disable-next-line */}
        <Header style="login" />
      </div>
    </>
  );
};

export default LandingPage;
