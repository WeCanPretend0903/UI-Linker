import React from "react";
import "./SwipeButton.css";
import ReplayIcon from "@mui/icons-material/Replay";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import BoltIcon from "@mui/icons-material/Bolt";
import StarIcon from "@mui/icons-material/Star";
import { IconButton } from "@mui/material";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon fontSize="large" className="swipeButton_repeat" />
      </IconButton>
      <IconButton>
        <CheckIcon fontSize="large" className="swipeButton_like" />
      </IconButton>
      <IconButton>
        <BoltIcon fontSize="large" className="swipeButton_lightning" />
      </IconButton>
      <IconButton>
        <ClearIcon fontSize="large" className="swipeButton_dislike" />
      </IconButton>
      <IconButton>
        <StarIcon fontSize="large" className="swipeButton_star" />
      </IconButton>
    </div>
  );
};
export default SwipeButtons;
