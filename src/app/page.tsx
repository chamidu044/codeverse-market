import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import {
  ArrowDownToLine,
  CheckCircle,
  Lamp,
  Leaf,
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundBeams />
      </div>
      
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl relative z-10'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl'>
          One stop marketplace for <br/>{' '}
            <span className='text-gradient'>
            all your digital assets
            </span>
             {' '}!
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Welcome to Codeverse Marketplace. Every asset on our
            platform is verified by our team to ensure our
            highest quality standards.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href='/products'
              className={buttonVariants()}>
              Browse Trending &rarr;
            </Link>
          </div>
        </div>

        <ProductReel
          query={{ sort: 'desc', limit: 4 }}
          href='/products?sort=recent'
          title='Brand new'
        />
      </MaxWidthWrapper>
    </div>
  )
}
