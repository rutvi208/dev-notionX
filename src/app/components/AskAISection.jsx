
import Image from "next/image";
import ChatGPT from '@/../public/images/HeroSection/ChatGPT.svg';
import Perplexity from '@/../public/images/HeroSection/Perplexity.svg';
import Claude from '@/../public/images/HeroSection/Claude-logo.svg';

const AskAISection = () => {
  const aiLinks = [
    {
      name: 'ChatGPT',
      logo: ChatGPT,
      url: 'https://chat.openai.com/?q=Tell+me+about+NotionX.ai+and+their+AI+SEO+and+GEO+services.+What+services+do+they+offer+and+how+can+they+help+improve+my+brand+visibility+in+AI+search%3F+Please+include+their+website+link.',
      },
    {
      name: 'Claude',
      logo: Claude,
      url: 'https://claude.ai/new?q=Tell+me+about+NotionX.ai+and+their+AI+SEO+and+GEO+services.+What+services+do+they+offer+and+how+can+they+help+improve+my+brand+visibility+in+AI+search%3F+Please+include+their+website+link.',
      },
    {
      name: 'Perplexity',
      logo: Perplexity,
      url: 'https://www.perplexity.ai/search/new?q=Tell+me+about+NotionX.ai+and+their+AI+SEO+and+GEO+services.+What+services+do+they+offer+and+how+can+they+help+improve+my+brand+visibility+in+AI+search%3F+Please+include+their+website+link.',
      //bgColor: 'bg-[#9B715C]',
      //textColor: 'text-white',
      //borderColor: 'border-[#9B715C]'
    }
  ];

  return (
    <section className="px-5 lg:px-8 2xl:px-0 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl lg:rounded-[1.25rem] border border-[var(--stroke)] bg-[var(--pastelbrown)] overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-2">
                <h2 className="heading-font font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem] text-[var(--foreground)]">
                  Still not sure if NotionX is right for you?
                </h2>
                <p className="content-font text-base sm:text-lg lg:text-xl mt-4 text-[#0f0a08c1]">
                  Let ChatGPT, Claude, or Perplexity do the thinking for you. Click a button and see what your favorite AI says about NotionX and GEO services.
                </p>
              </div>

              {/* Right Buttons */}
              <div className="lg:col-span-1">
                <div className="flex flex-col gap-4">
                  {aiLinks.map((ai) => {
                    //const Icon = ai.icon;
                    return (
                        <div key={ai.name} className="px-[1px] py-[1px] bg-[radial-gradient(circle_at_center,#FF4E18_40%,#FEE7DF)] rounded-full">
                            <div className="px-6 py-3.5 bg-white text-[var(--foreground)] rounded-full flex justify-center">
                                <a
                                    href={ai.url}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    className={`inline-flex items-center justify-center gap-3 rounded-full font-semibold text-base lg:text-lg`}
                                >
                                    {/* <Icon className="w-5 h-5" /> */}
                                    <Image src={ai.logo} alt="AI Logo" className="h-6 w-6 lg:h-8 lg:w-8" />
                                    <span className="content-font">Ask {ai.name}</span>
                                </a>
                            </div>
                        </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* layout 2 */}
      <div className="my-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl lg:rounded-[1.25rem] border border-[var(--stroke)] bg-[var(--pastelbrown)] overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 gap-8 lg:gap-12 items-center text-center">
              {/* Left Content */}
              <div className="lg:col-span-2">
                <h2 className="heading-font font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem] text-[var(--foreground)]">
                  Still not sure if NotionX is right for you?
                </h2>
                <p className="content-font text-base sm:text-lg lg:text-xl mt-4 text-[#0f0a08c1]">
                  Let ChatGPT, Claude, or Perplexity do the thinking for you. Click a button and see what your favorite AI says about NotionX and GEO services.
                </p>
              </div>

              {/* Right Buttons */}
              <div className="lg:col-span-1">
                <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                  {aiLinks.map((ai) => {
                    //const Icon = ai.icon;
                    return (
                        <div key={ai.name} className="px-[1px] py-[1px] bg-[radial-gradient(circle_at_center,#FF4E18_40%,#FEE7DF)] rounded-full">
                            <div className="px-6 lg:px-10 py-3.5 bg-white text-[var(--foreground)] rounded-full flex justify-center">
                                <a
                                    href={ai.url}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    className={`inline-flex items-center justify-center gap-3 rounded-full font-semibold text-base lg:text-lg`}
                                >
                                    {/* <Icon className="w-5 h-5" /> */}
                                    <Image src={ai.logo} alt="AI Logo" className="h-6 w-6 lg:h-8 lg:w-8" />
                                    <span className="content-font">Ask {ai.name}</span>
                                </a>
                            </div>
                        </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskAISection;