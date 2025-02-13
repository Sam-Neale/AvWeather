import GreySam from "./../assets/image.png";

function Footer() {
  return (
    <footer className="footer absolute bottom-0 sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <p>
          <span className="font-bold me-1">
            AvWeather © {new Date().getFullYear()} Sam Neale
          </span>
          All right reserved
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://samneale.dev">
          <img src={GreySam} alt="Sam Neale" className="w-8 fill-current h-8" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
