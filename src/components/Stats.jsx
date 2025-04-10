import Box from "./ui/Box";

function Stats({ amount, icon, label, className }) {
  return (
    <Box className={`stats-box ${className}`}>
      <h3 className="heading-tertiary">₹{amount}</h3>
      <div className="stats-box-label">
        {icon}
        <p className="text-secondary font-light">{label}</p>
      </div>
    </Box>
  );
}

export default Stats;
