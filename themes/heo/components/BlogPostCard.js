import Link from 'next/link'
import CONFIG from '../config'
import TagItemMini from './TagItemMini'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'

const BlogPostCard = ({ index, post, showSummary, siteInfo }) => {
  const showPreview = siteConfig('HEO_POST_LIST_PREVIEW', null, CONFIG) && post.blockMap
  if (post && !post.pageCoverThumbnail && siteConfig('HEO_POST_LIST_COVER_DEFAULT', null, CONFIG)) {
    post.pageCoverThumbnail = siteInfo?.pageCover
  }
  const showPageCover = siteConfig('HEO_POST_LIST_COVER', null, CONFIG) && post?.pageCoverThumbnail && !showPreview
  return (
        <div className={` ${siteConfig('HEO_POST_LIST_COVER_HOVER_ENLARGE', null, CONFIG) ? ' hover:scale-110 transition-all duration-150' : ''}`} >

            <div
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
                className={`border bg-white dark:bg-[#1e1e1e] flex mb-4 flex-col md:flex-row group w-full dark:border-gray-600 hover:border-indigo-600 dark:hover:border-yellow-600 duration-300 transition-colors justify-between overflow-hidden rounded-xl ${showPageCover ? '2xl:h-96' : ''}`}>

                {/* 图片封面 */}
                {showPageCover && (
                    <Link href={`${siteConfig('SUB_PATH', '')}/${post.slug}`} passHref legacyBehavior>
                        <div className="w-full md:w-5/12 2xl:w-full overflow-hidden">
                            <LazyImage priority={index === 0} src={post?.pageCoverThumbnail} alt={post?.title} className='h-60 w-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300' />
                        </div>
                    </Link>
                )}

                {/* 文字区块 */}
                <div className={'flex p-6 2xl:p-4 flex-col justify-between h-48 md:h-full 2xl:h-48 w-full md:w-7/12 2xl:w-full'}>
                    <div>
                        {/* 分类 */}
                        {post?.category && <div className={`flex mb-1 items-center ${showPreview ? 'justify-center' : 'justify-start'} hidden md:block flex-wrap dark:text-white text-hexo-black-gray `}>
                            <Link passHref href={`/category/${post.category}`}
                                className="cursor-pointer text-xs font-normal menu-link hover:text-indigo-700 dark:hover:text-yellow-700  dark:text-white transform">
                                {post.category}
                            </Link>
                        </div>}

                        {/* 标题 */}
                        <Link
                            href={`${siteConfig('SUB_PATH', '')}/${post.slug}`}
                            passHref
                            className={' group-hover:text-indigo-700 dark:hover:text-yellow-700 dark:group-hover:text-yellow-600 text-black dark:text-gray-100  line-clamp-2 replace cursor-pointer text-xl font-bold leading-tight'}>
                            <span className='menu-link '>{post.title}</span>
                        </Link>
                    </div>

                    {/* 摘要 */}
                    {(!showPreview || showSummary) && (
                        <p className="line-clamp-2 replace my-3 2xl:my-1 text-gray-700  dark:text-gray-300 text-sm font-light leading-tight">
                            {post.summary}
                        </p>
                    )}

                    <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
                        <div>
                            {' '}
                            {post.tagItems?.map(tag => (
                                <TagItemMini key={tag.name} tag={tag} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>

  )
}

export default BlogPostCard
