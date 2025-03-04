import React from 'react';
import Link from 'next/link';
import { categories } from '../constants/categories';

type MegaMenuProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const MegaMenu = ({ onMouseEnter, onMouseLeave }: MegaMenuProps) => (
  <div
    className="absolute left-0 w-full bg-white shadow-xl border-t z-50"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
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
);

export default MegaMenu;
