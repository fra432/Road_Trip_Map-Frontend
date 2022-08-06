import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import Trip from "../Trip/Trip";
import { useLayoutEffect } from "react";
import { getUserTripsThunk } from "../../redux/thunks/tripsThunks";
import TripsListStyled from "./TripsListStyled";
import Carousel from "better-react-carousel";

const TripsList = () => {
  const { userTrips } = useAppSelector((state) => state.userTrips);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(getUserTripsThunk());
  }, [dispatch]);

  const responsive = [
    {
      breakpoint: 600,
      cols: 1,
      rows: 1,
      gap: 1,
      loop: true,
    },
    {
      breakpoint: 700,
      cols: 2,
      rows: 1,
      gap: 1,
      loop: true,
    },

    {
      breakpoint: 800,
      cols: 2,
      rows: 1,
      gap: 1,
      loop: true,
    },
    {
      breakpoint: 850,
      cols: 2,
      rows: 1,
      gap: 3,
      loop: true,
    },

    {
      breakpoint: 1000,
      cols: 3,
      rows: 1,
      gap: 3,
      loop: true,
    },
    {
      breakpoint: 1100,
      cols: 3,
      rows: 1,
      gap: 2,
      loop: true,
    },
    {
      breakpoint: 2000,
      cols: 4,
      rows: 1,
      gap: 2,
      loop: true,
    },
  ];

  return (
    <TripsListStyled>
      <Carousel responsiveLayout={responsive} loop>
        {userTrips.map((trip, position) => {
          return (
            <Carousel.Item>
              <Trip key={trip.id as string} trip={trip} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </TripsListStyled>
  );
};

export default TripsList;
