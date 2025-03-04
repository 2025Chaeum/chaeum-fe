'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchIcon from 'public/icons/search.svg';
import LoginIcon from 'public/icons/login.svg';
import LogoutIcon from 'public/icons/logout.svg';
import SignupIcon from 'public/icons/signup.svg';
import CartIcon from 'public/icons/cart.svg';
import MypageIcon from 'public/icons/mypage.svg';
import { categories } from '@/constants/categories';
import MegaMenu from './MegaMenu';

type NavButtonProps = {
  icon: React.ReactNode;
  label: string;
  isMainPage: boolean;
};

const NavButton = ({ icon, label, isMainPage }: NavButtonProps) => (
  <button
    className={`flex gap-2 justify-center items-center transition-colors ${
      isMainPage ? 'text-white' : 'text-black'
    }`}
  >
    {icon}
    {label}
  </button>
);

export default function Header() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [disableHover, setDisableHover] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const currentPath = usePathname();
  const isLoggedIn = false; // 추후 변경
  const isMainPage = currentPath === '/' && !hoveredCategory;

  // 메가 메뉴 외부로 이동: 메가 메뉴 close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setHoveredCategory(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // 페이지 이동 시 메가 메뉴 close && 300ms 동안 호버 비활성화
    setHoveredCategory(null);
    setDisableHover(true);

    const timer = setTimeout(() => {
      setDisableHover(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentPath]);

  const renderNavButtons = () => {
    if (isLoggedIn) {
      return (
        <>
          <NavButton
            icon={<LogoutIcon stroke={isMainPage ? 'white' : 'black'} />}
            label="로그아웃"
            isMainPage={isMainPage}
          />
          <NavButton
            icon={<CartIcon fill={isMainPage ? 'white' : 'black'} />}
            label="장바구니"
            isMainPage={isMainPage}
          />
          <NavButton
            icon={<MypageIcon fill={isMainPage ? 'white' : 'black'} />}
            label="마이페이지"
            isMainPage={isMainPage}
          />
        </>
      );
    }

    return (
      <>
        <NavButton
          icon={<LoginIcon fill={isMainPage ? 'white' : 'black'} />}
          label="로그인"
          isMainPage={isMainPage}
        />
        <NavButton
          icon={<SignupIcon stroke={isMainPage ? 'white' : 'black'} />}
          label="회원가입"
          isMainPage={isMainPage}
        />
      </>
    );
  };

  return (
    <header
      className={`w-full ${
        isMainPage
          ? 'bg-opacity-30 backdrop-blur-md bg-[#ABABAB] border-b border-white'
          : 'bg-white border-b'
      }`}
    >
      <div className="flex items-center justify-between max-w-[80%] min-w-[1280px] mx-auto py-7">
        <Link
          href="/"
          className={`text-3xl font-bold ${isMainPage ? 'text-white' : 'text-deepBlue'}`}
        >
          C H A E U M
        </Link>

        <nav>
          <ul className="flex gap-4 justify-center">
            {categories.map((category) => {
              // 현재 경로가 카테고리 경로와 일치하는지 확인
              const isActive =
                currentPath === category.route ||
                (category.route !== '/' && currentPath.startsWith(category.route));

              return (
                <li
                  key={category.name}
                  onMouseEnter={() => !disableHover && setHoveredCategory(category.name)}
                  className={`relative cursor-pointer py-1 px-4 ${
                    isMainPage
                      ? isActive
                        ? 'bg-white text-black rounded-full'
                        : 'text-white'
                      : isActive
                        ? 'bg-black text-white rounded-full'
                        : ''
                  }`}
                >
                  <Link
                    href={category.route}
                    className="transition-colors duration-300 hover:underline text-lg font-semibold"
                  >
                    {category.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={`flex items-center justify-between ${
            isMainPage ? 'bg-white bg-opacity-20' : 'bg-lightGray_200'
          } rounded-full px-4 py-2 w-60`}
        >
          <input
            type="text"
            className={`ml-3 w-[70%] bg-transparent focus:outline-none text-lg font-normal ${
              isMainPage ? 'text-darkBrown placeholder-white' : ''
            }`}
          />
          <SearchIcon
            width="28"
            height="28"
            fill={isMainPage ? 'white' : 'black'}
            className="cursor-pointer"
          />
        </div>

        <div className="flex space-x-8 text-base font-normal">{renderNavButtons()}</div>
      </div>

      {hoveredCategory && (
        <MegaMenu
          onMouseEnter={() => setHoveredCategory(hoveredCategory)}
          onMouseLeave={() => setHoveredCategory(null)}
        />
      )}
    </header>
  );
}
