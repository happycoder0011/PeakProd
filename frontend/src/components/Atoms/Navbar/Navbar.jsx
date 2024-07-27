import React, { useState } from "react";
import {
  FundOutlined,
  BarChartOutlined,
  SnippetsOutlined,
  ClockCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes.constants";

const items = [
  {
    label: <Link to={ROUTES.HOME}>Home</Link>,
    key: "home",
    icon: <FundOutlined />,
  },
  {
    label: <Link to={ROUTES.GOALS}>Goals</Link>,
    key: "goals",
    icon: <FundOutlined />,
  },
  {
    label: <Link to={ROUTES.HABITS}>Habits</Link>,
    key: "habits",
    icon: <BarChartOutlined />,
  },
  {
    label: <Link to={ROUTES.JOURNAL}>Journal</Link>,
    key: "journal",
    icon: <SnippetsOutlined />,
  },
  {
    label: <Link to={ROUTES.MOOD}>Mood</Link>,
    key: "mood",
    icon: <SmileOutlined />,
  },
  {
    label: <Link to={ROUTES.POMODORO}>Pomodoro</Link>,
    key: "pomodoro",
    icon: <ClockCircleOutlined />,
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{
        flex: 1,
        minWidth: 0,
        justifyContent: "center",
      }}
    />
  );
};

export default Navbar;
