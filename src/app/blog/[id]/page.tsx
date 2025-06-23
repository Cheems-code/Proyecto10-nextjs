import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Genera los metadatos dinámicamente para cada post
export async function generateMetadata({ params }): Promise<Metadata> {
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

export default function BlogPostPage() {
  const params = useParams();
  const id = params.id;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!res.ok) throw new Error('Post no encontrado');
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error(error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPost();
  }, [id]);

  if (loading) {
    return (
      <section className="py-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white-600">Cargando post...</p>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-4">Post no encontrado</h2>
          <p className="text-white-600">No existe un post con este ID.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>{post ? `${post.title} | Blog` : 'Blog | Mi Sitio'}</title>
        <meta name="description" content={post ? post.body.slice(0, 150) : 'Lee nuestros artículos del blog.'} />
        <meta property="og:title" content={post ? post.title : 'Blog | Mi Sitio'} />
        <meta property="og:description" content={post ? post.body.slice(0, 150) : 'Lee nuestros artículos del blog.'} />
        <meta property="og:type" content="article" />
      </Head>
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{post.body}</p>
            <p className="text-sm text-gray-500 mt-4">ID del post: {id}</p>
          </div>
        </div>
      </section>
    </>
  );
}