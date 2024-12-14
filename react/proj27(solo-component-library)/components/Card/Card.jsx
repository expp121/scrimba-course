import React from "react";
export default function Card({
  cardContainerStyle = {},
  mainText = "CHANGE ME",
  secondaryText = "CHANGE ME",
  onHoverClass = "",
  icon,
  iconAlt = "icon",
  mainTextStyle = {},
  secondaryTextStyle = {},
}) {
  const [isMouseIn, setIsMouseIn] = React.useState(false);

  return (
    <section
      onMouseEnter={() => setIsMouseIn(true)}
      onMouseLeave={() => setIsMouseIn(false)}
      className={`card${isMouseIn ? " " + onHoverClass : ""}`}
      style={cardContainerStyle}
    >
      <div className="card-image-container">
        <img className="card-image" src={icon} alt={iconAlt} />
      </div>
      <h2 style={mainTextStyle}>{mainText}</h2>
      <p style={secondaryTextStyle}>{secondaryText}</p>
    </section>
  );
}
