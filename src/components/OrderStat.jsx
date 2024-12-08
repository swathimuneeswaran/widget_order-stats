import React from "react";
import { useParams } from "react-router-dom";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import LocalDiningRoundedIcon from "@mui/icons-material/LocalDiningRounded";
import LocalDrinkRoundedIcon from "@mui/icons-material/LocalDrinkRounded";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "../style.css";

const iconMapping = {
  Outbound: { icon: NorthEastRoundedIcon, color: "#3498db" },
  Orders: { icon: ShoppingCartRoundedIcon, color: "#1abc9c" },
  DineIn: { icon: LocalDiningRoundedIcon, color: "#ff0000" },
  Takeaway: { icon: LocalDrinkRoundedIcon, color: "#f39c12" },
};

const OrderStat = ({ stats }) => {
  const { id } = useParams();
  const stat = stats.find((s) => s.id === id);

  if (!stat) {
    return (
      <div style={{ color: "red", fontSize: "30px", textAlign: "center" }}>
        Stat not found!
      </div>
    );
  }

  const { icon: IconComponent, color } = iconMapping[stat.icon];

  const arrowIcon =
    stat.arrow === "up" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;

  return (
    <div
      className="order-stat"
      style={{ marginLeft: "30px", marginTop: "30px" }}
    >
      <div>
        <div className="stat-header">
          <h3>{stat.title}</h3>
          <div className={`percentage ${stat.arrow}`}>
            {arrowIcon}
            <span>{stat.percentageChange}</span>
          </div>
        </div>
        <div className="stat-body">
          <div className="icon-container" style={{ backgroundColor: color }}>
            <IconComponent className="icon" />
          </div>
          <p>{stat.value}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderStat;
