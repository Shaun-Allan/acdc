import React, { useState } from "react";
import Navelement from "../Navelement/Navelement";

const Analysis = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='w-screen h-screen flex flex-col p-0 overflow-hidden bg-white'>
      <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <iframe
        title="elec_analysis"
        className="w-full"
        style={{ height: 'calc(100vh - 4rem)' }} // For small screens, 4rem = 64px (h-16)
        src="https://app.powerbi.com/reportEmbed?reportId=b9accf5f-92e1-479b-92b7-53db0e58b6b7&autoAuth=true&ctid=7fc0cae6-15fd-4c49-9233-a1ab3f067b1a"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Analysis;
