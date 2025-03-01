import { Icons } from "../../../assets/icons";
import { BlockContentWrap, BlockTitle } from "../../../styles/global/default";
import { SalesBlockWrap } from "./Sales.styles";

const SalesBlock = () => {
  return (
    <SalesBlockWrap>
      <div className="block-head">
        <div className="block-head-l">
          <BlockTitle className="block-title">
            <h3>Trong ngày</h3>
          </BlockTitle>
          <p className="text">Tóm tắt</p>
        </div>
        <div className="block-head-r">
          {/* <button type="button" className="export-btn">
            <img src={Icons.ExportDark} alt="" />
            <span className="text">Export</span>
          </button> */}
        </div>
      </div>
      <BlockContentWrap>
        <div className="cards">
          <div className="card-item card-misty-rose">
            <div className="card-item-icon">
              <img src={Icons.CardSales} alt="" />
            </div>
            <div className="card-item-value">1vnd</div>
            <p className="card-item-text text">doanh thu</p>
            <span className="card-item-sm-text">+8% so với hôm qua</span>
          </div>
          <div className="card-item card-latte">
            <div className="card-item-icon">
              <img src={Icons.CardOrder} alt="" />
            </div>
            <div className="card-item-value">300</div>
            <p className="card-item-text text">lượt truy cập</p>
            <span className="card-item-sm-text">+5% so với hôm qua</span>
          </div>
          <div className="card-item card-nyanza">
            <div className="card-item-icon">
              <img src={Icons.CardProduct} alt="" />
            </div>
            <div className="card-item-value">5</div>
            <p className="card-item-text text">đã bán</p>
            <span className="card-item-sm-text">+1.2% so với hôm qua</span>
          </div>
          <div className="card-item card-pale-purple">
            <div className="card-item-icon">
              <img src={Icons.CardCustomer} alt="" />
            </div>
            <div className="card-item-value">8</div>
            <p className="card-item-text text">Khách hàng mới</p>
            <span className="card-item-sm-text">+0.5% so với hôm qua</span>
          </div>
        </div>
      </BlockContentWrap>
    </SalesBlockWrap>
  );
};

export default SalesBlock;
