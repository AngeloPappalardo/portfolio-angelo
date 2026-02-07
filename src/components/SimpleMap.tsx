
interface SimpleMapProps {
  address: string;
  lat?: number;
  lng?: number;
  zoom?: number;
}

const SimpleMap = ({ address, lat = 37.606694, lng = 15.137428, zoom = 15 }: SimpleMapProps) => {
  const tileSize = 256;
  const scale = 1 << zoom;
  const degreesPerPixel = 360 / (tileSize * scale);
  const halfWidth = degreesPerPixel * 320;
  const halfHeight = degreesPerPixel * 180;
  const left = lng - halfWidth;
  const right = lng + halfWidth;
  const top = lat + halfHeight;
  const bottom = lat - halfHeight;
  const bbox = `${left},${bottom},${right},${top}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-md border border-border bg-card">
      <iframe
        src={src}
        title={`Map of ${address}`}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label={`Interactive map showing ${address}`}
      />
    </div>
  );
};

export default SimpleMap;
