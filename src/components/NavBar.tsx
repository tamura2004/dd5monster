import { Page } from "../App.tsx";

type Props = {
  page: Page;
  setPage: (page: Page) => void;
};

export const NavBar = ({ page, setPage }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={() => setPage(Page.Setting)}>
          DD5eTool
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={
                  page === Page.Setting ? "nav-link active" : "nav-link"
                }
                onClick={() => setPage(Page.Setting)}
              >
                設定
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  page === Page.Monster ? "nav-link active" : "nav-link"
                }
                onClick={() => setPage(Page.Monster)}
              >
                モンスター
              </a>
            </li>
            <li className="nav-item">
              <a
                className={page === Page.Room ? "nav-link active" : "nav-link"}
                onClick={() => setPage(Page.Room)}
              >
                戦闘マップ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};