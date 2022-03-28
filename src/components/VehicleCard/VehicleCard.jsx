import styled from "styled-components";

const VehicleContainer = styled.div`
  border: 1px solid #000;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  margin: 1rem;
`;

const HeaderCard = styled.div`
  text-align: center;
`;
let VehicleCard = (props) => {
  return (
    <VehicleContainer>
      <HeaderCard>
        #{props.id} - <b>{props.make_and_model}</b> ({props.color})
      </HeaderCard>
      {props.doors < 2 && <div>{props.doors} door</div>}
      {props.doors >= 2 && <div>{props.doors} doors</div>}
      <div>{props.mileage} miles</div>
    </VehicleContainer>
  );
};

export default VehicleCard;
