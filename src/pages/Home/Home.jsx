import Navelement from "../Navelement/Navelement";
import React, { useState, useEffect, useRef } from 'react'; 

function Error() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='w-screen flex flex-col items-center p-0 overflow-x-hidden overflow-clip bg-white h-screen'>
      <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      Home Page
    </div>
  );
}

export default Error;
