
const H1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-4xl font-bold">{children}</h1>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-semibold">{children}</h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl font-medium">{children}</h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base">{children}</p>
);

export { H1, H2, H3, P };
