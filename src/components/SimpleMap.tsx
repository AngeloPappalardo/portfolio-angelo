
import { useEffect, useRef } from 'react';

interface SimpleMapProps {
  address: string;
  zoom?: number;
}

const SimpleMap = ({ address, zoom = 15 }: SimpleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (mapRef.current && !iframeRef.current) {
      // Encode the address for use in the URL
      const encodedAddress = encodeURIComponent(address);
      
      // Create the iframe
      const iframe = document.createElement('iframe');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = '0';
      iframe.frameBorder = '0';
      iframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=15.1274,37.5966,15.1474,37.6166&layer=mapnik&marker=37.60669382574149,15.137428172998247
`;
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.title = "Map";
      
      // Store the iframe reference
      iframeRef.current = iframe;
      
      // Add the iframe to the map container
      mapRef.current.appendChild(iframe);
    }
    
    return () => {
      if (mapRef.current && iframeRef.current) {
        mapRef.current.removeChild(iframeRef.current);
        iframeRef.current = null;
      }
    };
  }, [address, zoom]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full rounded-lg overflow-hidden shadow-md border border-border bg-card"
      aria-label="Interactive map showing the location"
    />
  );
};

export default SimpleMap;
