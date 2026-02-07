import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import {
  SiInstagram,
  SiGithub,
  SiFacebook,
} from "@icons-pack/react-simple-icons";
import SimpleMap from "./SimpleMap";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className="bg-secondary/30 dark:bg-secondary/10 pt-16 pb-8">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{t("title")}</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">{t("address")}</p>
                  <p className="text-muted-foreground">Catania, {t("local")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:angelo961996@gmail.com"
                    className="text-primary hover:underline"
                    aria-label="Email Angelo Pappalardo"
                  >
                    angelo961996@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">{t("phone")}</p>
                  <a
                    href="tel:+393453901754"
                    className="text-primary hover:underline"
                    aria-label="Call Angelo Pappalardo"
                  >
                    +39 345 390 1754
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/AngeloPappalardo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-primary hover:text-white text-foreground p-2 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <SiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/angelo-pappalardo-4405b7260/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-primary hover:text-white text-foreground p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://it-it.facebook.com/angelo.pappalardo.10"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-primary hover:text-white text-foreground p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/angelo_pappalardo96/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-primary hover:text-white text-foreground p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="h-64 md:h-full">
            <SimpleMap address="Catania, Italia" lat={37.606694} lng={15.137428} zoom={15} />
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {t("footer")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
