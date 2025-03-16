import IconComponent from "@/components/IconComponent";

const techStack = [
  { name: "JavaScript", src: "/logos/javascript.svg" },
  { name: "TypeScript", src: "/logos/typescript.svg" },
  { name: "ReactJS", src: "/logos/reactjs.svg" },
  { name: "NextJS", src: "/logos/nextjs.svg" },
  { name: "NodeJS", src: "/logos/nodejs.svg" },
  { name: "NestJS", src: "/logos/nestjs.svg" },
  { name: "PostgreSQL", src: "/logos/postgresql.svg" },
  { name: "Web3", src: "/logos/web3.svg" },
  //{ name: "Docker", src: "/logos/solana.svg" },
  // { name: "Solidity", src: "/logos/solidity.svg" },
  //{ name: "Ruby on Rails", src: "/logos/rails.svg" },
];

export default function Stack() {
  return (
    <div>
      <div className="px-16 pt-8 flex flex-col">
        <span className="text-2xl font-bold">Stack</span>
        <div className="text-gray-400">I mostly work with</div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 py-6">
        {techStack.map((tech) => (
          <IconComponent key={tech.name} name={tech.name} src={tech.src} />
        ))}
      </div>
    </div>
  );
}
