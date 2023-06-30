import styled from "styled-components";
import { FaGithub as FaGH, FaNpm as FaNPM } from "react-icons/fa";
import CB from "./code-block";
import { Outlet, NavLink as L } from "react-router-dom";
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
        <Link to="installation" className="navlink">
          Installation
        </Link>
        <Link to="how-to-use-it-javascript" className="navlink">
          How to use it (javascript)
        </Link>
        <Link to="how-to-use-it-typescript" className="navlink">
          How to use it (typescript)
        </Link>
        <Link to="get-initial-state-from-storage" className="navlink">
          Get initial state from storage (React Context slices)
        </Link>
        <Link to="define-middleware" className="navlink">
          Define middleware (React Context slices)
        </Link>
        <Link to="pass-options-to-redux-store" className="navlink">
          Pass options to Redux store
        </Link>
        <Link to="things-you-can-do" className="navlink">
          Things you can do
        </Link>
        <Link to="note-on-nomenclature" className="navlink">
          A note on nomenclature (React Context slices)
        </Link>
        <Link to="note-on-testing" className="navlink">
          A note on testing
        </Link>
        <Link to="api-reference" className="navlink">
          API reference
        </Link>
        <Link to="license" className="navlink">
          License
        </Link>
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
            className="navlink"
          >
            Installation
          </Link>
          <Link
            to="how-to-use-it-javascript"
            onClick={() => setIsShownMobileLateralMenu(false)}
            className="navlink"
          >
            How to use it (javascript)
          </Link>
          <Link
            to="how-to-use-it-typescript"
            onClick={() => setIsShownMobileLateralMenu(false)}
            className="navlink"
          >
            How to use it (typescript)
          </Link>
          <Link
            to="get-initial-state-from-storage"
            onClick={() => setIsShownMobileLateralMenu(false)}
            className="navlink"
          >
            Get initial state from storage (React Context slices)
          </Link>
          <Link
            to="define-middleware"
            onClick={() => setIsShownMobileLateralMenu(false)}
            className="navlink"
          >
            Define middleware (React Context slices)
          </Link>
          <Link
            to="pass-options-to-redux-store"
            onClick={() => setIsShownMobileLateralMenu(false)}
            className="navlink"
          >
            Pass options to Redux store
          </Link>
          <Link
            to="things-you-can-do"
            onClick={() => setIsShownMobileLateralMenu(false)}
            className="navlink"
          >
            Things you can do
          </Link>
          <Link
            to="note-on-nomenclature"
            onClick={() => setIsShownMobileLateralMenu(false)}
            className="navlink"
          >
            A note on nomenclature (React Context slices)
          </Link>
          <Link
            to="note-on-testing"
            onClick={() => setIsShownMobileLateralMenu(false)}
            className="navlink"
          >
            A note on testing
          </Link>
          <Link
            to="api-reference"
            onClick={() => setIsShownMobileLateralMenu(false)}
            className="navlink"
          >
            API reference
          </Link>
          <Link
            to="license"
            onClick={() => setIsShownMobileLateralMenu(false)}
            className="navlink"
          >
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
  ${({ isShown }) => (isShown ? `left:0;` : `left:calc(-40% - 40px);`)}
  border-right: 2px solid ${({ theme }) => theme.colors.red};
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 40%;
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
  border-bottom: 2px solid ${({ theme }) => theme.colors.red};
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
  flex: 28%;
  overflow: auto;
  border-right: 2px solid ${({ theme }) => theme.colors.red};
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
  color: inherit;
`;

const Title = styled(Link)`
  font-size: 1.5em;
`;

const FaGithub = styled(FaGH)`
  cursor: pointer;
`;
const FaNpm = styled(FaNPM)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.red};
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export default Layout;
