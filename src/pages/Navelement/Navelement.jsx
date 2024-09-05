import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navelement({ menuOpen, setMenuOpen, navDark }) {
  const location = useLocation();
  const navigate = useNavigate(); 
  const currentPath = location.pathname;

  const getLinkClass = (link) => (
    currentPath === link
      ? 'text-orange-600 underline'
      : navDark ? 'hover:text-gray-300' : 'hover:text-gray-700'
  );

  const handleLinkClick = (event, link) => {
    if (link === '/#events') {
      event.preventDefault();

      setTimeout(() => {
        const element = document.querySelector('#events');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.error("Element with ID 'events' not found. Redirecting to homepage.");
          navigate('/'); 
        }
      }, 0);
    } else {
      navigate(link);
    }

    setMenuOpen(false); 
  };

  return (
    <div id="nav-bar" className={`w-full h-16 md:h-24 flex items-center justify-between px-4 md:px-8 ${navDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <span className={`hidden md:block font-bold font-dosis text-3xl ${navDark ? 'text-white' : 'text-black'}`}>
        Electricity Demand Forecast
      </span>

      <button
        className={`${navDark ? 'text-white' : 'text-black'} xl:hidden text-3xl justify-center`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✖' : '☰'}
      </button>

      <nav className="hidden xl:flex items-center space-x-6 md:space-x-20 py-2 font-dosis text-sm md:text-md mr-10">
        {['/', '/insights'].map((link) => (
          <Link
            key={link}
            to={link}
            className={`text-base md:text-lg font-bold text-center transition-transform duration-300 p-2 rounded-lg ${getLinkClass(link)}`}
            onClick={(event) => handleLinkClick(event, link)}
          >
            {link === '/' ? 'Home' : 'Insights'}
          </Link>
        ))}
      </nav>

      {menuOpen && (
        <div className={`fixed inset-0 ${navDark ? 'bg-black' : 'bg-white'} bg-opacity-80 z-20 flex flex-col items-center justify-center`}>
          <button
            className="absolute top-4 right-4 text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </button>
          <nav className="flex flex-col items-center space-y-6 font-dosis text-lg font-bold w-1/2 text-center">
            {['/', '/insights'].map((link) => (
              <Link
                key={link}
                to={link}
                className={`transition-transform w-full p-2 rounded-md ${getLinkClass(link)} ${navDark ? 'bg-white text-black' : 'bg-black text-white'} text-center duration-300 hover:scale-110`}
                onClick={(event) => handleLinkClick(event, link)}
              >
                {link === '/' ? 'Home' : 'Insights'}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navelement;
