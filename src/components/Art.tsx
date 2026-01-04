import Image from "next/image";
import ImageModal from "./ImageModal";
import OverlayAnimation from "./OverlayFilter";

function Art() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden flex flex-col items-center gap-12 py-16">

      {/* Content Wrapper */}
      <div className="w-full max-w-6xl px-6">

        {/* Title */}
        <h1 className="font-pirate text-3xl sm:text-4xl md:text-5xl text-center mb-12">
          Some of the latest
        </h1>

        {/* Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-4 
          grid-rows-2 
          gap-4
        ">
          <div className="col-span-1 h-60 rounded-xl bg-gradient-to-r from-green-500 to-green-700 relative overflow-hidden">
            <Image
              src="/images/img2.jpeg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-1 md:col-span-2 rounded-xl bg-gradient-to-r from-rose-500 to-fuchsia-700 h-60 relative overflow-hidden" >
            <Image
              src="/images/img4.jpeg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>

          <div className="col-span-1 rounded-xl bg-gradient-to-r from-rose-500 to-fuchsia-700 h-60 overflow-hidden relative" >
            <Image
              src="/images/img1.jpeg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>

          <div className="col-span-1 h-60 rounded-xl  relative overflow-hidden">
            <Image
              src="/images/hritik.jpeg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>


          <div className="col-span-1 rounded-xl bg-gradient-to-r from-green-500 to-green-700 h-60 overflow-hidden relative" >
            <Image
              src="/images/img3.jpeg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 rounded-xl bg-gradient-to-r from-rose-500 to-fuchsia-700 h-60 overflow-hidden relative" >
            <Image
              src="/images/img5.jpeg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <OverlayAnimation />
    </div>
  );
}

export default Art;
