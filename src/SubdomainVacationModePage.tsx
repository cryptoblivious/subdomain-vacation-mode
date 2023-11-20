import { useEffect, useState } from 'react';

const SubdomainRestModePage = () => {
  const [subdomain, setSubdomain] = useState('');

  useEffect(() => {
    const hostname = window.location.hostname;
    console.log('hostname: ', hostname);
    const parts = hostname.split('.');
    const extractedSubdomain = parts.length > 2 ? parts[0] : 'default'; // Handle default case

    setSubdomain(extractedSubdomain);
  }, []);

  let projectName = '';

  switch (subdomain) {
    case 'tls':
      projectName = 'The Last Stand';
      break;
    case 'magix':
      projectName = 'Magix : The Last Cardbender';
      break;
    case 'svm':
      projectName = 'Subdomain Vacation Mode';
      break;
    case 'localhost':
      projectName = 'Localhost';
      break;
    default:
      projectName = '[Insert Project Name Here]';
  }

  return (
    <div>
      <h1>{projectName}</h1>
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
          <h2>Is this page!</h2>
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
