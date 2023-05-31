import Fleet from "../../components/Fleet/Fleet";
import PropositionBanner from "../../components/PropositionBanner/PropositionBanner";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <h1 className="welcome-message">Welcome! John Doe</h1>
      <div className="horizontal-container">
        <Fleet />
        <Fleet />
      </div>
      <PropositionBanner />
    </main>
  );
}

export default Home;
