import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <section
      id="hero"
      className="page-container min-h-[calc(100vh-96px)] grid grid-cols-1 md:grid-cols-2 items-center py-8 gap-20 relative overflow-hidden"
    >
      <div className="md:relative md:bottom-24">
        <h1>Code meets creativity</h1>
        <p>
          I develop websites where clean code and thoughtful design come together to create
          seamless, user-focused experiences.
        </p>
      </div>
      <div className="relative w-full h-full max-h-[46rem] flex justify-center items-center p-8">
        <div className="w-[296px] relative h-full">
          {/* Rocket Illustration */}
          <div className="md:hidden z-20">
            <Image
              src="/images/Rocket.png"
              alt="Rocket Illustration"
              width={160}
              height={420}
              className="mx-auto"
            />
          </div>
          <div className="hidden md:block relative w-full h-full z-20">
            <Image
              src="/images/Rocket.png"
              alt="Rocket Illustration"
              fill
              className="object-contain"
            />
          </div>
          {/* Quad Illustration */}
          <div className="absolute top-0 right-[-2rem] md:right-[-3rem] lg:right-[-5rem] z-20">
            <Image
              src="/images/QuadGeometry.png"
              alt="Figma Illustration"
              width={164}
              height={164}
              className="object-contain w-20 h-20 md:w-26 md:h-26 lg:w-32 lg:h-32"
            />
          </div>

          {/* Triangle Illustration */}
          <div className="absolute left-[-2.5rem] md:left-[-4rem] lg:left-[-6.5rem] top-46 md:top-68 z-20">
            <Image
              src="/images/TriGeometry.png"
              alt="Figma Illustration"
              width={64}
              height={64}
              className="object-contain w-18 h-18 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
          </div>

          {/* Figma Illustration */}
          <div className="absolute top-0 left-0 md:left-[-1rem] lg:left-[-2rem] z-20">
            <Image
              src="/images/FigmaPreview.png"
              alt="Figma Illustration"
              width={80}
              height={80}
              className="object-contain w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            />
          </div>

          {/* Blender Illustration */}
          <div className="absolute top-20 md:top-28 left-[-3rem] md:left-[-5rem] lg:left-[-8rem] z-20">
            <Image
              src="/images/BlenderPreview.png"
              alt="Blender Illustration"
              width={80}
              height={80}
              className="object-contain w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
          </div>

          {/* Angular Illustration */}
          <div className="absolute top-[18rem] md:top-[24rem] left-0 md:left-[-2rem] z-20">
            <Image
              src="/images/AngularPreview.png"
              alt="Angular Illustration"
              width={80}
              height={80}
              className="object-contain w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18"
            />
          </div>

          {/* React Illustration */}
          <div className="absolute top-[15rem] md:top-[22rem] right-4 md:right-[-2rem] z-20">
            <Image
              src="/images/ReactPreview.png"
              alt="React Illustration"
              width={80}
              height={80}
              className="object-contain w-14 h-14 md:w-18 md:h-18"
            />
          </div>

          {/* Tailwind Illustration */}
          <div className="absolute top-32 md:top-52 right-[-2rem] md:right-[-3rem] lg:right-[-5rem] z-20">
            <Image
              src="/images/TailwindPreview.png"
              alt="Tailwind Illustration"
              width={90}
              height={90}
              className="object-contain w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18"
            />
          </div>

          {/* Glow Illustrations */}
          <div className="absolute top-[-4rem] md:top-0 right-[-6rem] w-[500px] h-[500px] z-10">
            <Image src="/images/GlowWhite2.png" alt="White Lightning" width={800} height={800} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
