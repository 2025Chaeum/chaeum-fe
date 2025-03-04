import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import MainImage from 'public/images/test-main.png';

export default function Home() {
  return (
    <div className="flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="relative">
        <Image src={MainImage} alt="테스트 메인 이미지" className="w-full" />
        <div className="absolute top-0 left-0 right-0 z-10">
          <Header />
        </div>
        <Footer />
      </div>
    </div>
  );
}
