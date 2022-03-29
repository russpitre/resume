import { usePDF } from '@react-pdf/renderer';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function MobileDownload({ document }) {
  const [instance] = usePDF({ document: document });
  const linkRef = useRef(null);

  useEffect(() => {
    if (linkRef.current) {
      let timer = setTimeout(() => linkRef.current.click(), 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [instance.url]);

  if (instance.loading) {
    return <div>loading...</div>;
  }

  if (instance.error) {
    return <div>{instance.error}</div>;
  }

  return (
    <>
      <a
        ref={linkRef}
        href={instance.url}
        download="Russell Pitre - Resume.pdf"
        style={{ display: 'none' }}
      >
        hidden download
      </a>
      Thanks for downloading...
    </>
  );
}

MobileDownload.propTypes = {
  document: PropTypes.node,
};

export default MobileDownload;
