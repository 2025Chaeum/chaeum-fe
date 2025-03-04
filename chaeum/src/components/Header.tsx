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

const categories = [
  { name: '홈', route: '/', subcategories: [] },
  {
    name: '거실',
    route: '/product/living',
    subcategories: ['소파', '거실장', '거실테이블', '중문/홈도어'],
  },
  {
    name: '침실',
    route: '/admin/product/regist',
    subcategories: ['침대', '옷장', '화장대', '수납장', '거울', '스툴'],
  },
  {
    name: '주방',
    route: '/product/kitchen',
    subcategories: ['식탁', '식탁의자', '주방수납장', '싱크대'],
  },
  {
    name: '오피스',
    route: '/product/office',
    subcategories: ['컴퓨터 책상', '의자', '수납장', '소파/테이블', 'ACC'],
  },
];

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
  const isLoggedIn = true; // 추후 변경
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
          <SearchIcon fill={isMainPage ? 'white' : 'black'} className="cursor-pointer" />
        </div>

        <div className="flex space-x-8 text-base font-normal">{renderNavButtons()}</div>
      </div>

      {/* 메가 메뉴 */}
      {hoveredCategory && (
        <div
          ref={megaMenuRef}
          className="absolute left-0 w-full bg-white shadow-xl border-t z-50"
          onMouseEnter={() => setHoveredCategory(hoveredCategory)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="max-w-[80%] min-w-[1280px] mx-auto py-9">
            <div className="grid grid-cols-5 gap-20">
              {categories.map((category) => (
                <div key={category.name} className="space-y-4">
                  {category.name === '홈' ? (
                    <Link href="/" className="text-lg font-semibold hover:underline">
                      홈으로
                    </Link>
                  ) : (
                    <Link
                      href={category.route}
                      className="text-lg font-semibold border-b pb-4 block hover:underline"
                    >
                      {category.name}
                    </Link>
                  )}
                  <ul className="space-y-3">
                    {category.subcategories.map((sub) => (
                      <li
                        key={sub}
                        className="text-base font-medium text-darkGray hover:text-black hover:underline transition-colors cursor-pointer"
                      >
                        <Link
                          href={`/category/${encodeURIComponent(category.name)}/${encodeURIComponent(sub)}`}
                        >
                          {sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
