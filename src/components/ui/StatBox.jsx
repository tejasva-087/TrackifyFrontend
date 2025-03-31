import Box from "./Box";

function StatsBox({ amount, icon, label }) {
  return (
    <Box className="stats-box">
      <h3 className="heading-tertiary">₹{amount}</h3>
      <div className="stats-box-label">
        {icon}
        <p className="text-secondary font-light">{label}</p>
      </div>
    </Box>
  );
}

export default StatsBox;
