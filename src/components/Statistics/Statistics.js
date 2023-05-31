import { statsData } from "./Statistics.config";
import "./Statistics.css";

function Statistics() {
  return (
    <div className="stats-container">
      <div className="stats-chart-container"></div>
      {statsData.map((stat) => (
        <div className="stats-card" key={stat.label}>
          <img
            src={`./assets/${stat.icon}`}
            width={65}
            height={65}
            alt={stat.label}
          />
          <div className="stats-card-value">{stat.value}</div>
          <div className="stats-card-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default Statistics;
