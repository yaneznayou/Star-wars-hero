import Link from 'next/link';
import './globals.css'

const Home = () => {
  return (
      <div>
    <div className="star-wars">
        <div className="crawl">
        <h1 className="title">Let's go to the Star Wars Universe</h1>
        </div>
    </div>
          <Link href={'/heroes'} className="inline-block px-6 py-3 text-lg">
              <img width="100" height="100" src="https://img.icons8.com/stickers/100/death-star.png" alt="death-star"/>
          </Link>
      </div>
  );
};

export default Home;
