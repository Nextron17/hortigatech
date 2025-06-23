
import Link from 'next/link';

export default function MiComponente() {
  return (
    <div>
      <h1>Home Principal</h1>
      <h1> </h1>
      <Link href="/home">
        <span className="bg-green-600 text-white p-2 rounded inline-block mt-4">login</span>
      </Link>

  
    </div>
  );
}
