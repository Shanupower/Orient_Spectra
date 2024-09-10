import { PlusOutlined, UpOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

const CountryFaq = ({ getItems }) => {
  const panelStyle = {
    marginBottom: 40,
    background: "#ffe8d9",
    borderRadius: "18px",
    padding: "2.2rem",
  };

  return (
    <>
      <div className="section FaQ_container">
        <h1>
          <span>Frequently </span> Asked Questions
        </h1>

        <div className="accordionConatiner">
          <Collapse
            className="ant-collapse-itemss"
            size="large"
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) =>
              isActive ? (
                <UpOutlined style={{ fontSize: "20px", color: "#ff7300" }} />
              ) : (
                <PlusOutlined style={{ fontSize: "20px", color: "#ff7300" }} />
              )
            }
            style={{
              background: "#fff",
            }}
            items={getItems(panelStyle)}
          />
        </div>
      </div>
    </>
  );
};

export default CountryFaq;
