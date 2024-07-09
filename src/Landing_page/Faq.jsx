import { PlusOutlined, UpOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import "./index.css";

const text = `
Lorem ipsum dolor sit amet
consectetur adipisicing elit. Quidem quasi nulla quam doloremque fuga
itaque id quia expedita nostrum, a, officia eum saepe, voluptatem
sunt? Dolores eaque dolorem in debitis?
`;
const getItems = (panelStyle) => [
  {
    key: "1",
    label: "Questionn for Faq 1",
    children: <p className="textContent">{text}</p>,
    style: panelStyle,
  },
  {
    key: "2",
    label: "Questionn for Faq  2",
    children: <p className="textContent">{text}</p>,
    style: panelStyle,
  },
  {
    key: "3",
    label: "Questionn for Faq  3",
    children: <p className="textContent">{text}</p>,
    style: panelStyle,
  },
];
const Faq = () => {
  const panelStyle = {
    marginBottom: 40,
    background: "#ffe8d9",
    borderRadius: "18px",
    // border: "1px solid red",
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
                <UpOutlined style={{ fontSize: "24px", color: "#ff7300" }} />
              ) : (
                <PlusOutlined style={{ fontSize: "24px", color: "#ff7300" }} />
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

export default Faq;
