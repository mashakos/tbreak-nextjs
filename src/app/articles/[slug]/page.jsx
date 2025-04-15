import { allArticles } from 'contentlayer/generated'
import Article from '@/components/articles/Article'
import NextArticle from '@/components/articles/NextArticle'
import Newsletter from '@/components/shared/Newsletter'

export const generateStaticParams = async () =>
  allArticles.map((article) => ({ slug: article.slug }))

export async function generateMetadata({ params }) {
  const article = allArticles.find((article) => article.slug === params.slug)
  return { title: article.title, description: article.description }
}

export default function ArticlePage({ params }) {
  const article = allArticles.find((article) => article.slug === params.slug)

  return (
    <>
      <Article article={article} />
      <NextArticle article={getNextArticleFor(article)} />
      <Newsletter />
    </>
  )
}

function getNextArticleFor(article) {
  const articlesInSameCategory = allArticles.filter(
    (a) => a.category.slug === article.category.slug && a.slug !== article.slug,
  )
  if (articlesInSameCategory.length === 0) {
    return allArticles.filter((a) => a.slug !== article.slug)[
      Math.floor(Math.random() * allArticles.length - 1)
    ]
  } else {
    return articlesInSameCategory[
      Math.floor(Math.random() * articlesInSameCategory.length)
    ]
  }
}

export const dynamicParams = false
