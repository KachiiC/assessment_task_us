import { Empty, Statistic } from "antd";
import { IServerData } from "./Server.types";
import { ServerSockets, ServerStatus, ServerBoolean, ServerWorkersList } from "./ServerComponents";

export const ServerData = ({ data, error }: IServerData) => {
  if (error) {
    return  <Empty />;
  }

  const { services, stats } = data?.results;

  const regionWorkers = data.results.stats.server.workers

  return (
    <>
      <div className="server-data">
        <div className="server-overview">
          <div className="server-status-card">
            <h2>Status</h2>
            <div className="server-status-line">
              Server Status:&nbsp;
              <ServerStatus status={data?.status} />
            </div>
            <div className="server-status-line">
              Strict:&nbsp;
              <ServerBoolean valid={data?.strict} />
            </div>
            <div className="server-status-line">
              Roles:&nbsp;
              <ServerSockets sockets={data?.roles} />
            </div>
          </div>
          <div className="server-services-card">
            <h2>Services</h2>
            <div className="server-status-line">
              Redis:&nbsp;
              <ServerBoolean valid={services?.redis} />
            </div>
            <div className="server-status-line">
              Database:&nbsp;
              <ServerBoolean valid={services?.database} />
            </div>
          </div>
        </div>
        <div className="server-stats">
          <div className="server-stats-single">
            <Statistic title="Servers Count" value={stats?.servers_count} />
          </div>
          <div className="server-stats-single">
            <Statistic title="Online" value={stats?.online} />
          </div>
          <div className="server-stats-single">
            <Statistic title="Session" value={stats?.session} />
          </div>
          <div className="server-stats-single">
            <Statistic
              title="Active Connections"
              value={stats?.server?.active_connections}
            />
          </div>
          <div className="server-stats-single">
            <Statistic title="Wait Time" value={stats?.server?.wait_time} />
          </div>
        </div>
      </div>
      <div className="server-worker">
        <h2>Server Workers</h2>
        <ServerWorkersList workers={regionWorkers}/>
      </div>
      <pre>{JSON.stringify(data.results.stats.server.workers, null, 2)}</pre>
    </>
  );
};
