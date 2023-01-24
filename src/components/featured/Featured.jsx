import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={70} text="70%" strokeWidth={4} />
        </div>
        <p className="title">title</p>
        <p className="amount">amount</p>
        <p className="desc">desc</p>
        <div className="summery">
          <div className="item">
            <div className="title">Target</div>
            <div className="item-result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="result">$120</div>
            </div>
          </div>
          <div className="item">
            <div className="title">Last Week</div>
            <div className="item-result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="result">$120</div>
            </div>
          </div>
          <div className="item">
            <div className="title">Last Month</div>
            <div className="item-result negative" >
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="result">$120</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
