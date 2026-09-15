import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <SEO title="404 - Not Found" noindex={true} />
      <h1 className="text-9xl font-bold font-mono text-muted/50 mb-8">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">System Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The requested resource could not be located in this environment. It may have been moved or removed.
      </p>
      <Link 
        to="/"
        className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/90"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Return to Root
      </Link>
    </div>
  );
}
