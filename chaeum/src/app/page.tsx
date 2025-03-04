import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MainOption from '@/components/MainOption';

export default function Home() {
  return (
    <div className="flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="relative">
        <Carousel />
        <div className="absolute top-0 left-0 right-0 z-10">
          <Header />
        </div>
        <MainOption />
        <Footer />
      </div>
    </div>
  );
}
