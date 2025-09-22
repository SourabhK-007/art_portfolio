import ImageModal from "./ImageModel"


function Art() {
    return (
        <div className="relative h-dvh w-screen overflow-hidden flex justify-center" >
            <div className="w-[85%] ">
                <div className="flex justify-center ">
                    <h1 className="font-pirate text-5xl text-center">
                        Some of the latest
                    </h1>
                </div>
                <div className='top-grid'>
                    <div className='md:col-span-3'>

                   <ImageModal src="/images/img2.jpeg" alt="grid-img-1" thumbClassName="w-[700px] h-[600px]" name={""} type={""}/>
                    </div>

                    <div className='md:col-span-6 object-cover'>

                    <ImageModal src="/images/img3.jpeg" alt="grid-img-1" thumbClassName="w-full h-auto" name={""}  type={""}/>
                    </div>

                    <div className='md:col-span-3'>

                     <ImageModal src="/images/img1.jpeg" alt="grid-img-1" thumbClassName="w-[700px] h-[600px]" name={""}  type={""}/>
                    </div>

                </div>
                <div className="bottom-grid grid-cols-12 gap-4">
                    <div className="md:col-span-8">
                        <ImageModal src="/images/img5.jpeg" alt="grid-img-1" thumbClassName="w-full h-auto" name={""}  type={""}/>
                    </div>
                    <div className="md:col-span-4">
                        <ImageModal src="/images/img4.jpeg" alt="grid-img-2" thumbClassName="w-full h-auto" name={""} type={""} />
                    </div>
                </div>

            </div>


        </div>
    )
}
export default Art