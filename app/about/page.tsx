import { allTeamMembers } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();

export const revalidate = 60;

// Filter and sort team members
export async function getTeamMembers() {
  // Filter for TeamMember documents and sort by name
  return allTeamMembers
    .filter((doc) => doc._raw.sourceFileDir === 'team')
    .sort((a, b) => a.title.localeCompare(b.title));
}

export default async function AboutPage() {
  // Get view counts for the about page
  const views = await redis.get<number>(["pageviews", "about"].join(":")) ?? 0;
  const teamMembers = await getTeamMembers();

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About Flamehead Labs
          </h2>
          <p className="mt-4 text-zinc-400">
            Innovating the future, one line of code at a time
          </p>
          <div className="flex items-center justify-center mt-4 text-sm text-zinc-500">
            <Eye className="w-4 h-4 mr-1" />
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="mx-auto max-w-3xl space-y-8">
          <div className="prose dark:prose-invert">
            <h3>Our Story</h3>
            <p>
              Flamehead Labs is a forward-thinking technology startup dedicated to building innovative 
              solutions that solve real-world problems. Founded by a team of passionate engineers and 
              designers, we combine cutting-edge technology with creative thinking to deliver exceptional 
              products and services.
            </p>
            <h3>Our Mission</h3>
            <p>
              We believe in the power of technology to transform businesses and improve lives. Our mission 
              is to create elegant, efficient, and impactful solutions that help our clients achieve their 
              goals and make a positive difference in the world.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-zinc-400">
            The brilliant minds behind Flamehead Labs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {teamMembers.map((member) => (
            <Card key={member.slug}>
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center text-2xl font-bold text-zinc-200">
                    {member.title.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-100">
                      {member.title}
                    </h3>
                    <p className="text-zinc-400">{member.role}</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-zinc-300">
                  {member.body.raw}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
