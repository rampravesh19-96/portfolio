import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>

      {/* Top Section */}
      <div className='text-center'>

        <h2 className='font-semibold text-3xl mb-2'>
          Ram Pravesh Singh
        </h2>

        <div className='w-max flex items-center gap-2 mx-auto'>

          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt='email'
            className='w-6'
          />

          <span className='text-gray-700 dark:text-white/80'>
            praveshram1204@gmail.com
          </span>

        </div>

      </div>


      {/* Bottom Section */}
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>

        <p className='text-gray-600 dark:text-white/70'>
          © {new Date().getFullYear()} Ram Pravesh Singh. All rights reserved.
        </p>

        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>

          <li>
            <a
              target='_blank'
              rel="noopener noreferrer"
              href="https://github.com/rampravesh19-96"
              className='hover:text-black dark:hover:text-white'
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              target='_blank'
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ram-pravesh-singh-619000186/"
              className='hover:text-black dark:hover:text-white'
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a
              target='_blank'
              rel="noopener noreferrer"
              href="https://x.com/Ramprav79062397"
              className='hover:text-black dark:hover:text-white'
            >
              Twitter
            </a>
          </li>

        </ul>

      </div>

    </div>
  )
}

export default Footer