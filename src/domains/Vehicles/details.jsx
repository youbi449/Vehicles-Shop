import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  border: 1px solid black;
  border-radius: 2px;
  margin: 0 auto;
  min-height: 80vh;
`;

const Details = styled.div`
  display: flex;
`;

const Options = styled.div`
  padding: 0 1em;
`;
const SubDetails = styled.div`
  padding: 1em;
`;
export const VehiclesDetails = (props) => {
  /* const { id } = useParams(); */
  const location = useLocation();
  const [car, setCar] = useState([]);
  useEffect(() => {
    setCar(location.state.props);
  }, [car, location]);
  return (
    <>
      <Container>
        <h2 style={{ margin: "1em 0", textAlign: "center" }}>
          {car.make_and_model}
        </h2>
        <Details>
          <Options>
            <h3>Options de la voiture</h3>
            <ul>
              {car.car_options &&
                car.car_options.map((option) => <li>{option}</li>)}
            </ul>
          </Options>
          <Options>
            <h3>Particularité</h3>
            <ul>{car.specs && car.specs.map((option) => <li>{option}</li>)}</ul>
          </Options>
        </Details>

        <SubDetails>
          <p>
            Type de carburant: <b>{car.fuel_type}</b>
          </p>
          <p>
            Kilométrage: <b>{car.mileage}</b>
          </p>
          <p>
            Plaque d'immatriculation: <b>{car.license_plate}</b>
          </p>
          <p>
            Portes: <b>{car.doors}</b>
          </p>
        </SubDetails>
      </Container>
    </>
  );
};
