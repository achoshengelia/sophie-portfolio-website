import Link from 'next/link';

const NotFound = () => {
  return (
    <main className="text-white">
      <h2>Page Not Found</h2>
      <p>
        <Link href="/">back home</Link>
      </p>
    </main>
  );
};

export default NotFound;
