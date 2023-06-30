import styled from "styled-components";
import { FaGithub as FaGH, FaNpm as FaNPM } from "react-icons/fa";
import CB from "./code-block";
import { Outlet, Link as L } from "react-router-dom";
import { openInNewTab } from "./utils";
import { useMediaQuery } from "react-responsive";
import { FiMenu as FM } from "react-icons/fi";
import { useSlice } from "./slices";

const Layout = () => {
  const isDesktopOrTablet = useMediaQuery({ minWidth: 850 });
  const [isShownMobileLateralMenu, setIsShownMobileLateralMenu] = useSlice(
    "isShownMobileLateralMenu"
  );
  return isDesktopOrTablet ? (
    <AppContainer>
      <LateralMenu>
        <Title to="/">react-context-slices</Title>
        <IconsContainer>
          <FaGithub
            onClick={() =>
              openInNewTab("https://github.com/roggc/react-context-slices")
            }
          />
          <FaNpm
            onClick={() =>
              openInNewTab("https://www.npmjs.com/package/react-context-slices")
            }
          />
        </IconsContainer>
        <Link to="installation">Installation</Link>
        <Link to="how-to-use-it-javascript">How to use it (javascript)</Link>
        <Link to="how-to-use-it-typescript">How to use it (typescript)</Link>
        <Link to="get-initial-state-from-storage">
          Get initial state from storage (React Context slices)
        </Link>
        <Link to="define-middleware">
          Define middleware (React Context slices)
        </Link>
        <Link to="pass-options-to-redux-store">
          Pass options to Redux store
        </Link>
        <Link to="things-you-can-do">Things you can do</Link>
        <Link to="note-on-nomenclature">
          A note on nomenclature (React Context slices)
        </Link>
        <Link to="note-on-testing">A note on testing</Link>
        <Link to="api-reference">API reference</Link>
        <Link to="license">License</Link>
      </LateralMenu>
      <PageContent>
        <Outlet />
      </PageContent>
    </AppContainer>
  ) : (
    <MobileAppContainer>
      <Header />
      <MobilePageContent>
        <MobileLateralMenu isShown={isShownMobileLateralMenu}>
          <Link
            to="installation"
            onClick={() => setIsShownMobileLateralMenu(false)}
          >
            Installation
          </Link>
          <Link
            to="how-to-use-it-javascript"
            onClick={() => setIsShownMobileLateralMenu(false)}
          >
            How to use it (javascript)
          </Link>
          <Link
            to="how-to-use-it-typescript"
            onClick={() => setIsShownMobileLateralMenu(false)}
          >
            How to use it (typescript)
          </Link>
          <Link
            to="get-initial-state-from-storage"
            onClick={() => setIsShownMobileLateralMenu(false)}
          >
            Get initial state from storage (React Context slices)
          </Link>
          <Link
            to="define-middleware"
            onClick={() => setIsShownMobileLateralMenu(false)}
          >
            Define middleware (React Context slices)
          </Link>
          <Link
            to="pass-options-to-redux-store"
            onClick={() => setIsShownMobileLateralMenu(false)}
          >
            Pass options to Redux store
          </Link>
          <Link
            to="things-you-can-do"
            onClick={() => setIsShownMobileLateralMenu(false)}
          >
            Things you can do
          </Link>
          <Link
            to="note-on-nomenclature"
            onClick={() => setIsShownMobileLateralMenu(false)}
          >
            A note on nomenclature (React Context slices)
          </Link>
          <Link
            to="note-on-testing"
            onClick={() => setIsShownMobileLateralMenu(false)}
          >
            A note on testing
          </Link>
          <Link
            to="api-reference"
            onClick={() => setIsShownMobileLateralMenu(false)}
          >
            API reference
          </Link>
          <Link to="license" onClick={() => setIsShownMobileLateralMenu(false)}>
            License
          </Link>
        </MobileLateralMenu>
        <Outlet />
      </MobilePageContent>
    </MobileAppContainer>
  );
};

const MobileLateralMenu = styled(({ isShown, ...props }) => <div {...props} />)`
  position: absolute;
  top: 0;
  bottom: 0;
  ${({ isShown }) => (isShown ? `left:0;` : `left:calc(-30% - 40px);`)}
  border-right: 2px solid red;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  max-width: 30%;
  overflow: auto;
  box-sizing: border-box;
  transition: left 1s;
`;

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
`;

const MobileAppContainer = styled(AppContainer)`
  flex-direction: column;
`;

const Header = () => {
  const [, setIsShownMobileLateralMenu] = useSlice("isShownMobileLateralMenu");
  return (
    <HeaderContainer>
      <HeaderLeftContainer>
        <FiMenu onClick={() => setIsShownMobileLateralMenu((v) => !v)} />
        <HeaderTitle onClick={() => setIsShownMobileLateralMenu(false)}>
          <Link to="/">react-context-slices</Link>
        </HeaderTitle>
      </HeaderLeftContainer>
      <HeaderRightContainer>
        <FaGithub
          onClick={() =>
            openInNewTab("https://github.com/roggc/react-context-slices")
          }
        />
        <FaNpm
          onClick={() =>
            openInNewTab("https://www.npmjs.com/package/react-context-slices")
          }
        />
      </HeaderRightContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  position: sticky;
  top: 0;
  z-index: 9;
  background-color: white;
`;

const HeaderLeftContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const HeaderRightContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const HeaderTitle = styled.div`
  font-size: 1.5em;
`;

const FiMenu = styled(FM)`
  cursor: pointer;
`;

const MobilePageContent = styled.div`
  padding: 20px 20px;
  position: relative;
  display: flex;
  overflow: auto;
  flex: 1;
`;

const LateralMenu = styled.div`
  flex: 25%;
  overflow: auto;
  border-right: 2px solid red;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PageContent = styled.div`
  flex: 75%;
  overflow: auto;
  padding: 20px 20px;
`;

const Link = styled(L)`
  text-decoration: none;
  display: block;
`;

const Title = styled(Link)`
  font-size: 1.5em;
`;

const FaGithub = styled(FaGH)`
  cursor: pointer;
`;
const FaNpm = styled(FaNPM)`
  cursor: pointer;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export default Layout;