import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import dotenv from 'dotenv';
function Dashboard() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;

        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=iocl&sortBy=publishedAt&language=en&apiKey=${apiKey}`
        );

        const articles = response.data.articles;
        if (Array.isArray(articles) && articles.length > 0) {
          const formatted = articles.map(article => ({
            title: article.title,
            url: article.url,
            image: article.urlToImage,
            description: article.description,
            date: article.publishedAt,
            source: article.source.name,
          }));
          setNews(formatted);
        } else {
          setError('No articles found.');
        }
      } catch (err) {
        setError('Failed to load news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="dashboard-page" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <header className="dashboard-header">
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          <img src="/logo.jpg" alt="IOCL Logo" className="logo" />
          <h1>Indian Oil - Barauni</h1>
        </div>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>

      <main className="dashboard-content">
        {loading ? (
          <p className="status-text">Loading latest news...</p>
        ) : error ? (
          <p className="status-text" style={{color: 'red'}}>{error}</p>
        ) : news.length === 0 ? (
          <p className="status-text">No news available at the moment.</p>
        ) : (
          <div className="news-grid">
            {news.map((item, i) => (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className="news-card"
              >
                {item.image ? (
                  <img src={item.image} alt="" className="news-image" />
                ) : (
                  <div className="news-image" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#888'}}>
                    No Image
                  </div>
                )}
                <div className="news-content">
                  <h2 className="news-title">{item.title}</h2>
                  <p className="news-meta">
                    {new Date(item.date).toLocaleString()} — <em>{item.source}</em>
                  </p>
                  <p className="news-desc">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>

      <footer className="social-footer">
        <a href="https://www.facebook.com/indianoilcorporation" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
        <a href="https://twitter.com/IndianOilcl" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
        <a href="https://www.linkedin.com/company/indian-oil-corporation-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/indianoilcorporation/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
      </footer>
    </div>
  );
}

export default Dashboard;
