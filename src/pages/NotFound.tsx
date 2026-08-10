import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <div className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-medical-copper mb-4">
            Page introuvable
          </p>
          <h1 className="text-8xl md:text-9xl font-heading font-semibold text-foreground leading-none">
            404
          </h1>
          <p className="text-xl text-muted-foreground mt-6 mb-2 font-heading font-semibold">
            Cette page n'existe pas
          </p>
          <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
            La page que vous recherchez a peut-être été déplacée ou n'existe plus.
            Revenez à l'accueil pour continuer votre visite.
          </p>
          <Link to="/">
            <Button className="cursor-pointer medical-gradient text-white rounded-full px-10 min-h-[48px]">
              Retour à l'accueil
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default NotFound;
