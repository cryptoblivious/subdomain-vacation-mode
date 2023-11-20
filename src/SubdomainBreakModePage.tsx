import { useEffect, useState } from 'react';

const SubdomainRestModePage = () => {
  const [subdomain, setSubdomain] = useState('');

  useEffect(() => {
    const hostname = window.location.hostname;
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
    default:
      projectName = '[Insert Project Name Here]';
  }

  return (
    <div>
      <h1>{projectName}</h1>
      <h2>Is currently taking a well deserved break.</h2>
      <img
        src='/assets/cat_on_pc.webp'
        alt='cat_on_pc'
        className='resized-image'
      />
      <p className='read-the-docs'>(Which is a fancy way of saying it's currently stopped to save money!)</p>
      <h2>Please check back at another time.</h2>
      <p>
        You can get back to the main page <a href='https://www.andrzejw.com'>here</a>.
      </p>
    </div>
  );
};

export default SubdomainRestModePage;
