import * as React from "react";

const Navbar = ({ items }) => {
  return (
    <nav className="flex gap-5 justify-between self-stretch w-full text-base text-white max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-5 justify-between font-bold leading-10 max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ee8b69ed47ad55ae53c6129577bf8ede8e99deec2e99e6fb628a0906e0eba36?apiKey=947e37291f354206bf60a72b34e15e90&"
          alt=""
          className="shrink-0 my-auto max-w-full aspect-[7.14] w-[214px]"
        />
        <div className="flex gap-5 justify-between max-md:flex-wrap">
          {items.map((item, index) => (
            <div key={index} className={`justify-center ${item.extraClasses}`}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="justify-center px-6 py-3 my-auto font-semibold bg-orange-400 max-md:px-5">
        Get Certified
      </div>
    </nav>
  );
};

const Card = ({ imgSrc, title, description }) => {
  return (
    <section className="flex flex-col grow px-8 py-12 w-full text-center bg-gray-900 max-md:px-5 max-md:mt-8">
      <img loading="lazy" src={imgSrc} alt="" className="self-center aspect-square w-[70px]" />
      <h3 className="mt-6 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-6 text-lg font-medium leading-7 text-zinc-400">{description}</p>
    </section>
  );
};

const CertificationItems = ({ items }) => {
  return (
    <section className="flex flex-col self-center py-1 mt-20 w-full max-w-[1650px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 items-start w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        {items.map((item, index) => (
          <div key={index} className={`flex flex-col ${item.className} max-md:ml-0 max-md:w-full`}>
            {item.sections.map((section, idx) => (
              <Card
                key={idx}
                imgSrc={section.imgSrc}
                title={section.title}
                description={section.description}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

function MyComponent3() {
  const navbarItems = [
    { name: 'Home', extraClasses: 'whitespace-nowrap' },
    { name: 'About', extraClasses: 'text-orange-400 whitespace-nowrap' },
    { name: 'Certification', extraClasses: 'whitespace-nowrap' },
    { name: 'Authorized Partners', extraClasses: '' },
    { name: 'Authorized Trainers', extraClasses: '' },
    { name: 'Resources', extraClasses: 'whitespace-nowrap' },
    { name: 'Contact', extraClasses: 'whitespace-nowrap' },
  ];

  const certificationSections = [
    {
      className: '',
      sections: [
        { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/348d4bd11a695972fafbb4efe1e5e6dd3a1d329b91b2b7e6428ebfdf9bb89380?apiKey=947e37291f354206bf60a72b34e15e90&', title: 'Professional Certifications', description: 'Learn how Certification can Transform Every Department of your Organization.' },
        { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/611839fd1a14dff1c7a9e83ad6d02efdad215c4772381ca660a4bde46a2ae469?apiKey=947e37291f354206bf60a72b34e15e90&', title: 'Technical Certifications', description: 'Learn how Certification can Transform your IT Department.' },
      ],
    },
  ];

  return (
    <div className="flex flex-col py-11 bg-black">
      <header className="flex gap-5 justify-between self-stretch w-full text-base text-white max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between font-bold leading-10 max-md:flex-wrap max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c09d247675496b0b3127a8bbf82ca65b329560f5667ed2ea291fa206a1e574ce?apiKey=947e37291f354206bf60a72b34e15e90&" alt="Logo" className="shrink-0 my-auto max-w-full aspect-[7.14] w-[214px]" />
          <nav className="flex gap-5 justify-between max-md:flex-wrap">
          <a className="justify-center whitespace-nowrap text-orange-400" href="/">Home</a>
            <a className="justify-center whitespace-nowrap text-orange-400 " href="/page3">About</a>
            <a className="justify-center whitespace-nowrap text-orange-400" href="/page2">Certification</a>
            <a className="justify-center text-orange-400" href="/page1">Authorized Partners</a>
            <a className="justify-center whitespace-nowrap" href="#">Resources</a>
            <a className="justify-center" href="#">AI CERTs Labs</a>
            <a className="justify-center whitespace-nowrap" href="#">Store</a>
            <a className="justify-center whitespace-nowrap" href="#">Contact</a>
          </nav>
        </div>
        <button className="justify-center px-6 py-3 my-auto font-semibold bg-orange-400 max-md:px-5">Get Certified</button>
      </header>
      <main className="mt-32 max-w-full w-[1250px] max-md:mt-10">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed4e28da8360809739897b1cef265e885e9a194e59db8ccf757b05238dc89a81?apiKey=947e37291f354206bf60a72b34e15e90&" alt="Certification" className="grow w-full aspect-[1.06] max-md:mt-10 max-md:max-w-full" />
          </div>
          <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2 text-lg font-medium max-md:mt-10 max-md:max-w-full">
              <h1 className="text-white leading-[156%] max-md:max-w-full">TRADEMARKS</h1>
              <h2 className="mt-8 text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">AI CERTs™ is unwavering in our commitment to defending our intellectual property.</h2>
              <p className="mt-12 leading-7 text-zinc-400 max-md:mt-10 max-md:max-w-full">We are steadfast in safeguarding our trademarks and the unique certification names that define our brand. Below, you will find a comprehensive list of our trademarked certification names:</p>
            </div>
          </article>
        </section>
      </main>

      <CertificationItems items={certificationSections} />

      <section className="flex flex-col mt-24 max-w-full w-[1250px] max-md:mt-10">
        <h2 className="text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">The Importance of Trademarks</h2>
        <p className="mt-11 text-lg font-medium leading-7 text-zinc-400 max-md:mt-10 max-md:max-w-full">
          Trademarks serve as the bedrock of our identity:
        </p>
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <Card
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5011a32c4bb27829beb7491a9926836163a790f8833cc73a393b3fba4e894a0a?apiKey=947e37291f354206bf60a72b34e15e90&"
              title="Brand Distinction"
              description="Our trademarks set AI Certs™ apart from other educational entities. When individuals encounter our trademarks, they can be assured that they are accessing the pinnacle of educational excellence."
            />
            <Card
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/972136aa3f26447db67477b516ba1cee66b43594a1549196d97c60e74695fce8?apiKey=947e37291f354206bf60a72b34e15e90&"
              title="Guardians of Our Students"
              description="Trademarks act as the vigilant guardians of our students, shielding them from deceptive or subpar educational offerings. By trademarking our certification names, we ensure that our students remain unconfused by imitations that fail to meet our exacting standards."
            />
            <Card
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/cf6b962a45ae67fbf87b1f5b25d5c05f408dc6445084eaf723fb50ac86f1e6c4?apiKey=947e37291f354206bf60a72b34e15e90&"
              title="Legal Authority"
              description="Our trademarks grant us unwavering legal authority to take swift and decisive action against any entity that dares to infringe upon our brand or certification names. This encompasses a full spectrum of legal remedies against those who seek to emulate our business name, categories, or certification titles for their personal gain."
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col mt-20 w-full text-xl font-semibold text-white max-w-[1618px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Certifications™</div>
          <div className="justify-center px-8 py-5 whitespace-nowrap bg-gray-900 max-md:px-5">AI+™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Accounting™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Architect™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Artist™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Audio™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Audio Specialist™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Auditor™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Bias Auditor™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Big Data™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Blockchain Engineer™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Business Analyst™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Business Development™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Business Intelligence™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ CEO™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Certified Trainer™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ CFO™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ CHRO™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ CIO™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ CLO™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Cloud™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Cloud Engineer™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Cloud Security Architect™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ CMO™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Compliance™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Computer Vision™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Consultant™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Consumer Goods™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ COO™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ CRO™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ CTO™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Customer Service™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Customer Support Agent™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ CXO™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Cybersecurity™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Data Analyst™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Data Engineer™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Data Mining™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Data Scientist™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Deep Learning™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Defense & Intelligence™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Designer™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Developer™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Education™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Educator™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Emotional Intelligence™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Energy™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Engineer™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Enterprise Educator™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Ethical Hacker™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Ethicist™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Ethics Officer™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Executive™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Finance™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Game™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Game Developer™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Government™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Healthcare™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ HR™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Investment Analyst™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ L&D™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Lawyer™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Leader™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Learning & Development™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Legal Expert™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Machine Learning™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Manufacturing™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Marketing™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Media & Entertainment™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Music™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Musician™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ NLP™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Operations Engineer™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Photo™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Photographer™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Policy Advisor™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Policy Maker™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Privacy™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Product Manager™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Professional™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Project™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Project Manager™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Prompt Engineer™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ QA Manager™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Quantum™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Research Scientist™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Researcher™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Retail™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Robotics Engineer™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Sales™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Sales Director™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Security™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Security Specialist™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Software Engineer™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Solution Architect™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ System Architect™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Technical™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Telecommunications™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Text™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Text Specialist™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Trainer™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Transportation™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ UX Designer™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Video™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Video Editor™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Wrangler™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+ Writer™</div>
          <div className="justify-center px-8 py-5 whitespace-nowrap bg-gray-900 max-md:px-5">AICerts™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">Artificial Intelligence +™</div>
          <div className="justify-center px-8 py-5 whitespace-nowrap bg-gray-900 max-md:px-5">Bitcoin+™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">Bitcoin+ Certified Trainer™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">Bitcoin+ Developer™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">Bitcoin+ Executive™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">Bitcoin+ Security™</div>
          <div className="justify-center px-8 py-5 whitespace-nowrap bg-gray-900 max-md:px-5">BitcoinCerts™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">Blockchain Certs™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 whitespace-nowrap bg-gray-900 max-md:px-5">Blockchain+™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">Blockchain+ Professional™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">Blockchain+ Technical™</div>
          <div className="justify-center px-8 py-5 whitespace-nowrap bg-gray-900 max-md:px-5">Crypto+™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 whitespace-nowrap bg-gray-900 max-md:px-5">DeFi+™</div>
          <div className="justify-center px-8 py-5 whitespace-nowrap bg-gray-900 max-md:px-5">IOT+™</div>
          <div className="justify-center px-8 py-5 whitespace-nowrap bg-gray-900 max-md:px-5">Metaverse+™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">Proctoring 365™</div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">Russell AI™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">Web3 Certs™</div>
          <div className="justify-center px-8 py-5 whitespace-nowrap bg-gray-900 max-md:px-5">AI+User™</div>
          <div className="justify-center px-8 py-5 whitespace-nowrap bg-gray-900 max-md:px-5">AI+Everyone™</div>
        </div>
        <div className="flex gap-5 mt-8 whitespace-nowrap max-md:flex-wrap max-md:pr-5">
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+Foundation™</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">AI+Essentials</div>
          <div className="justify-center px-8 py-5 bg-gray-900 max-md:px-5">Basics™</div>
        </div>
      </section>

      <section className="mt-20 text-lg font-medium leading-7 text-zinc-400 w-[1250px] max-md:mt-10 max-md:max-w-full">
        This list exemplifies our unyielding commitment to delivering top-tier education and certification in the realms of Artificial Intelligence (AI), Blockchain, and Bitcoin. Our investments in brand development and protection are substantial, ensuring that our students not only receive unparalleled education but also recognition for their accomplishments.
      </section>

      <h2 className="self-start mt-20 ml-64 text-5xl font-bold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">Unauthorized Use</h2>

      <section className="mt-14 text-lg font-medium leading-7 text-zinc-400 w-[1250px] max-md:mt-10 max-md:max-w-full">
        AI CERTs™ maintains an unwavering resolve to enforce our trademark rights rigorously. Any unauthorized use of our trademarks or certification names will result in swift and unrelenting legal consequences. We will deploy every available means to protect our brand and the integrity of our educational offerings.
      </section>

      <h2 className="self-start mt-14 ml-64 text-5xl font-bold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">Reporting Trademark Violations</h2>

      <section className="mt-11 text-lg font-medium leading-7 text-orange-400 w-[1250px] max-md:mt-10 max-md:max-w-full">
        Should you encounter any instance where our trademarks or certification names are being misappropriated without consent, we implore you to report it to us immediately. Your vigilance is invaluable in preserving the sanctity of our brand.
        <br /><br />
        To report trademark violations or for any trademark-related inquiries, please contact us at{" "}
        <a href="mailto:trademarks@aicerts.io" className="text-orange-400" target="_blank">
          trademarks@aicerts.io
        </a>.
      </section>

      <section className="mt-28 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center w-full font-semibold text-white bg-black max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col justify-center items-start px-16 py-16 w-full min-h-[501px] max-md:px-5 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/348d4bd11a695972fafbb4efe1e5e6dd3a1d329b91b2b7e6428ebfdf9bb89380?apiKey=947e37291f354206bf60a72b34e15e90&" alt="professional certification" className="object-cover absolute inset-0 size-full" />
                <div className="flex relative flex-col mt-36 ml-10 max-w-full w-[659px] max-md:mt-10">
                  <h2 className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">Professional Certifications</h2>
                  <p className="mt-10 text-2xl max-md:max-w-full">Learn how Certification can Transform Every Department of your Organization</p>
                  <button className="justify-center self-start px-6 py-3 mt-10 text-base bg-orange-400 max-md:px-5 max-md:mt-10">Explore More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center w-full font-semibold text-white bg-black max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col justify-center items-start px-16 py-16 w-full min-h-[501px] max-md:px-5 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/611839fd1a14dff1c7a9e83ad6d02efdad215c4772381ca660a4bde46a2ae469?apiKey=947e37291f354206bf60a72b34e15e90&" alt="technical certification" className="object-cover absolute inset-0 size-full" />
                <div className="flex relative flex-col mt-36 ml-10 max-w-full w-[593px] max-md:mt-10">
                  <h2 className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">Technical Certifications</h2>
                  <p className="mt-10 text-2xl max-md:max-w-full">Learn how Certification can Transform your IT Department</p>
                  <button className="justify-center self-start px-6 py-3 mt-10 text-base bg-orange-400 max-md:px-5 max-md:mt-10">Explore More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col self-center py-1 mt-20 w-full max-w-[1650px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 items-start w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <aside className="flex flex-col items-start mt-2.5 text-center max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/183d28eb2f8c6c99197e09641e18057995d1f7b9589dd8d19a614774d754bea9?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="max-w-full aspect-[5] w-[239px]" />
            <div className="flex flex-col justify-center self-stretch mt-24 max-md:mt-10 max-md:max-w-full">
              <h3 className="text-2xl font-semibold text-white max-md:max-w-full">Newsletter Signup</h3>
              <form className="flex gap-5 justify-between items-start pt-2.5 pb-4 mt-8 w-full text-sm leading-6 border-b border-gray-800 border-solid text-zinc-400 max-md:flex-wrap max-md:max-w-full">
                <label htmlFor="emailInput" className="sr-only">Enter your email</label>
                <div className="flex gap-4">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/743366746d4278cfb6eeb5bc4f23a9a7cac02833cd7ad81d562e07834f4ae2f7?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="shrink-0 w-4 aspect-square" />
                  <input
                    type="email"
                    id="emailInput"
                    className="flex-auto my-auto"
                    placeholder="Enter your email address"
                    aria-label="Enter your email"
                  />
                </div>
                <button type="submit">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d3aa245c58b1036d09650df1be412abfdbac9e498b69d90dafb67322ecde54?apiKey=947e37291f354206bf60a72b34e15e90&" alt="submit" className="shrink-0 w-5 aspect-square" />
                </button>
              </form>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4100daa7bb1f4e6bc3413f8f7ee26586b2f018ffa60eece55cf21213ad9de4ca?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="mt-10 max-w-full aspect-[12.5] w-[230px]" />
          </aside>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-white">About</h3>
            <p className="mt-12 text-lg font-medium leading-7 text-zinc-400 max-md:mt-10">
              Why AI Certs<br /> Accreditation<br /> Meet Our Team<br /> Trademarks<br /> Articles<br /> Press Release<br /> Testimonials<br /> Career<br /> Contact
            </p>
          </div>
          <section className="flex-auto max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center max-md:mt-10">
                  <h3 className="text-2xl font-semibold text-white">Certifications</h3>
                  <p className="mt-12 text-lg font-medium leading-7 text-zinc-400 max-md:mt-10">
                    AI+ Professional™<br /> AI+ Technical™<br /> Blockchain+ Professional™<br /> Blockchain+ Technical™<br /> View All
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center max-md:mt-10">
                  <h3 className="text-2xl font-semibold text-white">Authorized</h3>
                  <p className="mt-12 text-lg font-medium leading-7 text-zinc-400 max-md:mt-10">
                    Authorized Partners<br /> Authorized Trainers
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer className="justify-center px-5 pt-12 mt-24 text-lg font-medium leading-7 text-zinc-400 max-md:mt-10 max-md:max-w-full">
          Copyright © AI CERTs™, Inc. All Rights Reserved
        </footer>
      </section>
    </div>
  );
}

export default MyComponent3;