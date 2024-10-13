import Marquee from 'react-fast-marquee';
import SquareBlock100 from '@/components/SquareBlock100';

export default function reactMarquee({}) {
  return (
    <section>
      <h1>React Marquee</h1>
      <Marquee speed={50}>
        <SquareBlock100 />
        <SquareBlock100 />
        <SquareBlock100 />
        <SquareBlock100 />
        <SquareBlock100 />
        <SquareBlock100 />
        <SquareBlock100 />
        <SquareBlock100 />
      </Marquee>
    </section>
  );
}
