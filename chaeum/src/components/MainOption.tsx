import Link from 'next/link';
import Image from 'next/image';

const options = [
  { name: '거실', image: '/images/main/living-room.jpg', link: '/living-room' },
  { name: '침실', image: '/images/main/bed-room.jpg', link: '/bedroom' },
  { name: '주방', image: '/images/main/kitchen.jpg', link: '/kitchen' },
  { name: '오피스', image: '/images/main/office.jpg', link: '/office' },
];

export default function MainOption() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10 px-52">
      {options.map((option) => (
        <Link
          key={option.name}
          href={option.link}
          className="relative w-full aspect-[5/3] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
        >
          <div className="relative w-full h-full">
            <Image src={option.image} alt={option.name} fill className="object-cover" />
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
            <span className="text-white text-xl font-semibold">{option.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
