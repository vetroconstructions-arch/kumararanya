import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { getAllPosts } from '../../lib/mdx';

export const metadata = {
  title: 'Real Estate Insights & News | Aranya NA Bungalow Plots',
  description: 'Read the latest updates, MahaRERA guidelines, and investment insights for PMRDA NA plots in West Pune and Hinjewadi.',
};

export default async function BlogArchive() {
  const posts = getAllPosts();

  return (
    <main style={{ minHeight: '100vh', background: '#f4f4f4', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      
      <div style={{ padding: '150px 20px 80px', textAlign: 'center', background: '#0a192f', color: 'white' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px', color: 'var(--secondary)' }}>Investment Insights</h1>
        <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
          Expert analysis, market trends, and MahaRERA updates for Pune real estate investors.
        </p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '60px auto', padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {posts.map((post) => (
          <div key={post.slug} style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderLeft: '4px solid var(--secondary)' }}>
            <div style={{ color: '#888', fontSize: '14px', marginBottom: '10px' }}>{post.date} • {post.author}</div>
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <h2 style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '15px' }}>
                {post.title}
              </h2>
            </Link>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} style={{ color: 'var(--secondary)', fontWeight: 'bold', textDecoration: 'none', fontSize: '16px' }}>Read Full Article →</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
