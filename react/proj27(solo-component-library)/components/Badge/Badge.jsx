const colors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

export default function Badge({ children, color = "gray", type = "" }) {
  
  return (
    <div
      aria-label={`${color} ${type} badge`}
      className={`badge ${
        colors.includes(color) ? "badge-" + color : "badge-gray"
      } ${type === "pill" ? type : ""}`}
    >
      {children}
    </div>
  );
}
