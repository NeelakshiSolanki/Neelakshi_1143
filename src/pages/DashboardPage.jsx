import React from "react";



const followersData = [
  { date: "Mon", followers: 200 },
  { date: "Tue", followers: 450 },
  { date: "Wed", followers: 600 },
  { date: "Thu", followers: 800 },
  { date: "Fri", followers: 1000 },
];

const engagementData = [
  { platform: "Instagram", engagement: 78 },
  { platform: "X", engagement: 65 },
  { platform: "YouTube", engagement: 85 },
];

export default function DashboardPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📊 Social Media Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="p-4">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Follower Growth</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={followersData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="followers" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Engagement by Platform</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={engagementData}>
                <XAxis dataKey="platform" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="engagement" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
