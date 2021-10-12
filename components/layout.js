import Head from "next/head";

export default function layout({ children, page }) {
  return (
    <div className="bg-blue-50 pt-5 text-center min-h-screen">
      <Head>
        <title>{page}</title>
      </Head>
      <header className="container-lg">
        <h1>Ici le Hearder du Layout</h1>
      </header>
      {children}
    </div>
  );
}
