import { CheckCircle, Code, Globe, Headphones, Server, Users } from "lucide-react";
import { ReactNode } from "react";
import abt from "../imgs/abt.jpg"

const Button = ({ children, className, ...props }: { children: ReactNode; className?: string; [key: string]: any }) => (
  <button
    className={`px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ children, className, ...props }: { children: ReactNode; className?: string; [key: string]: any }) => (
  <div className={`rounded-lg shadow-md overflow-hidden ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className, ...props }: { children: ReactNode; className?: string; [key: string]: any }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

export default function About() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            About Our IT Services
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-400 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            We provide cutting-edge IT solutions to help businesses thrive in the digital age.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="flex flex-col items-center p-6">
              <Globe className="h-12 w-12 text-blue-400" />
              <h3 className="mt-4 text-lg font-medium text-white">Global Reach</h3>
              <p className="mt-2 text-center text-gray-400">Serving clients worldwide with 24/7 support</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="flex flex-col items-center p-6">
              <Code className="h-12 w-12 text-blue-400" />
              <h3 className="mt-4 text-lg font-medium text-white">Custom Solutions</h3>
              <p className="mt-2 text-center text-gray-400">Tailored software development for your unique needs</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="flex flex-col items-center p-6">
              <Server className="h-12 w-12 text-blue-400" />
              <h3 className="mt-4 text-lg font-medium text-white">Cloud Expertise</h3>
              <p className="mt-2 text-center text-gray-400">Seamless cloud integration and management</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Approach</h2>
          <div className="mt-8 flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src={abt}
                alt="IT professionals working"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="mt-6 md:mt-0 md:ml-8 md:w-1/2">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 flex-shrink-0 text-green-400" />
                  <span className="text-gray-300">Innovative technology solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 flex-shrink-0 text-green-400" />
                  <span className="text-gray-300">Experienced and certified professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 flex-shrink-0 text-green-400" />
                  <span className="text-gray-300">Agile methodologies for faster delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 flex-shrink-0 text-green-400" />
                  <span className="text-gray-300">Comprehensive security measures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Team</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Alice Johnson", role: "CEO", icon: Users },
              { name: "Bob Smith", role: "CTO", icon: Code },
              { name: "Carol Williams", role: "Lead Developer", icon: Server },
              { name: "David Brown", role: "Support Manager", icon: Headphones },
            ].map((member) => (
              <Card key={member.name} className="bg-gray-800 border-gray-700">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-900">
                    <member.icon className="h-10 w-10 text-blue-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-white">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
