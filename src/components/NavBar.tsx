import { Page } from "../hooks/usePage.ts";

type Props = {
  page: Page;
  setPage: (page: Page) => void;
  reRoll: () => void;
  reRollLabel: string;
  isMaster: boolean;
  setIsMaster: (isMaster: boolean) => void;
};

export const NavBar = ({
  page,
  setPage,
  reRoll,
  reRollLabel,
  isMaster,
  setIsMaster,
}: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={reRoll}>
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
            {isMaster && (
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
            )}
            <li className="nav-item">
              <a
                className={
                  page === Page.Character ? "nav-link active" : "nav-link"
                }
                onClick={() => setPage(Page.Character)}
              >
                キャラクター
              </a>
            </li>
            {isMaster && (
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
            )}
            <li className="nav-item">
              <a
                className={page === Page.Room ? "nav-link active" : "nav-link"}
                onClick={() => setPage(Page.Room)}
              >
                戦闘マップ
              </a>
            </li>
            {isMaster && (
              <li className="nav-item">
                <a
                  className={
                    page === Page.HitPoint ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setPage(Page.HitPoint)}
                >
                  ヒットポイント
                </a>
              </li>
            )}
            {isMaster && (
              <li className="nav-item">
                <a
                  className={
                    page === Page.EditRoom ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setPage(Page.EditRoom)}
                >
                  マップ編集
                </a>
              </li>
            )}
          </ul>
          <div className="form-check form-switch me-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="isMaster"
              checked={isMaster}
              onChange={(e) => {
                setIsMaster(e.target.checked);
              }}
            />
            {isMaster ? (
              <label className="form-check-label text-white" htmlFor="isMaster">
                マスター：有効
              </label>
            ) : (
              <label className="form-check-label text-white" htmlFor="isMaster">
                マスター：無効
              </label>
            )}
          </div>
          <button className="btn btn-secondary" onClick={reRoll}>
            <i className="bi bi-dice-5-fill">{reRollLabel}</i>
          </button>
        </div>
      </div>
    </nav>
  );
};
