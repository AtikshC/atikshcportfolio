const Footer = () => {
  return (
    <footer className="py-8 border-t-[3px] border-ink bg-ink text-background">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-bold uppercase tracking-wide">
            © {new Date().getFullYear()} Atiksh Chawla
          </p>
          <p className="text-sm">
            Built with grit, opinions, and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
