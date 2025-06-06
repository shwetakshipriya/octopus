import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer" className=" text-white">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center"
          >
            <LogoIcon  />
            
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/octopus-promotions"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/octopus-promotions"
              className="opacity-60 hover:opacity-100"
            >
              Facebook
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://dribbble.com/octopus-promotions"
              className="opacity-60 hover:opacity-100"
            >
              Tiktok
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://dribbble.com/octopus-promotions"
              className="opacity-60 hover:opacity-100"
            >
              YouTube
            </a>
          </div>
        </div>

        {/* <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#web"
              className="opacity-60 hover:opacity-100"
            >
              Web
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#mobile"
              className="opacity-60 hover:opacity-100"
            >
              Mobile
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#desktop"
              className="opacity-60 hover:opacity-100"
            >
              Desktop
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#features"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#pricing"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://youtube.com/octopus-promotions"
              className="opacity-60 hover:opacity-100"
            >
              YouTube
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://discord.com/invite/octopus-promotions"
              className="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://twitch.tv/octopus-promotions"
              className="opacity-60 hover:opacity-100"
            >
              Twitch
            </a>
          </div>
        </div> */}
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Octopus Promotions. Made by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/your-profile"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Your Name
          </a>
        </h3>
      </section>
    </footer>
  );
};
