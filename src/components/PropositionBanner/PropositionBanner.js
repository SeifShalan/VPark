import "./PropositionBanner.css";

function PropositionBanner() {
  return (
    <div className="prop-banner">
      <img
        src="./assets/proposition-banner-img.png"
        className="prop-banner-top-img"
      />
      <div className="prop-banner-container">
        <h2 className="prop-banner-header">
          Get a bird’s eye <strong>view</strong> in a snap.
        </h2>
        <p className="prop-banner-subheader">
          We equip you with the tools to customise your dashboards and track
          fleet status, decorations, and violations at a glance. Easily run
          reports from a high-level overview down to the very last detail.
        </p>
      </div>
    </div>
  );
}

export default PropositionBanner;
