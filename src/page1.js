import * as React from "react";

const RegionItem = ({ imgSrc, altText, name, description }) => (
  <div className="flex flex-col flex-1 justify-center">
    <div className="flex gap-5">
      <img loading="lazy" src={imgSrc} alt={altText} className="shrink-0 self-start aspect-[1.69] w-[34px]" />
      <div>
        {name}
        <br />
        <span className="text-sm leading-6 text-zinc-400">{description}</span>
      </div>
    </div>
  </div>
);

const PartnerItem = ({ imgSrc, altText, name, description }) => (
  <div className="flex flex-col grow justify-center px-8 py-12 w-full bg-gray-900 max-md:px-5 max-md:mt-8">
    <div className="flex justify-center items-center self-center px-10 bg-white h-[180px] rounded-[100px] w-[180px]">
      <img loading="lazy" src={imgSrc} alt={altText} className="w-full aspect-square" />
    </div>
    <div className="flex flex-col mt-8 text-center">
      <div className="text-2xl font-semibold text-white">{name}</div>
      <div className="mt-4 text-base leading-6 text-zinc-400">{description}</div>
    </div>
  </div>
);

const NewsletterSignup = () => (
  <form className="flex flex-col justify-center self-stretch mt-24 max-md:mt-10 max-md:max-w-full">
    <label htmlFor="emailInput" className="sr-only">Enter your email address</label>
    <div className="flex gap-5 justify-between items-start pt-2.5 pb-4 mt-8 w-full text-sm leading-6 border-b border-gray-800 border-solid text-zinc-400 max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-4">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/743366746d4278cfb6eeb5bc4f23a9a7cac02833cd7ad81d562e07834f4ae2f7?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="shrink-0 w-4 aspect-square" />
        <input type="email" id="emailInput" placeholder="Enter your email address" aria-label="Enter your email address" className="flex-auto my-auto bg-transparent border-none text-zinc-400 focus:outline-none focus:ring-0" />
      </div>
      <button type="submit" className="shrink-0 w-5 aspect-square">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d3aa245c58b1036d09650df1be412abfdbac9e498b69d90dafb67322ecde54?apiKey=947e37291f354206bf60a72b34e15e90&" alt="Submit" />
      </button>
    </div>
  </form>
);

function MyComponent1() {
  const regions = [
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f4718d84eafdd87679386802020c58f4527b0c8422f8755eebf8f023477556ee?apiKey=947e37291f354206bf60a72b34e15e90&", altText: "United States icon", name: "United States", description: "Cisco and Microsoft ATPs" },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca5fb2ba43aaed2855137d9f94ed1c75dd9b483e02f9d7226f26055d6dbee872?apiKey=947e37291f354206bf60a72b34e15e90&", altText: "Canada icon", name: "Canada", description: "Cisco and Microsoft ATPs" },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b70641e8c0f4c780159dfc696b1cb8ca833633181776b2ca214d325f67090a46?apiKey=947e37291f354206bf60a72b34e15e90&", altText: "Mexico icon", name: "Mexico", description: "Cisco and Microsoft ATPs" },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0114ed245f701691e0d64d2e3ddf03087814b4883057bab94c4b08d96d38400b?apiKey=947e37291f354206bf60a72b34e15e90&", altText: "Puerto Rico icon", name: "Puerto Rico", description: "Cisco and Microsoft ATPs" },
  ];

  const partners = [
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0db6b53f8b321fa0bd882967a897930ba26d710bad9b76c87d4e7afac9873a0e?apiKey=947e37291f354206bf60a72b34e15e90&", altText: "Netcom Learning logo", name: "Netcom Learning",
      description: "NetCom Learning, Microsoft's Partner of the Year for 2022 & 2023, has empowered 40k+"
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5e53309d1fb5740288ffe5e2a66508c5b1daa59b156955fd82c523f91f63f78?apiKey=947e37291f354206bf60a72b34e15e90&", altText: "Fast Lane logo", name: "Fast Lane",
      description: "Premier IT Training and Certification provider"
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9fec0a93e784cadbd221a384d62c7268b97fffa1576e4158e64804bd0e508fcc?apiKey=947e37291f354206bf60a72b34e15e90&", altText: "LLPA logo", name: "LLPA",
      description: "Founded in 2013 in the Netherlands, the LLPA has trained 500,000 students annually across"
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f55dc86a6cc43ea48e1d6b9d51207af87a6f93231bcf81d81a140eff31811a04?apiKey=947e37291f354206bf60a72b34e15e90&", altText: "Compu Educacion logo", name: "Compu Educacion",
      description: "Founded in 1991, CompuEducación has positioned itself as a frontrunner in IT training"
    }
  ];

  return (
    <div className="flex flex-col items-center px-20 py-11 bg-black max-md:px-5">
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

      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/05cccb882581691b2de0ecbc44b46061100654bbdbbed05c40e66cd58f842599?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="mt-16 max-w-full aspect-[2.04] w-[1250px] max-md:mt-10" />

      <section className="flex flex-col p-12 mt-40 w-full bg-gray-900 max-w-[1620px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">North America</h2>
        <div className="flex gap-5 mt-8 text-xl font-semibold leading-6 text-zinc-400 max-md:flex-wrap">
          {regions.map(region => (
            <RegionItem key={region.name} {...region} />
          ))}
        </div>
      </section>

      <section className="flex flex-col p-12 mt-8 w-full bg-gray-900 max-w-[1620px] max-md:px-5 max-md:max-w-full">
        <h2 className="text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">Europe</h2>
        <div className="mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ef60ea6e8ee0648ab2605fbc0657470c96b70ac7758646297e98a3714e03dc59?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Austria icon" name="Austria" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/975e68139c98a9148e3fe87120305a7d5d563e66f5983f4320f69897bcbfec22?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Belgium icon" name="Belgium" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b4fcd519d824bc0f224c915ab401af7acd9408e9a28a8eaab5e3bd87f73cbc3d?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Bosnia And Herzegovina icon" name="Bosnia And Herzegovina" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a821040c630bd62adcb08d4ad36c5dfcc6d303c06d1f8b9fbd1177b0d1d39659?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Bulgaria icon" name="Bulgaria" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/429779c6151f655d03c9142cf4ce7f2137c364bb80f66c819724e47743b79991?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Croatia icon" name="Croatia" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/52007b3f2ca0b4b17bece739da7e271fe5e53b481b73ea5f60ce91712b96e45f?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Czechia icon" name="Czechia" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/78d9725c672d4e2d711d6a504ffe469f14604edb67b906e9e91ec4be60ea51f7?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Denmark icon" name="Denmark" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/73205e7a2e22cf1ae5f3db462c33af57c1c1476bbcf58d40e29bb281eece027d?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Finland icon" name="Finland" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3b99567695d1e5b0a22ee17d25b2bff8bc1a0e89727be4b664f6a9bd07687693?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Germany icon" name="Germany" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a3f7bfa58756094e49013847c4ad9c5282c37d6a7bd9fa218f78fd5dde521ae7?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Greece icon" name="Greece" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f21b3d35c721dc2ca911e21c2024c91236f1f756792c5492a090c25e48b3764e?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Iceland icon" name="Iceland" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f810494d28f165955bacea18906d8291ca437fc2543d32ccbed0e89790890f3a?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Italy icon" name="Italy" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4c9cff5500e48172885a0a55c027262df7c6cd8c0dfcb36e6b68a301cb70422a?apiKey=947e37291f354206bf60a72b34e15e90&" altText="North Macedonia icon" name="North Macedonia" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1c8a00216555d10c056cc6aa10363eb9bb39964977b5d2dca7f8808286c90849?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Netherlands icon" name="Netherlands" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1df8444556324d6c44e6fcd034fd7f8d279ccc6944bd8d535164853192334696?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Montenegro icon" name="Montenegro" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/179782878802ef27c70768a98b3513c559781056ed55540f638ac1a4e6f4992e?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Norway icon" name="Norway" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2672ebd569487e93048ab36aa4a1cc7e8fce9d972cae7b42e61291079e4fc43d?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Poland icon" name="Poland" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d066018b84a7be212d94aebd0ef9b5658d4ace534e8c5c363ccc8ca30240b35c?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Portugal icon" name="Portugal" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a0bbaf488fa3b1f725dff0b08151ed9e5672085621764dd01823dcd0911c23c0?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Romania icon" name="Romania" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/eb5ec22be476e85c43ecc4a7957598f601efe4e333feb4073c139f42c22b1c53?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Serbia icon" name="Serbia" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8e2cf941848bcbe2cd1a4395af7baec7fcc722d6aca02732b699d3d0e03fd143?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Slovenia icon" name="Slovenia" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/684b10a87c609ec5affb77b5bc54712dc95c69dd4db09f0092bb6d61da79448f?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Spain icon" name="Spain" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0b74ad03a4d8b31631e27558d9350622cc28302c28ca0df380075b754716d101?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Sweden icon" name="Sweden" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8b341d5ad85ee40ebe9c5d8affd1b983c241ec8240e0144fa6936fe3d1cb1ad8?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Switzerland icon" name="Switzerland" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/32d74bec3c43eccf30505fd3b410972d01899a2eeeb4509b5d3235c738a97d72?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Turkey icon" name="Turkey" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/98784719819f2367cb3d45e9524ba35a9181c49b8fd367908f42641c39e059c6?apiKey=947e37291f354206bf60a72b34e15e90&" altText="United Kingdom icon" name="United Kingdom" description="Cisco and Microsoft ATPs" />
          </div>
        </div>
      </section>

      <section className="flex flex-col p-12 mt-8 w-full bg-gray-900 max-w-[1620px] max-md:px-5 max-md:max-w-full">
        <h2 className="text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">Asia / Pacific</h2>
        <div className="mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c073be1db3dc5d9dfd4c02d810782c8edcc42279a43488ebc68403e0cfe31954?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Australia icon" name="Australia" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e9ce8bd2edcdf65562ed47784acc0c2564ad9488479f13f42b4a77df203bde58?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Bahrain icon" name="Bahrain" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/555f4a1f3df706d2eb12119fca518b7308d24970c35785ead3d46cf6b57d0743?apiKey=947e37291f354206bf60a72b34e15e90&" altText="China icon" name="China" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a9ac7e5cc9bac16602c7383fc33b221dad804c4c4d48023d9501a6021bb51408?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Hong Kong icon" name="Hong Kong" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ba27a4135216df4104e2009cb2e73bb9fe5920e2b32c50f96fe50507d8170942?apiKey=947e37291f354206bf60a72b34e15e90&" altText="India icon" name="India" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/05bf04ca64f37b2cf9d5b78a1301f013408afe0a4c8f4d9605280759cd5acf61?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Indonesia icon" name="Indonesia" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e796f378bfa068fbc512bee074ff3ac1f1f9c7788f732ad0ebddf6b25100fdbe?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Japan icon" name="Japan" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8487e1ddfd88d03a18e42cf9bc90bf3737af3971d28eb4a21618d60b7fb3363a?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Kuwait icon" name="Kuwait" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0b8627de8b1bf25731d4c2d6cbe1fe5eeccba51a0af4bfb7a03281db11d396de?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Malaysia icon" name="Malaysia" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6cfb7c85c7515e05ddb4b5dd29e88a698938de09cf5067bf91289c77a2616714?apiKey=947e37291f354206bf60a72b34e15e90&" altText="New Zealand icon" name="New Zealand" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6444eeb91bed45ab4be33f49d88cf498222fde9c9efe3835fb5de0076258fe40?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Oman icon" name="Oman" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/018c1917a372f76be32bba290e40da0ed5a61b903da5bd0ef77b659e67be2607?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Philippines icon" name="Philippines" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8f0f93af9bc21c0e5f9526f690f62e6d893d859d6303c3eb5fc5d8df45b5b9b6?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Qatar icon" name="Qatar" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/55e2b6988e3109068d5804c509fa26b4ecd4d53fe9219ef63ed1f3074e433060?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Saudi Arabia icon" name="Saudi Arabia" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b2982012e2024317263dbf28a8c94fd5cb7485f6ba6ceeae9473ce42c1673bbd?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Singapore icon" name="Singapore" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/aa4e35172614a21c8ceaf952f5fd75e72d48ef63ad43773ab108317af91065d4?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Sri Lanka icon" name="Sri Lanka" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/63b90f26f56855a0ad63d24db3bb51c3ee1f0f18822b64d3816db482915ac6cd?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Taiwan icon" name="Taiwan" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2a8238b2afa2a37aef42e085c27b6e2f9f5abe3045fa43e82925f4cd6b283dd3?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Thailand icon" name="Thailand" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2a3d8983b1a4ad783cdc6d87fa8377941a91db7a151edb52038c4f6b0b243171?apiKey=947e37291f354206bf60a72b34e15e90&" altText="United Arab Emirates icon" name="United Arab Emirates" description="Cisco and Microsoft ATPs" />
            <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e9091e43a7c87a6929344427088cb38f49cf5a0374701a28812348ceca05566d?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Vietnam icon" name="Vietnam" description="Cisco and Microsoft ATPs" />
          </div>
        </div>
      </section>

      <section className="mt-8 w-full max-w-[1620px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <article className="flex flex-col grow p-12 w-full bg-gray-900 max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <h2 className="text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">South America</h2>
              <div className="flex gap-5 pr-20 mt-8 text-xl font-semibold leading-6 text-zinc-400 max-md:flex-wrap max-md:pr-5">
                <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f3106e349451a4cef081964d616dbfd507169de4999a592c44ba9561ebbbf540?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Argentina icon" name="Argentina" description="Cisco and Microsoft ATPs" />
                <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/db9a30f052376c4e23585abcf5940d9d7dfc8a0190c24bd685c575923533cd88?apiKey=947e37291f354206bf60a72b34e15e90&" altText="Brazil icon" name="Brazil" description="Cisco and Microsoft ATPs" />
              </div>
            </article>
          </div>
          <aside className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-12 w-full bg-gray-900 max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <h2 className="text-5xl font-bold text-white max-md:text-4xl">Africa</h2>
              <div className="flex flex-col justify-center items-start mt-8 text-xl font-semibold leading-6 text-zinc-400 max-md:pr-5">
                <RegionItem imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/459348e4fe2fd5c2b07a20e2d9ea377955a14151b005c224fe6c1eaa60cb2eab?apiKey=947e37291f354206bf60a72b34e15e90&" altText="South Africa icon" name="South Africa" description="Cisco and Microsoft ATPs" />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="flex flex-col items-center mt-24 w-full max-w-[1618px] max-md:mt-10 max-md:max-w-full">
        <div className="max-w-full w-[1250px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e3e75ed7e0b3d54f31d53aad75a7f748a7630a402ed2b63689504d5f3ae504b?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="grow w-full aspect-[1.14] max-md:mt-10 max-md:max-w-full" />
            </div>
            <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-2 text-lg font-medium text-white max-md:mt-10 max-md:max-w-full">
                <div className="leading-[156%] max-md:max-w-full">AUTHORIZED</div>
                <h3 className="mt-8 text-5xl font-bold max-md:max-w-full max-md:text-4xl">Training Partners</h3>
                <p className="mt-12 leading-7 text-zinc-400 max-md:mt-10 max-md:max-w-full">
                  Join the AI Certs Authorized Training Partner (ATP) Program and open up exciting avenues for your organization to
                  amplify artificial intelligence and blockchain training business. As a partner, you’ll enjoy a range of benefits,
                  role-based certification exams and training materials, volume discounts, comprehensive marketing support materials,
                  specialized sales training, and access to a wealth of instructor resources. Our program is strategically crafted to
                  assist your organization in training and certifying a larger number of individuals across diverse business sectors
                  and market segments. Embrace this opportunity to elevate your training business and make a lasting impact on the AI
                  education landscape with AI Certs.
                </p>
              </div>
            </article>
          </div>
          <button className="justify-center px-6 py-3 mt-20 text-base font-semibold text-white bg-orange-400 max-md:px-5 max-md:mt-10">
            Become a Partner Now!
          </button>
          <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {partners.map(partner => (
                <PartnerItem key={partner.name} {...partner} />
              ))}
            </div>
          </div>

          <section className="mt-8 max-w-full w-[1206px]">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <PartnerItem
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/dfddd3c18f3716e78669f52a6743a398c96b4267354791aef2aae7a74ddf7ff7?apiKey=947e37291f354206bf60a72b34e15e90&"
                altText="IT College logo"
                name="IT College"
                description="For 29 years, IT College 's values have been commitment and educational quality."
              />
              <PartnerItem
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/56da74f8cb40ee413081441a57833fc91dcb4dd107aa63988f9c4b1567856a26?apiKey=947e37291f354206bf60a72b34e15e90&"
                altText="ITG Corp logo"
                name="ITG Corp"
                description="ITG a Microsoft and AWS business partner with over ten years of positive experience providing"
              />
              <PartnerItem
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a6bea04b232866752ba7d60ae25d444064d0c92602caf83149b5c98c8e8e2655?apiKey=947e37291f354206bf60a72b34e15e90&"
                altText="Tech Train 365 logo"
                name="Tech Train 365"
                description="TechTrain 365 has a comprehensive lineup of training courses that are designed to keep you"
              />
            </div>
          </section>
        </div>
      </section>

      <section className="flex flex-col items-center mt-24 w-full max-w-[1618px] max-md:mt-10 max-md:max-w-full">
        <div className="max-w-full w-[1250px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cb4527d4d489b3d0e60d1b936fda59e62b14e4dd3de5905b52d92f1e3088fb6?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="w-full aspect-[1.14] max-md:mt-10 max-md:max-w-full" />
            </div>
            <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-2 text-lg font-medium text-white max-md:mt-10 max-md:max-w-full">
                <div className="leading-[156%] max-md:max-w-full">AUTHORIZED</div>
                <h3 className="mt-8 text-5xl font-bold max-md:max-w-full max-md:text-4xl">Academic Partners</h3>
                <p className="mt-14 leading-7 text-zinc-400 max-md:mt-10 max-md:max-w-full">
                  The AI Certs Authorized Academic Partner Program (AAP) offers schools a range of tools and resources to boost
                  enrollments by providing state-of-the-art training and certification options for all roles of business. Align
                  industry role-based certification to your existing program for skill validation and industry recognition. By joining
                  this program, academic partners gain access to academic pricing, comprehensive marketing support materials,
                  strategic enrollment positioning, valuable classroom resources, and more. Let us support you in expanding and
                  enhancing your curriculum or offering new curriculum. Join our academic partner program today and take advantage of
                  these benefits to grow your academic offerings and better serve your students.
                </p>
              </div>
            </article>
          </div>
          <button className="justify-center px-6 py-3 mt-20 text-base font-semibold text-white bg-orange-400 max-md:px-5 max-md:mt-10">
            Become a Partner Now!
          </button>
          <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <PartnerItem
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/45c679913e0269f0b4bce42f62dc958454aba3a1b381ab071df8a21fbaa6b3f7?apiKey=947e37291f354206bf60a72b34e15e90&"
                altText="Columbia University logo"
                name="Columbia University"
                description="Prestigious Ivy League in NYC. Known for humanities, sciences & global research impact."
              />
              <PartnerItem
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/92822bc51ca56d086103c48a1d4a5e5cb0e04f32da707d4f145d70d32fbee1c8?apiKey=947e37291f354206bf60a72b34e15e90&"
                altText="CUNY logo"
                name="CUNY"
                description="New York's public uni system. Offers diverse programs & known for accessible, quality"
              />
              <PartnerItem
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a5b76245f9f4864ffa72c80cfd4e0d439d4846c339efa45c1ee78ef3d4be63d2?apiKey=947e37291f354206bf60a72b34e15e90&"
                altText="Harvard University logo"
                name="Harvard University"
                description="Renowned Ivy League in Massachusetts. Esteemed for academics, research & influential"
              />
              <PartnerItem
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/055f350b88531ac5dd12cc4a836946c044e3d3eb7258af04774a3fd728541d77?apiKey=947e37291f354206bf60a72b34e15e90&"
                altText="Johns Hopkins University logo"
                name="Johns Hopkins University"
                description="Baltimore-based leader in medical research. Pioneered modern medicine & public health."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center px-8 py-12 mt-8 max-w-full bg-gray-900 w-[382px] max-md:px-5">
        <PartnerItem
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ee62bcf0dbdb5fb4755d2454d69e69f4d40473be46bd730946b60aea2a3ad9eb?apiKey=947e37291f354206bf60a72b34e15e90&"
          altText="State University of New York logo"
          name="State University of New York"
          description="New York's state uni system. Large network with varied programs, emphasizing research"
        />
      </section>

      <section className="flex flex-col mt-24 max-w-full w-[1250px] max-md:mt-10">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8735b2f4a01c64862d52320fe70cca599e38479a39608675775a877f4f395b97?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="grow w-full aspect-[1.02] max-md:mt-10 max-md:max-w-full" />
            </div>
            <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-2 text-lg font-medium text-white max-md:mt-10 max-md:max-w-full">
                <div className="leading-[156%] max-md:max-w-full">AUTHORIZED</div>
                <h3 className="mt-9 text-5xl font-bold max-md:max-w-full max-md:text-4xl">Content Partners</h3>
                <p className="mt-14 leading-7 text-zinc-400 max-md:mt-10 max-md:max-w-full">
                  Becoming an Authorized Content Partner with AI Certs opens a world of opportunities for those looking to enhance
                  their AI programs or develop content in this dynamic field. By aligning your content with our industry-recognized
                  certifications, you not only increase its value and validity but also provide learners with credentials that are highly
                  respected in the industry. As a partner, you’ll receive resources and support to help you align your content effectively, 
                  ensuring it meets the high standards expected by our certification programs. Additionally, partners enjoy
                  exclusive benefits not available to non-partner providers, making this program a valuable opportunity for those
                  looking to make a mark in the AI education space. Join us and be part of a community dedicated to advancing AI
                  education and empowering learners worldwide.
                </p>
              </div>
            </article>
          </div>
          <button className="justify-center self-center px-6 py-3 mt-20 text-base font-semibold text-white bg-orange-400 max-md:px-5 max-md:mt-10">
            Become a Partner Now!
          </button>
          <div className="mt-20 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <PartnerItem
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/941891eb65993487c3a160d21817b4eb2badc3730693392e63f3cac7bbe819c8?apiKey=947e37291f354206bf60a72b34e15e90&"
                altText="Guni Guru logo"
                name="Guni Guru"
                description="Dedicated to bridging education & life-education. Offers potent online teachings for"
              />
              <PartnerItem
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d2a174646bb99f075ca0fcb082bb895ef41f9478f364264334e8ab065d118b78?apiKey=947e37291f354206bf60a72b34e15e90&"
                altText="AVA™ logo"
                name="AVA™"
                description="Newest in Orange Education, focusing on tech & business. Curated resources to hone skills &"
              />
              <PartnerItem
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c0e361734e33a1b7c829216f504e831437e811a71fd341d68f1e8084a53173b8?apiKey=947e37291f354206bf60a72b34e15e90&"
                altText="StepUpwards logo"
                name="StepUpwards"
                description="StepUpwards: Founded by Varun, Debarshi & Deepak. Unites passion for learning & growth."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col mt-24 max-w-full w-[1250px] max-md:mt-10">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b106005eacf3bacd19631a07bed0cd38830c648db08026ea540a839de5c52150?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="w-full aspect-[0.9] max-md:mt-10 max-md:max-w-full" />
            </div>
            <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-2 text-lg font-medium text-white max-md:mt-10 max-md:max-w-full">
                <div className="leading-[156%] max-md:max-w-full">AUTHORIZED TRAINERS</div>
                <h3 className="mt-8 text-5xl font-bold max-md:max-w-full max-md:text-4xl">AI Certified Trainer Program</h3>
                <p className="mt-14 leading-7 text-zinc-400 max-md:mt-10 max-md:max-w-full">
                  The AI+ Certified Trainer (AICT) Program was built with the training professional in mind. It seeks to create and support a
                  community of qualified communicators to deliver and facilitate AI Certs courses for our Authorized Training Partners (“ATP”). 
                  The AICT Program allows AI Certs’ authorized partners, other organizations, and the marketplace to identify qualified individuals 
                  who can deliver training on AI Certs courses.
                  <br />
                  <br />
                  By joining this group, trainers who are part of the AICT Program are a key asset in today’s world which is rapidly adopting artificial 
                  intelligence technologies. AICT Program members are entitled to several benefits including early access to new courses, a community 
                  channel for networking, and a voice in shaping the future of training in the world of artificial intelligence.
                </p>
              </div>
            </article>
          </div>
          <div className="self-center mt-20 max-w-full w-[794px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-8 py-12 w-full text-base bg-gray-900 max-md:px-5 max-md:mt-8">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5ef692c9f87921f63fa9a89bb48e521f48bef8c0202ab91941b50408ea0acad?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="self-center max-w-full aspect-square w-[180px]" />
                  <div className="flex flex-col justify-center mt-8">
                    <p className="leading-6 text-center text-zinc-400">
                      Newest in Orange Education, focusing on tech & business. Curated resources to hone skills &
                    </p>
                    <button className="justify-center self-center px-6 py-3 mt-4 font-semibold text-white bg-orange-400 max-md:px-5">
                      Become a Trainer
                    </button>
                  </div>
                </div>
              </article>
              <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-8 py-12 w-full text-base bg-gray-900 max-md:px-5 max-md:mt-8">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ac99fe8d6fb6db571ed5f611fcca0db200b653dcc8243ab1d03366a6ec905a7?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="self-center max-w-full aspect-square w-[180px]" />
                  <div className="flex flex-col justify-center mt-8">
                    <p className="leading-6 text-center text-zinc-400">
                      StepUpwards: Founded by Varun, Debarshi & Deepak. Unites passion for learning & growth.
                    </p>
                    <button className="justify-center self-center px-6 py-3 mt-4 font-semibold text-white bg-orange-400 max-md:px-5">
                      Become a Trainer
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col py-0.5 mt-24 w-full max-w-[1650px] max-md:mt-10 max-md:max-w-full">
        <hr className="shrink-0 bg-gray-800 border border-gray-800 border-solid h-[5px] max-md:max-w-full" />
        <div className="flex gap-5 items-start mt-24 w-full max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-start mt-2.5 text-center max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ade294e778257bb03b16f718234ba395614d847ec4c964b9bbd9683f6ee98f0c?apiKey=947e37291f354206bf60a72b34e15e90&" alt="Logo" className="max-w-full aspect-[5] w-[239px]" />
            <NewsletterSignup />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a0a558f7cd8beedc3bfee386583be2668059ab4e35369b2322cc59e447296d?apiKey=947e37291f354206bf60a72b34e15e90&" alt="" className="mt-10 max-w-full aspect-[12.5] w-[230px]" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-2xl font-semibold text-white">About</p>
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
          </div>

          <div className="flex-auto max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center max-md:mt-10">
                  <p className="text-2xl font-semibold text-white">Certifications</p>
                  <nav className="mt-12 text-lg font-medium leading-7 text-zinc-400 max-md:mt-10">
                    <a href="#">AI+ Professional™</a><br />
                    <a href="#">AI+ Technical™</a><br />
                    <a href="#">Blockchain+ Professional™</a><br />
                    <a href="#">Blockchain+ Technical™</a><br />
                    <a href="#">View All</a>
                  </nav>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center max-md:mt-10">
                  <p className="text-2xl font-semibold text-white">Authorized</p>
                  <nav className="mt-12 text-lg font-medium leading-7 text-zinc-400 max-md:mt-10">
                    <a href="#">Authorized Partners</a><br />
                    <a href="#">Authorized Trainers</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="justify-center pt-12 mt-24 text-lg font-medium leading-7 text-zinc-400 max-md:mt-10 max-md:max-w-full">
          Copyright © AI CERTs™, Inc. All Rights Reserved
        </p>
      </section>
    </div>
  );
}

export default MyComponent1;