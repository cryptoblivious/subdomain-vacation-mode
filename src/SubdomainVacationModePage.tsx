import { useEffect, useState } from 'react';

const SubdomainRestModePage = () => {
  const [subdomain, setSubdomain] = useState('');

  useEffect(() => {
    const hostname = window.location.hostname;
    console.log('hostname: ', hostname);
    const parts = hostname.split('.');
    const extractedSubdomain = parts[0];

    setSubdomain(extractedSubdomain);

    document.title = getTitleFromSubdomain(extractedSubdomain);
  }, []);

  const getTitleFromSubdomain = (subdomain: string) => {
    switch (subdomain) {
      case 'tls':
        return 'The Last Stand';
      case 'magix':
        return 'Magix : The Last Cardbender';
      case 'svm':
        return 'Subdomain Vacation Mode';
      case 'localhost':
        return 'Localhost';
      default:
        return '[Insert Project Name Here]';
    }
  };

  return (
    <div>
      <h1>{document.title}</h1>
      {subdomain != 'svm' ? (
        <div>
          <h2>Is currently enjoying well deserved vacations.</h2>
          <p className='read-the-docs'>(Which is a fancy way of saying it's currently stopped to save money!)</p>
          <img
            src='/assets/cat_on_pc.webp'
            alt='cat_on_pc'
            className='resized-image'
          />
          <a href='https://www.vectorstock.com/royalty-free-vector/cat-with-laptop-cartoon-vector-47467189'>
            <p className='read-the-fine-print'> Vector image by VectorStock / catalyststuff</p>
          </a>
          <h2>Please check back at another time.</h2>
        </div>
      ) : (
        <div>
          <h2>Is this project!</h2>
          <p>It allows other projects to go into vacation mode with a slick fallback webpage, and thus save on cloud computing bills.</p>
          <p className='read-the-docs'>
            To learn more about it, please check out the project <a href='https://github.com/cryptoblivious/subdomain-vacation-mode'>here</a>.
          </p>
          <img
            src='/assets/cat_on_pc.webp'
            alt='cat_on_pc'
            className='resized-image'
          />
          <a href='https://www.vectorstock.com/royalty-free-vector/cat-with-laptop-cartoon-vector-47467189'>
            <p className='read-the-fine-print'> Vector image by VectorStock / catalyststuff</p>
          </a>
        </div>
      )}
      <p>
        You can get back to the main page <a href='https://www.andrzejw.com'>here</a>.
      </p>
    </div>
  );
};

export default SubdomainRestModePage;
