import { useParams } from "react-router-dom";
import SiteNavbar from "../../components/SiteNavbar";
import { useDataFetch } from "../../services/dataFetch";
import { ServerData } from "./ServerData";
import "./Server.scss";
import { SiteLoading } from "../../components/SiteLoading";
import { regionList } from "../../data/regionList";

export const Server = () => {
  const { region } = useParams();

  const regionName = regionList.find(({ value }) => value === region)?.name;

  const { isLoading, hasError, resultsData } = useDataFetch();

  return (
    <>
      <SiteNavbar />
      <div className="page-container">
        <div className="server-container">
          <h1>
            {regionName} ({region})
          </h1>
          {isLoading ? (
            <SiteLoading />
          ) : (
            <ServerData data={resultsData} error={hasError} />
          )}
        </div>
      </div>
    </>
  );
};
