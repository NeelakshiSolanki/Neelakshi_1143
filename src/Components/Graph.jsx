import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Graph = ({ data, dataKey1, dataKey2, dataKey3, title }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Bar dataKey={dataKey1} fill="#3b82f6" name="Likes" radius={[4, 4, 0, 0]} />
          <Bar dataKey={dataKey2} fill="#10b981" name="Comments" radius={[4, 4, 0, 0]} />
          <Bar dataKey={dataKey3} fill="#f59e0b" name="Shares" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
