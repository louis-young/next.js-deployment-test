import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>

      <nav>
        <ul>
          {[
            {
              href: "/automatic-static-optimisation",
              label: "Automatic Static Optimisation",
            },
            { href: "/client-side-rendering", label: "Client-side Rendering" },
            {
              href: "/incremental-static-regeneration",
              label: "Incremental Static Regeneration",
            },
            { href: "/server-side-rendering", label: "Server-side Rendering" },
            {
              href: "/static-site-generation",
              label: "Static Site Generation",
            },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default HomePage;
