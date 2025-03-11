const navLinks = [
  { labels: "Home", href: "#" },
  { labels: "Experience", href: "#exp" },
  { labels: "My Stacks", href: "#stacks" },
  { labels: "Blogs", href: "#blogs" },
  { labels: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <div className="h-screen flex flex-col border-solid border-r-2 border-gray-800">
      <div className="text-end">Logo</div>
      <div className="flex flex-col flex-grow justify-center">
        <div className="text-end">L1</div>
        <div className="text-end">L2</div>
        <div className="text-end">L3</div>
      </div>
    </div>
  );
}
