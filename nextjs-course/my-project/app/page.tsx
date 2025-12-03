import Image from "next/image";

export default function Home() {
  return (
      <>
        <section>
          <h1 className="font-bold text-5xl">Discover what&apos;s possible with 3D printing</h1>
          <p className="font-thin">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>
          <button className="uppercase font-light border-2 p-2">Browse models</button>
          <img src="" alt="mainImg" />
        </section>
      </>
  );
}
