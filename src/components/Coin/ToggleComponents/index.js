import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import "./styles.css";

export default function ToggleComponents({ priceType, handlePriceTypeChange }) {
  return (
    <div className="toggle-price">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={(e) => {
          handlePriceTypeChange(e);
        }}
        sx={{
          "& .Mui-selected": {
            color: "var(--orange) !important",
          },
          borderColor: "var(--orange)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid var(--orange)!important",
            borderColor: "unset",
            color: "var(--orange) !important ",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--orange) !important",
          },
        }}
      >
        <ToggleButton value="prices" className="toggle-btn">Prices</ToggleButton>
        <ToggleButton value="market_caps" className="toggle-btn">Market Cap</ToggleButton>
        <ToggleButton value="total_volumes" className="toggle-btn">Total Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}