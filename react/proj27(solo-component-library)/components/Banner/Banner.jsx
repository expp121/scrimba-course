import errIcon from "./error-icon.svg";
import infoIcon from "./info-icon.svg";
import successIcon from "./success-icon.svg";
import warningIcon from "./warning-icon.svg";

const types = ["success", "warning", "error", "info"];
const icons = [successIcon, warningIcon, errIcon, infoIcon];
export default function Banner({ type = "info", message, description }) {
  return (
    message && <section
      className={`banner ${types.includes(type) ? "banner-" + type : ""}`}
    >
      <img className="banner-icon" src={icons[types.indexOf(type)]} alt={`${type} icon`} />
      <div>
        <h2>{message}</h2>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
