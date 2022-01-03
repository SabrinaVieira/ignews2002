import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title> Início| ig.news</title>
      </Head>
      <h1>Hello Wold</h1>
    <main>
      <section>
        <span>👏 Hey, welcome!</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get access to all the publications <br/>
          <span>for R$ 10,00 month</span>
        </p>
      </section>
      <img src="/images/avatar.svg" alt="Girl coding" />
    </main>
    </>
  );
}
