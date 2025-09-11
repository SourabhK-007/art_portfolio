function Art() {
    return (
        <div className="relative h-dvh w-screen overflow-hidden flex justify-center" >
            <div className="w-[85%]">
                <div className='top-grid'>
                    <div className='md:col-span-3'>

                        <img src="/images/img2.jpeg" alt="grid-img-1" />
                    </div>

                    <div className='md:col-span-6 object-cover'>

                        <img src="/images/img3.jpeg" alt="grid-img-1" className="object-cover" />
                    </div>

                    <div className='md:col-span-3'>

                        <img src="/images/img1.jpeg" alt="grid-img-1" />
                    </div>

                </div>
                <div className='bottom-grid'>
                    <div className='md:col-span-8 '>
                       
                        <img src="/images/img5.jpeg" alt="grid-img-1" />
                    </div>
                    <div className='md:col-span-4 '>
                      
                        <img src="/images/img4.jpeg" alt="grid-img-1" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Art