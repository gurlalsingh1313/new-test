import * as React from "react";

function MyComponent2() {
  const modules = [
    { title: "Understanding Artificial Intelligence", number: 1 },
    { title: "AI Technologies and Business Implications", number: 2 },
    { title: "AI Strategy for Executives", number: 3 },
    { title: "Ethical, Legal, and Societal Considerations", number: 4 },
    { title: "Managing AI Projects", number: 5 },
    { title: "AI and the Future of Work", number: 6 },
    { title: "Department-Specific AI Applications", number: 7 },
    { title: "Interactive Workshop", number: 8 },
  ];

  const jobs = [
    { title: "Executive", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7796b73445c58b3d37fe5b69dabf7d9ff281f7fc0b56b2ab256cc2415f53053?apiKey=947e37291f354206bf60a72b34e15e90&" },
    { title: "Data Analysis", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7796b73445c58b3d37fe5b69dabf7d9ff281f7fc0b56b2ab256cc2415f53053?apiKey=947e37291f354206bf60a72b34e15e90&" },
    { title: "Marketing Manager", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7796b73445c58b3d37fe5b69dabf7d9ff281f7fc0b56b2ab256cc2415f53053?apiKey=947e37291f354206bf60a72b34e15e90&" },
  ];

  const ModuleItem = ({ number, title }) => (
    <>
      <div className="flex gap-3 mt-4 max-md:flex-wrap">
        <img loading="lazy" src={`http://b.io/ext_${number}-`} alt="" className="shrink-0 w-8 aspect-square" />
        <div className="flex-auto my-auto max-md:max-w-full"> Module {number}: {title} </div>
      </div>
      <div className="shrink-0 self-stretch mt-4 h-px bg-gray-800 border border-gray-800 border-solid max-md:max-w-full" />
    </>
  );

  return (
    <section className="flex flex-col pb-9 bg-black">
      <header className="flex overflow-hidden relative flex-col px-20 py-10 w-full min-h-[777px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/855ea63bc022cbfe80ef4d20e8c45d9e6793c938b1ec0d3b9d989db3c94269f7?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="object-cover absolute inset-0 size-full" />
        <nav className="flex relative gap-5 justify-center items-center w-full text-base text-white max-md:flex-wrap max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9835da6779798078de9e850a10a50b74f492cb270c23079323e8f2923509eeb6?apiKey=947e37291f354206bf60a72b34e15e90&" alt="Logo" className="shrink-0 self-stretch my-auto max-w-full aspect-[7.14] w-[214px]" />
          <div className="flex gap-5 justify-between self-stretch font-bold leading-10 max-md:flex-wrap">
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
          <button className="justify-center self-stretch px-6 py-3 my-auto font-semibold bg-orange-400 max-md:px-5"> Get Certified </button>
        </nav>
        <section className="relative self-center mt-28 max-w-full w-[1250px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <article className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
              <header className="flex relative flex-col grow text-lg font-semibold max-md:mt-10 max-md:max-w-full">
                <h1 className="text-7xl text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  <span className="text-orange-400">AI</span>+ <br /> Executive™
                </h1>
                <p className="mt-10 font-medium text-white leading-[156%] max-md:mt-10 max-md:max-w-full"> CERTIFICATION NUMBER: 1100ABCD </p>
                <p className="mt-14 font-medium leading-7 text-zinc-400 max-md:mt-10 max-md:max-w-full"> 
                  In this comprehensive program, designed for business leaders, candidates will gain the knowledge and insights needed to strategically leverage artificial intelligence within your organization. The candidates will explore real-world use cases, ethical considerations, and the latest AI trends which empowers them to make informed decisions and lead their organization into an era of AI-driven success.
                </p>
                <div className="flex gap-5 justify-between self-start mt-16 text-base max-md:mt-10">
                  <button className="justify-center px-6 py-3 text-white bg-orange-400 max-md:px-5"> Buy Now </button>
                  <button className="justify-center px-6 py-4 text-orange-400 border-2 border-orange-400 border-solid max-md:px-5"> Download Blueprint </button>
                </div>
              </header>
            </article>
            <aside className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <div className="relative flex flex-col pb-20 w-full bg-gray-900 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col justify-center bg-gray-900 max-md:max-w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1afdf9dc04abcb9792a91c3064850be227ebfd548155d04df45a731eafc742e?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="w-full aspect-[2.63] max-md:max-w-full" />
                </div>
              </div>
            </aside>
          </div>
        </section>
      </header>
      <hr className="mt-16 w-full bg-gray-800 border border-gray-800 border-solid min-h-[1px] max-md:mt-10 max-md:max-w-full" />
      <section className="flex gap-5 justify-between self-center mt-4 max-w-full text-base font-semibold text-white w-[1250px] max-md:flex-wrap">
        <nav className="flex gap-5 px-5 my-auto max-md:flex-wrap max-md:max-w-full">
          <a className="grow">Prerequesites</a>
          <a className="flex-auto">Exam Details</a>
          <a>Modules</a>
          <a>Skills</a>
          <a className="flex-auto">Opportunities</a>
        </nav>
        <button className="justify-center px-6 py-3 bg-orange-400 max-md:px-5"> Buy Now </button>
      </section>
      <hr className="mt-5 w-full bg-gray-800 border border-gray-800 border-solid min-h-[1px] max-md:max-w-full" />
      <section className="flex flex-col self-center px-5 mt-24 max-w-full w-[1250px] max-md:mt-10">
        <h2 className="text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl"> Prerequisites </h2>
        <article className="flex flex-col mt-8 text-lg font-medium leading-7 text-zinc-400 max-md:max-w-full">
          <p className="justify-center px-7 max-md:pl-5 max-md:max-w-full"> Proficiency in at least one programming language, preferably Python </p>
          <p className="justify-center px-7 mt-5 max-md:pl-5 max-md:max-w-full"> Solid understanding of fundamental math concepts like linear algebra, calculus, and probability theory </p>
          <p className="justify-center px-7 mt-5 max-md:pl-5 max-md:max-w-full"> Basic knowledge of machine learning concepts and algorithms </p>
          <p className="justify-center px-7 mt-5 max-md:pl-5 max-md:max-w-full"> Familiarity with data structures and algorithms </p>
          <p className="justify-center px-7 mt-5 max-md:pl-5 max-md:max-w-full"> Understanding of computer science fundamentals </p>
          <p className="justify-center px-7 mt-5 max-md:pl-5 max-md:max-w-full"> Experience with software development practices and tools </p>
          <p className="justify-center px-7 mt-5 max-md:pl-5 max-md:max-w-full"> Knowledge of linear algebra and calculus for understanding AI algorithms </p>
          <p className="justify-center px-7 mt-5 max-md:pl-5 max-md:max-w-full"> Understanding of probability and statistics for data analysis </p>
          <p className="justify-center px-7 mt-5 max-md:pl-5 max-md:max-w-full"> Basic familiarity with AI concepts like neural networks, deep learning, NLP, and computer vision </p>
          <p className="justify-center px-7 mt-5 max-md:pl-5 max-md:max-w-full"> Strong analytical, critical thinking, and problem-solving skills </p>
        </article>
      </section>
      <section className="flex justify-center items-center px-16 py-20 mt-28 w-full bg-gray-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <article className="mt-5 mb-5 max-w-full w-[1250px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <header className="flex flex-col text-5xl font-bold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                <h3 className="max-md:max-w-full max-md:text-4xl"> Exam Details </h3>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8764b1bfa5b1f0c35d1c69263509cb9754c99231b54f4d6f4be6d158bb7300b1?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="mt-16 w-full aspect-[1.47] max-md:mt-10 max-md:max-w-full" />
              </header>
            </div>
            <aside className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-28 max-md:mt-10 max-md:max-w-full">
                <section className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="grow justify-center px-8 py-12 w-full text-2xl font-semibold text-center text-white bg-gray-800 max-md:px-5 max-md:mt-8">
                        <span className="text-white">Module</span>
                        <br />
                        <span className="text-4xl font-bold leading-10">8</span>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="grow justify-center px-8 py-12 w-full text-2xl font-semibold text-center text-white bg-gray-800 max-md:px-5 max-md:mt-8">
                        Examination
                        <br />
                        <span className="text-4xl font-bold leading-10">2</span>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-8 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="grow justify-center px-8 py-12 w-full text-2xl font-semibold text-center text-white bg-gray-800 max-md:px-5 max-md:mt-8">
                        50 MCQs
                        <br />
                        <span className="text-4xl font-bold leading-10">90 Minutes</span>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="grow justify-center px-8 py-12 w-full text-2xl font-semibold text-center text-white bg-gray-800 max-md:px-5 max-md:mt-8">
                        Passing Score
                        <br />
                        <span className="text-4xl font-bold leading-10">70%</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </aside>
          </div>
        </article>
      </section>
      <section className="flex flex-col items-start self-center px-5 mt-28 max-w-full text-xl font-semibold text-white w-[1257px] max-md:mt-10">
        <h2 className="self-stretch text-5xl font-bold max-md:max-w-full max-md:text-4xl"> Certification Modules </h2>
        {modules.map((module) => (
          <ModuleItem key={module.number} number={module.number} title={module.title} />
        ))}
      </section>
      <section className="flex justify-center items-center px-16 py-20 mt-24 w-full bg-gray-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <article className="mt-5 mb-5 max-w-full w-[1250px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <header className="flex flex-col max-md:mt-10 max-md:max-w-full">
                <h2 className="text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl"> What will you Learn ? </h2>
                <div className="mt-20 max-md:mt-10 max-md:max-w-full">
                  <section className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-5 justify-between max-md:mt-8">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a1fdab8aca7615f5c666f9b6747f178b6d2a566b59652007853a2317417ab1b?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="shrink-0 self-start w-10 aspect-square" />
                        <div className="flex flex-col justify-end py-px">
                          <h3 className="text-xl font-semibold text-white border border-black border-solid"> Data Analytics </h3>
                          <p className="mt-7 text-base leading-6 text-zinc-400">
                            Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Praesent et tortor eget tortodunt tristique.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-5 justify-between max-md:mt-8">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/235b9d0c1bf2fdc7d3df6acd8c19942c091f1dc3047b4420c170594e27bd35fe?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="shrink-0 self-start w-10 aspect-square" />
                        <div className="flex flex-col justify-end py-1">
                          <h3 className="text-xl font-semibold text-white"> Machine Learning </h3>
                          <p className="mt-7 text-base leading-6 text-zinc-400">
                            In cursus urna dui, ac imperdiet augue sodales nec. Donec fermentum sapien cidunt eget.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                  <section className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-5 justify-between max-md:mt-8">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfda4525b9d203a63c6017251c3ac7965578328663f26f844953401e48d21f54?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="shrink-0 self-start w-10 aspect-square" />
                        <div className="flex flex-col justify-end py-0.5 pr-1.5">
                          <h3 className="text-xl font-semibold text-white"> AI Technologies </h3>
                          <p className="mt-7 text-base leading-6 text-zinc-400">
                            Aliquam sed lorem cong ue, facilisis sem tempus, pre tium tortor. Nullam msit amet...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-5 justify-between max-md:mt-8">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/416f2cafe3b1f50636773f7a1386d4cdf45717e4db5726747e02fb93e3e7f7dd?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="shrink-0 self-start w-10 aspect-square" />
                        <div className="flex flex-col justify-end py-0.5">
                          <h3 className="text-xl font-semibold text-white"> Leadership </h3>
                          <p className="mt-7 text-base leading-6 text-zinc-400">
                            Donec posuere est etnulla suscipit varius. Integer id augue ultrices, congue dapibus...
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </header>
            </article>
            <aside className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/54aba7d4d0845044a150e823b1257c9f3c60313aeff0459981798e054685286d?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="grow mt-28 w-full aspect-[1.47] max-md:mt-10 max-md:max-w-full" />
            </aside>
          </div>
        </article>
      </section>
      <section className="flex flex-col self-center px-5 mt-24 max-w-full w-[1250px] max-md:mt-10">
        <h2 className="text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl"> Industry Opportunities after Course Completion </h2>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {jobs.map((job, index) => (
              <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-8 py-12 w-full text-center bg-gray-900 max-md:px-5 max-md:mt-8">
                  <img loading="lazy" src={job.imgSrc} alt={`${job.title} logo`} className="self-center w-10 aspect-square" />
                  <h3 className="mt-6 text-2xl font-semibold text-white">{job.title}</h3>
                  <p className="mt-6 text-lg font-medium leading-7 text-zinc-400"> Below the title the description of a particular Job will be provided. </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex gap-5 justify-center self-center pr-3 mt-14 max-md:mt-10">
        <div className="flex flex-1 gap-3">
          <a href="#" className="flex flex-col justify-center">
            <div className="flex flex-col justify-center p-3 rounded-full border border-white border-solid">
              <div className="shrink-0 w-2 h-2 bg-white rounded-full border border-white border-solid" />
            </div>
          </a>
          <a href="#" className="flex flex-col justify-center my-auto">
            <div className="shrink-0 w-2 h-2 bg-white rounded-full border border-white border-solid" />
          </a>
          <a href="#" className="flex flex-1 gap-5 justify-between my-auto">
            <div className="flex flex-col justify-center">
              <div className="shrink-0 w-2 h-2 bg-white rounded-full border border-white border-solid" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="shrink-0 w-2 h-2 bg-white rounded-full border border-white border-solid" />
            </div>
          </a>
        </div>
      </section>
      <footer className="flex flex-col self-center py-0.5 mt-24 w-full max-w-[1650px] max-md:mt-10 max-md:max-w-full">
        <hr className="shrink-0 bg-gray-800 border border-gray-800 border-solid h-[5px] max-md:max-w-full" />
        <section className="flex gap-5 items-start mt-24 w-full max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-start mt-2.5 text-center max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f3e793866642b2ed197f101cdb1088073984757b4475afff1f7ac1e3c0d3142?apiKey=947e37291f354206bf60a72b34e15e90&" alt="Company Logo" className="max-w-full aspect-[5] w-[239px]" />
            <form className="flex flex-col justify-center self-stretch mt-24 max-md:mt-10 max-md:max-w-full">
              <label for="emailInput" className="sr-only">Newsletter Signup</label>
              <input type="email" id="emailInput" className="flex gap-5 justify-between items-start pt-2.5 pb-4 mt-8 w-full text-sm leading-6 border-b border-gray-800 border-solid text-zinc-400 max-md:flex-wrap max-md:max-w-full" placeholder="Enter Your Email Address" aria-label="Enter Your Email Address"/>
              <button className="justify-center px-6 py-3 bg-orange-400 max-md:px-5">Get Started</button>
            </form>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8173724b8f14004e87212ec1032b3de3c084c8abb285c736b924a2bed13a1da?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="mt-10 max-w-full aspect-[12.5] w-[230px]" />
          </div>
          <article className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-white">About</h3>
            <nav className="mt-12 text-lg font-medium leading-7 text-zinc-400 max-md:mt-10">
              <a href="#">Why AI Certs</a><br />
              <a href="#">Accreditation</a><br />
              <a href="#">Meet Our Team</a><br />
              <a href="#">Trademarks</a><br />
              <a href="#">Articles</a><br />
              <a href="#">Press Release</a><br />
              <a href="#">Testimonials</a><br />
              <a href="#">Career</a><br />
              <a href="#">Contact</a>
            </nav>
          </article>
          <section className="flex-auto max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <article className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <header className="flex flex-col grow justify-center max-md:mt-10">
                  <h3 className="text-2xl font-semibold text-white">Certifications</h3>
                  <nav className="mt-12 text-lg font-medium leading-7 text-zinc-400 max-md:mt-10">
                    <a href="#">AI+ Professional™</a><br />
                    <a href="#">AI+ Technical™</a><br />
                    <a href="#">Blockchain+ Professional™</a><br />
                    <a href="#">Blockchain+ Technical™</a><br />
                    <a href="#">View All</a>
                  </nav>
                </header>
              </article>
              <aside className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <header className="flex flex-col justify-center max-md:mt-10">
                  <h3 className="text-2xl font-semibold text-white">Authorized</h3>
                  <nav className="mt-12 text-lg font-medium leading-7 text-zinc-400 max-md:mt-10">
                    <a href="#">Authorized Partners</a><br />
                    <a href="#">Authorized Trainers</a>
                  </nav>
                </header>
              </aside>
            </div>
          </section>
        </section>
      </footer>
      <footer className="justify-center px-5 pt-12 mt-24 text-lg font-medium leading-7 text-zinc-400 max-md:mt-10 max-md:max-w-full">
        Copyright © AI CERTs™, Inc. All Rights Reserved
      </footer>
    </section>
  );
}

export default MyComponent2;