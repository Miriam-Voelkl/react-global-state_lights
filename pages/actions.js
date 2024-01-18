import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  handleTurnLightsOn,
  handleTurnLightsOff,
  lightsOnCount,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onTurnLightsOn={handleTurnLightsOn}
        onTurnLightsOff={handleTurnLightsOff}
        lightsOnCount={lightsOnCount}
      />
    </>
  );
}
