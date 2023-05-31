import "./Fleet.css";
import React from "react";
import { vehicleData } from "./Fleet.config";

function Fleet() {
  const statusColors = React.useMemo(() => ["red", "yellow", "green"], []);

  const [expandedVehicle, setExpandedVehicle] = React.useState({});

  const vehicleInfo = React.useCallback(
    (index) => (
      <button
        className="fleet-vehicle"
        data-expanded={expandedVehicle[index]}
        onClick={() =>
          setExpandedVehicle((_expandedVehicle) => {
            return { ..._expandedVehicle, [index]: !_expandedVehicle[index] };
          })
        }
        key={`vehicle-${index}`}
      >
        <img className="fleet-vehicle-icon" src="./assets/svgs/vehicle.png" />
        <div className="fleet-vehicle-info">
          <div
            className="fleet-vehicle-status"
            color={statusColors[index % 3]}
          />
          Smart Vehicle {index + 1}
          <div
            className={`fleet-vehicle-chevron ${
              expandedVehicle[index] ? "expanded" : ""
            }`}
          />
        </div>
        {expandedVehicle[index] && (
          <div className="fleet-vehicle-expanded-info">
            {vehicleData.map((metric) => (
              <div
                key={`metric-${metric.label}`}
                className="fleet-vehicle-metric"
              >
                <img
                  src={`./assets/svgs/${metric.icon}`}
                  alt={metric.label}
                  height={26}
                />
                <p className="fleet-vehicle-metric-label">{metric.label}</p>
                <p className="fleet-vehicle-metric-description">
                  {metric.description}
                </p>
                <div
                  className="fleet-vehicle-metric-status"
                  data-status={metric.statusLevel}
                >
                  {metric.status}
                  <span />
                </div>
              </div>
            ))}
          </div>
        )}
      </button>
    ),
    [expandedVehicle, statusColors]
  );

  return (
    <div className="fleet-container">
      <div className="fleet-header">
        <h2 className="fleet-title">VPark Fleet</h2>
        <div className="fleet-buttons-container">
          <button className="fleet-view-button">
            <img src="./assets/svgs/grid-icon.svg" />
          </button>
          <button className="fleet-view-button">
            <img src="./assets/svgs/list-icon.svg" />
          </button>
        </div>
      </div>
      <div className="fleet-vehicles-container">
        <div className="fleet-scroll-container">
          {Array(20)
            .fill(1)
            .map((_, index) => vehicleInfo(index))}
        </div>
      </div>
    </div>
  );
}

export default Fleet;
