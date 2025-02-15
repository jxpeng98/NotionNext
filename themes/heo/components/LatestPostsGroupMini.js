import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
// import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

/**
 * 最新文章列表
 * @param posts 所有文章数据
 * @param sliceCount 截取展示的数量 默认6
 * @constructor
 */
export default function LatestPostsGroupMini({ latestPosts, siteInfo }) {
  // 获取当前路径
  const currentPath = useRouter().asPath
  const { locale } = useGlobal()

  if (!latestPosts) {
    return <></>
  }

  // Sort the latestPosts array by date
  latestPosts.sort((a, b) => {
    const dateA = a.date?.start_date || a.createdTime
    const dateB = b.date?.start_date || b.createdTime
    return new Date(dateB) - new Date(dateA) // this will sort in descending order
  })

  return (
    <>
      <div className=" mb-2 px-1 flex flex-nowrap justify-between">
        <div>
          <i className="mr-2 fas fas fa-history" />
          {locale.COMMON.LATEST_POSTS}
        </div>
      </div>
      {latestPosts.map(post => {
        const selected =
          currentPath === `${siteConfig('SUB_PATH', '')}/${post.slug}`
        // const headerImage = post?.pageCoverThumbnail ? post.pageCoverThumbnail : siteInfo?.pageCover

        return (
          <Link
            key={post.id}
            title={post.title}
            href={`${siteConfig('SUB_PATH', '')}/${post.slug}`}
            passHref
            className={'my-3 flex'}
          >
            {/*
              <div className="w-20 h-14 overflow-hidden relative">
                <LazyImage src={`${headerImage}`} className='object-cover w-full h-full rounded-lg'/>
              </div>
              */}
            <div
              className={
                (selected
                  ? ' text-indigo-400 dark:text-yellow-400 '
                  : 'text-hexo-black-gray dark:text-hexo-light-gray ') +
                ' text-sm overflow-x-hidden hover:text-indigo-600 dark:hover:text-yellow-600 px-2 duration-200 w-full rounded ' +
                ' hover:text-indigo-400 dark:hover:text-yellow-400 cursor-pointer items-center flex'
              }
            >
              <div>
                <div className="line-clamp-2 menu-link">{post.title}</div>
                <div className="text-gray-500">{post.publishDay}</div>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}
