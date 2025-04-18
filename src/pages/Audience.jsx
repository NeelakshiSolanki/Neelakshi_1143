import React from "react";


const ageData = [
  { name: "13-17", value: 5 },
  { name: "18-24", value: 25 },
  { name: "25-34", value: 45 },
  { name: "35-44", value: 15 },
  { name: "45+", value: 10 },
];

const genderData = [
  { name: "Male", value: 52 },
  { name: "Female", value: 46 },
  { name: "Other", value: 2 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export default function AudiencePage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">👥 Audience Insights</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Card className="p-4">
            <CardContent>
              <h2 className="text-xl font-semibold mb-4">Age Distribution</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={ageData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Card className="p-4">
            <CardContent>
              <h2 className="text-xl font-semibold mb-4">Gender Breakdown</h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={genderData} dataKey="value" nameKey="name" outerRadius={80} label>
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
