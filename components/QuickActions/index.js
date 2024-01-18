import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onTurnLightsOn,
  onTurnLightsOff,
  lightsOnCount,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          onTurnLightsOff();
        }}
        disabled={lightsOnCount === 0 ? true : false}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          onTurnLightsOn();
        }}
        disabled={lightsOnCount === 8 ? true : false}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
