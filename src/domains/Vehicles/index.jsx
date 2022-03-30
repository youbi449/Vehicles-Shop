import React, { useEffect, useState } from "react";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import { getVehicles } from "../../services/vehicles";
import styled from "styled-components";

const ActionContainer = styled.div`
  margin-bottom: 1rem;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 0 auto;
  width: 77%;
`;

const PageList = styled.ul`
  display: flex;
  justify-content: center;
`;

const PageListItem = styled.li`
  margin: 1em;
  list-style: none;
`;
const Link = styled.a`
  text-decoration: none;
  color: black !important;
`;

export const PageTitle = styled.h3`
  text-align: center;
`;

// Review:
// 1. Here i had to change that "let order = false" thing ? state should be used here
// 2. The conditionnal rendering was too long, it should be better now
// 3. Pagination added
// 4. Few front change

const VehiculeIndex = () => {
  const [cars, setCars] = useState(null);
  const [isBlackOrWhite, setIsBlackOrWhite] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage, setVehiclesPerPage] = useState(10);

  useEffect(() => {
    const fetchCars = async () => {
      setCars(await getVehicles());
    };
    fetchCars();
  }, []);
  const lastCarIndex = currentPage * vehiclesPerPage;
  const firstCarIndex = lastCarIndex - vehiclesPerPage;
  const carsSorted =
    cars && isBlackOrWhite
      ? cars
          .filter((car) => car.color === "White" || car.color === "Black")
          .slice(firstCarIndex, lastCarIndex)
      : cars && cars.slice(firstCarIndex, lastCarIndex);

  const Paginate = () => {
    const pages = [];

    // We need to check if we want every cars or only black and white
    const pageNumber = !isBlackOrWhite
      ? Math.ceil(cars.length / vehiclesPerPage)
      : Math.ceil(
          cars.filter((car) => car.color === "White" || car.color === "Black")
            .length / vehiclesPerPage
        );

    for (let i = 1; i <= pageNumber; i++) {
      pages.push(
        <PageListItem key={i}>
          <Link
            href="#"
            onClick={() => setCurrentPage(i)}
            style={
              currentPage === i
                ? { backgroundColor: "red" }
                : { color: "black" }
            }
          >
            {i}
          </Link>
        </PageListItem>
      );
    }

    return <PageList>{pages}</PageList>;
  };
  const Vehicles = () => (
    <>
      <PageTitle>{isBlackOrWhite && <>Black or White</>}</PageTitle>
      <ActionContainer>
        <button
          name="blackOrWhite"
          style={{
            border: "none",
            cursor: "pointer",
            padding: "1em",
            margin: "1em",
          }}
          onClick={() => setIsBlackOrWhite(!isBlackOrWhite)}
        >
          Only black & white
        </button>
        <label>Trier par </label>
        <select
          value={vehiclesPerPage}
          onChange={(e) => {
            setVehiclesPerPage(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </ActionContainer>
      <CardContainer>
        {carsSorted.map((car) => {
          return <VehicleCard key={car.id} {...car} />;
        })}
      </CardContainer>
      <Paginate />
    </>
  );
  return !cars ? <>Loading</> : <Vehicles />;
};

export default VehiculeIndex;
