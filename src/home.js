import React from 'react';

const NavItem = ({ text }) => <div className="justify-center whitespace-nowrap">{text}</div>;

const CertificateButton = ({ text }) => (
  <div className="flex flex-col justify-center">
    <div className="justify-center px-6 py-3 bg-gray-900 max-md:px-5">{text}</div>
  </div>
);

const SectionTitle = ({ text }) => <div className="text-lg font-medium leading-7 text-white">{text}</div>;

const Feature = ({ src, text }) => (
  <div className="flex gap-3 self-start mt-4 max-md:flex-wrap">
    <img loading="lazy" src={src} alt="" className="shrink-0 w-8 aspect-square" />
    <div className="flex-auto my-auto">{text}</div>
  </div>
);

const Block = ({ title, description, btnText }) => (
  <div className="flex flex-col grow justify-center w-full font-semibold text-white bg-black max-md:max-w-full">
    <div className="flex overflow-hidden relative flex-col justify-center items-start px-16 py-16 w-full min-h-[501px] max-md:px-5 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/348d4bd11a695972fafbb4efe1e5e6dd3a1d329b91b2b7e6428ebfdf9bb89380?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative flex-col mt-36 ml-10 max-w-full w-[593px] max-md:mt-10">
        <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">{title}</div>
        <div className="mt-10 text-2xl max-md:max-w-full">{description}</div>
        <div className="justify-center self-start px-6 py-3 mt-10 text-base bg-orange-400 max-md:px-5 max-md:mt-10">{btnText}</div>
      </div>
    </div>
  </div>
);

const MyComponent = () => {
  return (
    <div className="flex gap-5 justify-between max-md:flex-wrap">
      <div className="flex flex-col pb-10 bg-black max-md:max-w-full">
        <header className="flex overflow-x-auto flex-col justify-center text-base text-white max-md:pr-5 max-md:max-w-full">
          <div className="flex overflow-hidden relative flex-col px-16 pt-10 pb-20 w-full min-h-[720px] max-md:px-5 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c94ea4576803f46f7337bd16133ba17c9d45ec52a0d95b07fdaa0660eef2304c?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="object-cover absolute inset-0 size-full" />
            <nav className="flex relative gap-5 justify-between mx-5 mb-96 max-md:flex-wrap max-md:mr-2.5 max-md:mb-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between font-bold leading-10 max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eda344e082e8f7b9aa7b556c615210488c3b079d24121a6ae3dd3c5827046e32?apiKey=947e37291f354206bf60a72b34e15e90&"
                  alt=""
                  className="shrink-0 my-auto max-w-full aspect-[7.14] w-[214px]"
                />
                <div className="flex gap-5 justify-between max-md:flex-wrap">
                <nav className="flex gap-5 justify-between max-md:flex-wrap">
            <a className="justify-center whitespace-nowrap" href="#">Home</a>
            <a className="justify-center whitespace-nowrap text-orange-400 " href="/page3">About</a>
            <a className="justify-center whitespace-nowrap text-orange-400" href="/page2">Certification</a>
            <a className="justify-center text-orange-400" href="/page1">Authorized Partners</a>
            <a className="justify-center whitespace-nowrap" href="#">Resources</a>
            <a className="justify-center" href="#">AI CERTs Labs</a>
            <a className="justify-center whitespace-nowrap" href="#">Store</a>
            <a className="justify-center whitespace-nowrap" href="#">Contact</a>
          </nav>
                </div>
              </div>
              <div className="justify-center px-6 py-3 my-auto font-semibold bg-orange-400 max-md:px-5">Get Certified</div>
            </nav>
          </div>
        </header>
        <section className="flex gap-2.5 px-5 mt-5 text-base font-semibold text-white max-md:flex-wrap">
          {["AI+ Executive™", "AI+ Developer™", "AI+ Ethics™", "AI+ Data™", "AI+ Prompt Engineer™", "AI+ Prompt Engineer™", "AI+ Sales™", "AI+ Marketing™", "Bitcoin+ Executive™", "Bitcoin+ Developer™"].map((cert) => (
            <CertificateButton key={cert} text={cert} />
          ))}
        </section>
        <section className="flex flex-col self-center px-5 mt-24 max-w-full w-[1176px] max-md:mt-10">
          <SectionTitle text="WHAT WE DO" />
          <div className="mt-14 text-5xl font-bold text-center text-orange-400 leading-[70px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[65px]">
            <span className="leading-[59px">At AI Certs™, our mission is to certify{" "}</span>
            <br />
            <span className="leading-[59px">and empower 1 billion individuals with premier{" "}</span>
            <br />
            <span className="leading-[59px">AI and Blockchain certifications.{" "}</span>
            <br />
            <br />
            <span className="text-xl font-semibold leading-6 text-orange-400">
              Join us in our mission to shape the AI and Blockchain industry!
            </span>
          </div>
        </section>
        <section className="justify-center mt-32 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center items-start w-full bg-gray-900 max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac347f5eaeba7e05ef29c937c4d0b2278290f9cb5e47a0b2279e36c60775aad3?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="object-cover max-md:max-w-full max-md:h-full aspect-[0.8] w-full shrink-0" />
              </div>
            </div>
            <div className="flex flex-col grow justify-center items-start gap-5 p-10 w-6/12 text-xl bg-gray-900 max-md:w-full max-md:p-5">
              <Feature src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cfb66ad194b22d240f4c68d38493c540127fa3a4a209604ca720cf3f8df013e?apiKey=947e37291f354206bf60a72b34e15e90&" text="Founded by Jeremy M. Barnett, a seasoned AI expert" />
              <Feature src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff408f8f373337fa76c0bb1b0b1b947e999e5aa5fca3bc21b5350cc26d5c40d2?apiKey=947e37291f354206bf60a72b34e15e90&" text="AI+ Certified™ certifications for various industries" />
              <Feature src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff408f8f373337fa76c0bb1b0b1b947e999e5aa5fca3bc21b5350cc26d5c40d2?apiKey=947e37291f354206bf60a72b34e15e90&" text="Globally recognized certifications" />
            </div>
          </div>
        </section>
        <section className="flex flex-col self-center mt-20 max-w-full w-[1176px] max-md:mt-10 max-md:max-w-full">
          <SectionTitle text="UNLOCK EXCLUSIVE BENEFITS" />
          <div className="grid grid-cols-3 gap-5 mt-10 max-md:grid-cols-1 max-md:max-w-full max-md:mt-10">
            {[
              { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c45869d4e118a183d6fc7d9b63cf3d3a8bb1e927e8f8f393a3a299e64aa1cd7a?apiKey=947e37291f354206bf60a72b34e15e90&", text: "Stay Ahead of the Curve with Our Cutting-Edge AI & Blockchain Certifications" },
              { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/91dfb30e402b264d997a04fd0ac40c43d40cd8e1bde248cbd8ff6552996f4b97?apiKey=947e37291f354206bf60a72b34e15e90&", text: "Trusted by Industry Leaders Worldwide" },
              { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/74d15db8cf0b4dce350f75861d826899396fe3b34011292a2b25c0eb4acbb420?apiKey=947e37291f354206bf60a72b34e15e90&", text: "Learn from Top AI Experts and Innovators" },
              { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/79e9de96e5c32d0ed4292e71a35e99498789d59f08d149c5b2ed2d7b8cfbc510?apiKey=947e37291f354206bf60a72b34e15e90&", text: "Unlock Career Opportunities in AI and Blockchain" },
              { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/512adf78d67c59b4bc9c34e3c301028d3f134d6ad097d93d7d64c8b64b86d23e?apiKey=947e37291f354206bf60a72b34e15e90&", text: "Gain Practical Skills with Hands-On Projects" },
              { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/940f29ad0531a1742f1ab76be2cfa5efb4da38c7d636ab9d0f6fc1a7e3e1c9a4?apiKey=947e37291f354206bf60a72b34e15e90&", text: "Network with a Global Community of AI Enthusiasts" },
            ].map(({ src, text }) => (
              <Feature key={text} src={src} text={text} />
            ))}
          </div>
        </section>
        <footer className="flex flex-col self-center mt-20 text-white max-w-full w-[1176px] max-md:mt-10 max-md:max-w-full">
          <SectionTitle text="EXPLORE MORE" />
          <div className="grid grid-cols-3 gap-5 mt-10 max-md:grid-cols-1 max-md:max-w-full max-md:mt-10">
            {[
              "AI+ Certified Executive™",
              "AI+ Certified Developer™",
              "AI+ Certified Data™",
              "AI+ Certified Prompt Engineer™",
              "AI+ Certified Sales™",
              "AI+ Certified Marketing™",
            ].map((cert) => (
              <div key={cert} className="flex flex-col gap-5 p-10 bg-gray-900">
                <div className="text-xl font-semibold">{cert}</div>
                <div className="flex-auto">
                  Enhance your career with our {cert} certification. Gain the skills needed to thrive in the evolving AI and Blockchain landscape.
                </div>
                <div className="justify-center px-6 py-3 mt-10 text-base bg-orange-400 max-md:px-5 max-md:mt-10">Get Certified</div>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MyComponent;
