type DashboardDataDto = {
  performance: {
    users: string;
    months: string[];
    userCounts: number[];
  };
  sessionsByDevice: {
    desktop: { value: number; percentage: number };
    mobile: { value: number; percentage: number };
    tablet: { value: number; percentage: number };
  };
  stats: { title: string; value: string; change: string }[];
  dailyOverview: {
    users: { today: number; expected: number };
    goals: { today: number; expected: number };
  };
};

export const dashboardData: DashboardDataDto = {
  performance: {
    users: "13k",
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    userCounts: [8, 9, 11, 12, 13, 10, 9, 12, 13, 14, 12, 15],
  },
  sessionsByDevice: {
    desktop: { value: 8085, percentage: 13 },
    mobile: { value: 8085, percentage: 30 },
    tablet: { value: 8085, percentage: 25 },
  },
  stats: [
    { title: "Users", value: "72.6k", change: "+25%" },
    { title: "Sessions", value: "87.2k", change: "+47%" },
    { title: "Bounce Rate", value: "26.3%", change: "-28%" },
    { title: "Session Duration", value: "2m 18s", change: "+13%" },
  ],
  dailyOverview: {
    users: { today: 5461, expected: 8085 },
    goals: { today: 140, expected: 120 },
  },
};
