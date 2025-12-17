import ImageModal from "./ImageModel";

function Art() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden flex justify-center sm:m-6 md:m-10">
      <div className="w-full md:w-[85%]">
        {/* Title */}
        <div className="flex justify-center p-6 md:p-10">
          <h1 className="font-pirate text-3xl sm:text-4xl md:text-5xl text-center">
            Some of the latest
          </h1>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-3">
            <ImageModal
              src="/images/img2.jpeg"
              alt="grid-img-1"
              thumbClassName="w-full h-auto object-cover rounded-lg"
              name=""
              type=""
            />
          </div>

          <div className="md:col-span-6">
            <ImageModal
              src="/images/img3.jpeg"
              alt="grid-img-2"
              thumbClassName="w-full h-auto object-cover rounded-lg"
              name=""
              type=""
            />
          </div>

          <div className="md:col-span-3">
            <ImageModal
              src="/images/img1.jpeg"
              alt="grid-img-3"
              thumbClassName="w-full h-auto object-cover rounded-lg"
              name=""
              type=""
            />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6">
          <div className="md:col-span-8">
            <ImageModal
              src="/images/img5.jpeg"
              alt="grid-img-4"
              thumbClassName="w-full h-auto object-cover rounded-lg"
              name=""
              type=""
            />
          </div>
          <div className="md:col-span-4">
            <ImageModal
              src="/images/img4.jpeg"
              alt="grid-img-5"
              thumbClassName="w-full h-auto object-cover rounded-lg"
              name=""
              type=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Art;
