import { ExternalLink, MapPinned } from "lucide-react";

interface SimpleMapProps {
  address: string;
  lat?: number;
  lng?: number;
  zoom?: number;
}

const SimpleMap = ({ address, lat = 37.606694, lng = 15.137428, zoom = 15 }: SimpleMapProps) => {
  const mapUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`;

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-md border border-border bg-card p-6">
      <div className="h-full flex flex-col items-center justify-center text-center gap-4">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <MapPinned className="h-7 w-7" />
        </div>

        <div className="space-y-1">
          <p className="font-semibold">Mappa posizione</p>
          <p className="text-sm text-muted-foreground">{address}</p>
        </div>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label={`Apri la mappa di ${address} in una nuova scheda`}
        >
          Apri mappa
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default SimpleMap;
