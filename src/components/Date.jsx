import React from "react";
import Box from "./ui/Box";

function Date({ date, month, className }) {
  return (
    <Box className={`date-box ${className} flex-center flex-column`}>
      <h3 className="heading-tertiary">{date}</h3>
      <p className="text-secondary">{month}</p>
    </Box>
  );
}

export default Date;
