import Navigation from './Navigation';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#454d3f' }} className="text-[#4db4d7] p-4">
      <div className="container mx-auto text-center">
        <h1 className="text-7xl font-bold mb-2">Daniel Gonzalez</h1>
        <Navigation />
      </div>
    </header>
  );
}
