import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

const initialLights = [
  { id: "1", name: "Living Room", isOn: false },
  { id: "2", name: "Kitchen", isOn: false },
  { id: "3", name: "Bedroom", isOn: false },
  { id: "4", name: "Bathroom", isOn: false },
  { id: "5", name: "Garage", isOn: false },
  { id: "6", name: "Porch", isOn: false },
  { id: "7", name: "Garden", isOn: false },
  { id: "8", name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function handleToggle(lightId) {
    setLights(
      lights.map((light) =>
        light.id === lightId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  const lightsOn = lights.filter((light) => light.isOn);
  const lightsOnCount = lightsOn.length;

  function handleTurnLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  function handleTurnLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  const isDimmed = lightsOnCount === 0 ? true : false;

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleToggle={handleToggle}
        lightsOnCount={lightsOnCount}
        handleTurnLightsOn={handleTurnLightsOn}
        handleTurnLightsOff={handleTurnLightsOff}
      />
    </Layout>
  );
}
