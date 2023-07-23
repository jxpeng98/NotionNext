import { useCallback, useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import throttle from 'lodash.throttle'
import RandomPostButton from './RandomPostButton'
import SearchButton from './SearchButton'
import DarkModeButton from './DarkModeButton'
import SlideOver from './SlideOver'
import ReadingProgress from './ReadingProgress'
import { MenuListTop } from './MenuListTop'
import { isBrowser } from '@/lib/utils'
import BLOG from '@/blog.config'
/**
 * 顶部导航
 * @param {*} param0
 * @returns
 */
const NavBar = props => {
  const [fixedNav, setFixedNav] = useState(false)
  const [textWhite, setTextWhite] = useState(false)
  const [navBgWhite, setBgWhite] = useState(false)

  const [activeIndex, setActiveIndex] = useState(0)

  const slideOverRef = useRef()

  const toggleMenuOpen = () => {
    slideOverRef?.current?.toggleSlideOvers()
  }

  /**
       * 根据滚动条，切换导航栏样式
       */
  const scrollTrigger = useCallback(throttle(() => {
    const scrollS = window.scrollY
    // 导航栏设置 白色背景
    if (scrollS <= 0) {
      setFixedNav(false)
      setBgWhite(false)

      // 文章详情页特殊处理
      if (document.querySelector('#post-bg')) {
        setFixedNav(true)
        setTextWhite(true)
        setBgWhite(false)
      }
    } else {
      // 向下滚动后的导航样式
      setFixedNav(true)
      setTextWhite(false)
      setBgWhite(true)
    }
  }, 200))

  // 监听滚动
  useEffect(() => {
    scrollTrigger()
    window.addEventListener('scroll', scrollTrigger)
    return () => {
      window.removeEventListener('scroll', scrollTrigger)
    }
  }, [])

  // 监听导航栏显示文字
  useEffect(() => {
    let prevScrollY = 0
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY

          if (currentScrollY > prevScrollY) {
            setActiveIndex(1) // 向下滚动时设置activeIndex为1
          } else {
            setActiveIndex(0) // 向上滚动时设置activeIndex为0
          }

          prevScrollY = currentScrollY
          ticking = false
        })

        ticking = true
      }
    }

    if (isBrowser()) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (isBrowser()) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (<>
        <style jsx>{`
            @keyframes fade-in-down {
                0% {
                opacity: 0.5;
                transform: translateY(-30%);
                }
                100% {
                opacity: 1;
                transform: translateY(0);
                }
            }
            
            @keyframes fade-in-up {
                0% {
                opacity: 0.5;
                transform: translateY(30%);
                }
                100% {
                opacity: 1;
                transform: translateY(0);
                }
            }
            
            .fade-in-down {
                animation: fade-in-down 0.3s ease-in-out;
            }
            
            .fade-in-up {
                animation: fade-in-up 0.3s ease-in-out;
            }
        `}</style>

        {/* 顶部导航菜单栏 */}
        <nav id='nav' className={`${fixedNav ? 'fixed' : 'relative bg-none'} ${textWhite ? 'text-white ' : 'text-black dark:text-white'}  ${navBgWhite ? 'bg-white dark:bg-[#18171d]' : 'bg-none'} z-20 h-12 top-0 w-full`}>
            <div className='flex h-full mx-auto justify-between items-center max-w-[86rem] px-8'>
                {/* 左侧logo */}
                <div className='flex'>
                  <Logo {...props} />
                  {/* {activeIndex === 0 && <Logo {...props} />} */}
                  {/* {activeIndex === 1 && <></>} */}
                </div>

                {/* 中间菜单 */}
              <div
                id='nav-bar-swipe'
                className={`lg:flex flex-grow flex-col items-center justify-center h-full relative w-full ${
                  activeIndex === 0 ? 'hidden lg:flex' : 'flex'
                } ${activeIndex === 0 ? 'fade-in-down' : 'fade-in-up'}`}
              >
                {activeIndex === 0 && <MenuListTop {...props} />}
                {activeIndex === 1 && <></>}
                {/* {activeIndex === 1 && (<nav className='font-bold text-center text-light-400 dark:text-gray-400'><a href='/'>{BLOG.TITLE}</a></nav>)} */}
              </div>

                {/* 右侧固定 */}
                <div className='flex flex-shrink-0 justify-center items-center space-x-1'>
                    <RandomPostButton {...props} />
                    <SearchButton />
                    {!BLOG.THEME_SWITCH && <DarkModeButton {...props} />}
                    <ReadingProgress />
                    {/* 移动端菜单按钮 */}
                    <div onClick={toggleMenuOpen} className='flex lg:hidden  justify-center rounded-full items-center w-10 h-10  cursor-pointer dark:hover:bg-gray-100 dark:hover:bg-opacity-10 hover:bg-black hover:bg-opacity-10'>
                        <i className='fas fa-bars' />
                    </div>
                </div>

                {/* 右边侧拉抽屉 */}
                <SlideOver cRef={slideOverRef} {...props} />
            </div>
        </nav>
    </>)
}

export default NavBar
