import React from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const postData = [
  { title: "🌅 Beach Vibes", likes: 150, comments: 45, shares: 12 },
  { title: "📢 Announcement", likes: 230, comments: 60, shares: 30 },
  { title: "🎉 Giveaway", likes: 500, comments: 100, shares: 80 },
  { title: "📸 BTS Snap", likes: 320, comments: 85, shares: 20 },
];

export default function PostsPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📝 Post Analytics</h1>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Card className="p-4">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Engagement Metrics</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={postData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <XAxis dataKey="title" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="likes" fill="#3b82f6" name="Likes" radius={[4, 4, 0, 0]} />
                <Bar dataKey="comments" fill="#10b981" name="Comments" radius={[4, 4, 0, 0]} />
                <Bar dataKey="shares" fill="#f59e0b" name="Shares" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Card className="p-4 mt-6">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Posts Summary</h2>
            <div className="space-y-3">
              {postData.map((post, idx) => (
                <div
                  key={idx}
                  className="border rounded-xl p-4 hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-medium">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    👍 {post.likes} | 💬 {post.comments} | 🔁 {post.shares}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
