import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const links = ['about', 'portfolio', 'contact', 'resume'];

  return (
    <nav className="flex gap-8 items-center text-2xl">
      {links.map(link => (
        <NavLink
          key={link}
          to={`/${link}`}
          className={({ isActive }) =>
            isActive
              ? 'text-[#4db4d7] font-semibold px-3 py-2 rounded-md transition duration-300 ease-in-out'
              : 'text-white hover:text-[#4db4d7] hover:bg-[#454d3f] px-3 py-2 rounded-md transition duration-300 ease-in-out'
          }
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </NavLink>
      ))}
    </nav>
  );
}
