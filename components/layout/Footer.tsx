import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="w-full py-6 bg-white/80 dark:bg-[#052e3e]/70 mt-auto">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {/* Name */}
          <h3 className="text-xl font-bold text-primary-text">
            Al Francis Daga-ang
          </h3>

          {/* Tagline */}
          <p className="text-sm text-muted">
            Design with passion, all right reserve for Al Francis Daga-ang
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 pt-2">
            <a
              href="mailto:dagaang.alfrancis@gmail.com"
              className="text-primary-text hover:text-brand transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/AlFrancis-Dagaang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-text hover:text-brand transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/al-francis-daga-ang-734043348/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-text hover:text-brand transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
