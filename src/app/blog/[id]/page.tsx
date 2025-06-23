import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  if (!res.ok) return { title: 'Blog | Mi Sitio', description: 'Lee nuestros artículos del blog.' };

  const post: Post = await res.json();
  return {
    title: `${post.title} | Blog`,
    description: post.body.slice(0, 150),
    openGraph: {
      title: `${post.title} | Blog`,
      description: post.body.slice(0, 150),
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  if (!res.ok) return notFound();

  const post: Post = await res.json();

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h3>
          <p className="text-gray-700 whitespace-pre-line">{post.body}</p>
          <p className="text-sm text-gray-500 mt-4">ID del post: {params.id}</p>
        </div>
      </div>
    </section>
  );
}