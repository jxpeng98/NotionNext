import React from 'react'
import BLOG from '@/blog.config'
import SocialButton from './SocialButton'
import { AdSlot } from '@/components/GoogleAdsense'
import LazyImage from '@/components/LazyImage'
import Image from 'next/image'
// import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function () {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return (
        <footer
            className='relative z-10 flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm'
        >

            {/* 颜色过度区 */}
            <div id='color-transition' className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white  dark:bg-[#1a191d] dark:from-inherit dark:to-inherit'>

            </div>

            {/* 社交按钮 */}
            <div className='w-full h-8'>
                <SocialButton />
            </div>

            <AdSlot type='native'/>
            <br />

            {/* 底部页面信息 */}
            <div id='footer-bottom' className='w-full h-12 flex flex-col p-3 lg:flex-row justify-between px-6 items-center bg-[#f1f3f7] dark:bg-[#30343f]'>

              <div id='footer-bottom-left' className="flex items-center flex-auto">
                <a href='https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral' className='mr-1'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image
                    src="https://img.jxpeng.dev/2023-07-fdb8e19f89df3d1d0cd86bec5e725bc2.webp"
                    alt="upyun"
                    height={20}
                    width={60}
                    className="mr-1" // use Tailwind CSS for margin. Adjust as necessary
                  />
                </a>
                <a href='https://github.com/tangly1024/NotionNext' className='underline font-bold dark:text-gray-300 mr-1'>NotionNext</a>
                {/* {` ${BLOG.VERSION} `} */}
                <i className='fas fa-copyright mx-1' /> {`${copyrightDate}`}
                {/* <i className='mx-1 animate-pulse fas fa-heart' /> */}
                <a href={BLOG.WEBURL} className='underline font-bold dark:text-gray-300 ml-1'>{BLOG.AUTHOR}</a>
              </div>

            <div id='footer-bottom-right'>
                {BLOG.BEI_AN && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{BLOG.BEI_AN}</a></>}

                <span className='hidden busuanzi_container_site_pv'>
                    <i className='fas fa-eye' /><span className='px-1 busuanzi_value_site_pv'> </span>  </span>
                <span className='pl-2 hidden busuanzi_container_site_uv'>
                    <i className='fas fa-users' /> <span className='px-1 busuanzi_value_site_uv'> </span> </span>

                {/* <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>{title} {BLOG.BIO && <>|</>} {BLOG.BIO}</h1> */}

            </div>
        </div>
        </footer >
  )
}

export default Footer
