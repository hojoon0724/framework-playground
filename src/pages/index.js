import Link from 'next/link';

export default function Home() {
  return (
    <section>
      <div className="top-container">
        <h1>Test pages</h1>
        <Link href="/tailwind">Tailwind</Link>
        <p className="max-w-prose">
          Nostrud nisi mollit fugiat culpa adipisicing elit proident officia cupidatat. Excepteur irure dolor magna
          consequat in deserunt duis aute. Adipisicing veniam amet amet nisi ut in nostrud aute anim ad. Ipsum
          adipisicing mollit officia ex sit Lorem. Pariatur pariatur enim eiusmod qui nostrud nostrud do in sunt ipsum.
          Excepteur adipisicing eu minim do nostrud minim ea enim mollit.
        </p>
      </div>
    </section>
  );
}
