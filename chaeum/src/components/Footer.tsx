import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#333333] text-white px-56 py-12 flex justify-between items-center">
      <div>
        <div className="text-lg">
          <span className="font-semibold">대표이메일</span> chaeum@chaeum.co.kr
        </div>
        <div className="text-sm opacity-70 mt-3">© CHAEUM All Rights Reserved.</div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold mt-1">C H A E U M</div>
        <div className="text-base opacity-90 mt-1">채움</div>
      </div>
    </footer>
  );
}

export default Footer;
