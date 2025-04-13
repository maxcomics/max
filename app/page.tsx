import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ComicCourseLanding() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Turn Your Comic Book Passion Into Real Income
      </motion.h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-10">
        Learn how to create superhero Shorts that get millions of views and earn real money — even if you're starting from scratch.
      </p>
      <Button className="text-lg px-8 py-4 mb-16" size="lg">
        Get The Course Now
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {[
          {
            title: "No Experience Needed",
            text: "Build your channel from scratch using just your phone or laptop."
          },
          {
            title: "Step-by-Step System",
            text: "From comic selection to editing to monetization — it's all covered."
          },
          {
            title: "Earn Real Money",
            text: "Use your passion to make $1k+ in less than 2 months."
          },
        ].map((feature, index) => (
          <Card key={index} className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-300">{feature.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-20 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4">What You’ll Learn</h2>
        <ul className="text-lg space-y-2">
          <li>- How to find viral superhero moments</li>
          <li>- Write compelling 1-minute scripts</li>
          <li>- Edit eye-catching Shorts</li>
          <li>- Grow fast on YouTube & TikTok</li>
          <li>- Monetize your content & get paid</li>
        </ul>
      </div>

      <div className="mt-20 text-center">
        <p className="text-sm text-zinc-400 mb-2">Need help or have questions?</p>
        <p className="text-sm">DM "Shortizer" on Instagram <strong>@kenan_haz</strong> or email <strong>maxcomic11@gmail.com</strong></p>
      </div>
    </div>
  );
}
