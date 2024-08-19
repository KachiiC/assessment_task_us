export const dummyData = {
  status: "ok",
  region: "eu-west",
  roles: ["socket", "other"],
  results: {
    services: { redis: true, database: true },
    stats: {
      servers_count: 2,
      online: 925,
      session: 0,
      server: {
        active_connections: 746,
        wait_time: 1251,
        workers: [
          [
            "requests:pageviews",
            {
              wait_time: 0,
              workers: 0,
              waiting: 0,
              idle: 0,
              time_to_return: 0,
              recently_blocked_keys: [],
              top_keys: []
            }
          ],
          [
            "io",
            {
              wait_time: 1251,
              workers: 414,
              waiting: 1,
              idle: 40,
              time_to_return: 0,
              recently_blocked_keys: [
                ["3FG7RD4yF6", 1, "2024-08-18T18:39:54.853Z"]
              ],
              top_keys: [
                ["3FG7RD4yF6", 0.2298507462686567],
                ["Bvy5aLQrQE", 0.07761194029850746],
                ["RQyhiCCU3y", 0.10746268656716418],
                ["ZrTi2CzEnj", 0.11343283582089553],
                ["k3C7AAdW8o", 0.07761194029850746]
              ]
            }
          ],
          [
            "requests:unsupported-users",
            {
              wait_time: 0,
              workers: 0,
              waiting: 0,
              idle: 0,
              time_to_return: 0,
              recently_blocked_keys: [],
              top_keys: []
            }
          ],
          [
            "recording-workers",
            {
              wait_time: 0,
              workers: 2,
              waiting: 0,
              idle: 2,
              time_to_return: 0,
              recently_blocked_keys: [],
              top_keys: []
            }
          ]
        ],
        cpu_load: 0.04,
        timers: 100
      }
    }
  },
  strict: false,
  server_issue: null
};
