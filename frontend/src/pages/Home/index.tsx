import { FC } from "react";
import { Card } from "antd";
import { regionList } from "../../data/regionList";
import { HomeCard } from "./HomeCards";
import { HomeTitle } from "./HomeTitle";
import "./Home.scss";
import SiteNavbar from "../../components/SiteNavbar";

export const Home: FC = () => {
  const { Grid } = Card;
  const displayedHomeCards = regionList.map(({ name, value, image }, index) => (
    <HomeCard name={name} value={value} image={image} key={index} />
  ));

  return (
    <>
      <SiteNavbar />
      <div className="page-container">
        <HomeTitle />
        <Grid className="home-cards">{displayedHomeCards}</Grid>
      </div>
    </>
  );
};
