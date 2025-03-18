

"use client";

import IconComponent from "@/components/IconComponent";

const navLinks = [
  { name: "Home", logoSrc: "/logos/home.svg", href: "#" },
  { name: "My Stacks", logoSrc: "/logos/stack.svg", href: "#stacks" },
  { name: "Contact", logoSrc: "/logos/contact.svg", href: "#contact" },
];

interface INavLink {
  name: string;
  logoSrc: string;
  href: string;
}

export default function Navbar() {
  return (
    <div className=" md:p-8 h-screen flex flex-col">
      <div className="text-end">Logo</div>
      {/* <div className="flex gap-y-4 flex-col flex-grow justify-center">
        {navLinks.map((navLink: INavLink) => {
          return (
            <div className="text-end" key={navLink.name}>
              <IconComponent
                key={navLink.name}
                name={navLink.name}
                src={navLink.logoSrc}
                width={32}
              />
            </div>
          );
        })}
      </div>    
      <div className="text-end">
        <IconComponent
          key={"uparrow"}
          name={"uparrow"}
          src={"/logos/uparrow.svg"}
          width={18}
        />
      </div>
 */}
    </div>
  );
}
