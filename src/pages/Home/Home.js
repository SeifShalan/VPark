import Fleet from "../../components/Fleet/Fleet";
import PropositionBanner from "../../components/PropositionBanner/PropositionBanner";
import Statistics from "../../components/Statistics/Statistics";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <h1 className="welcome-message">Welcome! John Doe</h1>
      <div className="horizontal-container">
        <Fleet />
        <Statistics />
      </div>
      <PropositionBanner />
    </main>
  );
}

export default Home;
