import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import Image from 'next/image';
import rajani from '../../public/images/rajani.png';
import { getPosts } from '@/actions/post.action';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import quotes from '../quotes.json'
const Categories = ({ maskedImg, mainImg, type }: { maskedImg: string, mainImg: string, type: string }) => {
    const [title, setTitle] = useState("");
    const [quote, setQuote] = useState("");

    useEffect(() => {
        if (type === 'landscapes') {
            setQuote(quotes.quotes[0].quote);
            setTitle(quotes.quotes[0].title)
        } else if (type === 'portrait') {
            setQuote(quotes.quotes[1].quote);
            setTitle(quotes.quotes[1].title)
        } else if (type === 'negative') {
            setQuote(quotes.quotes[2].quote);
            setTitle(quotes.quotes[2].title)
        }
    }, [])
    console.log(title);


    console.log("vjjbsjk")

    const isMobile = useMediaQuery({ maxWidth: 767 });
    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top 10%';
        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true
            }
        })
        maskTimeline
            .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut' })
            .to(`.${maskedImg}`, {
                scale: 1.1,
                maskPosition: 'center',
                webkitMaskSize: '800%',
                duration: 2,
                ease: 'power1.inOut'
            })
            .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut' })
    }, [])

    return (
        <div id="art" className="flex flex-col justify-center ">
            {/* <h1>categories</h1> */}

            <div className=' masked-container'>
                <div className="cocktail-img justify-center">
                    <img
                        // src="/images/img2.jpeg"
                        src={mainImg}
                        alt="rajani"
                        className={`abs-center ${maskedImg} size-full object-contain`}
                    />
                </div>
            </div>
            <div id='masked-content'>
                {/* <h2 className='will-fade'>Sip-Worthy Perfection</h2> */}
                <div className='text-center font-pirate pt-10 pb-10'>
                    <h3 className='text-4xl'>{title}</h3>
                    <p className='text-2xl'>{quote}</p>
                </div>
            </div>




        </div>
    )

}

export default Categories