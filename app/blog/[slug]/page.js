import Navbar from '../../../components/Navbar';
import { getAllPosts, getPostBySlug } from '../../../lib/mdx';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if(!post) return { title: 'Post Not Found' };
  
  return {
    title: `${post.title} | Aranya Real Estate Insights`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.kumararanya.in/blog/${slug}`
    }
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return <main style={{ padding: '120px 20px', textAlign: 'center' }}><h1>Post Not Found</h1></main>;
  }

  return (
    <main style={{ minHeight: '100vh', background: '#f4f4f4', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      
      <div style={{ padding: '150px 20px 80px', textAlign: 'center', background: '#0a192f', color: 'white' }}>
        <h1 style={{ fontSize: '42px', marginBottom: '20px', color: 'var(--secondary)', maxWidth: '900px', margin: '0 auto 20px' }}>{post.title}</h1>
        <p style={{ fontSize: '16px', opacity: 0.8 }}>Published on {post.date} by {post.author}</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ background: 'white', padding: '50px', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', lineHeight: '1.8', fontSize: '18px', color: '#333' }}>
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 style={{ color: 'var(--primary)', fontSize: '32px', marginTop: '40px', marginBottom: '20px' }} {...props} />,
              h2: ({node, ...props}) => <h2 style={{ color: 'var(--primary)', fontSize: '26px', marginTop: '30px', marginBottom: '15px' }} {...props} />,
              p: ({node, ...props}) => <p style={{ marginBottom: '20px' }} {...props} />,
              ul: ({node, ...props}) => <ul style={{ marginBottom: '20px', paddingLeft: '20px' }} {...props} />,
              li: ({node, ...props}) => <li style={{ marginBottom: '10px' }} {...props} />,
              strong: ({node, ...props}) => <strong style={{ color: 'var(--secondary)' }} {...props} />
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/blog" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Insights</Link>
        </div>
      </div>
    </main>
  );
}
