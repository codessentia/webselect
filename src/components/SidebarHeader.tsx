export const SidebarHeader = () => {
  return (
    <div className="box-border caret-transparent p-5">
      <div className="box-border caret-transparent mb-8">
        <div className="box-border caret-transparent">
          <h1 className="text-transparent text-2xl font-black bg-clip-text bg-[linear-gradient(to_right,rgb(251,146,60),rgb(217,67,26))] box-border tracking-[1.2px] leading-8">
            WEBSELECT
          </h1>
          <h2 className="text-orange-400 text-4xl font-bold box-border caret-transparent tracking-[1.8px] leading-10 mt-2 font-tangerine">
            People by Cris
          </h2>
        </div>
      </div>
      <div className="box-border caret-transparent mb-8">
        <div className="relative box-border caret-transparent">
          <div className="items-center bg-neutral-900 box-border caret-transparent gap-x-3 flex gap-y-3 border px-4 py-2 rounded-lg border-solid border-white/20">
            <img
              src="https://c.animaapp.com/mg94jq3avieR0H/assets/icon-3.svg"
              alt="Icon"
              className="text-white/40 box-border caret-transparent h-4 w-4"
            />
            <input
              type="text"
              placeholder="Search…"
              className="text-white/60 text-sm bg-transparent box-border caret-transparent block basis-[0%] grow leading-5 min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 p-0 md:min-h-[auto] md:min-w-[auto]"
            />
          </div>
        </div>
      </div>
      <nav className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <a
              href="#"
              className="text-sm items-center bg-zinc-900 box-border caret-transparent gap-x-3 flex leading-5 gap-y-3 border px-4 py-2 rounded-lg border-solid border-white/20 hover:bg-neutral-800"
            >
              Discover
            </a>
            <a
              href="#"
              className="text-white/40 text-sm items-center box-border caret-transparent gap-x-3 flex leading-5 gap-y-3 mt-2 px-4 py-2 rounded-lg hover:text-white hover:bg-zinc-900"
            >
              About
            </a>
          </div>
        </div>
        <div className="box-border caret-transparent mt-6">
          <div className="box-border caret-transparent mb-2 px-2">
            <h3 className="text-white/40 text-xs font-light box-border caret-transparent tracking-[0.6px] leading-4 uppercase">
              Explore
            </h3>
            <div className="bg-white/20 box-border caret-transparent h-px mt-1"></div>
          </div>
          <div className="box-border caret-transparent">
            <a
              href="#"
              className="text-white/40 text-sm items-center box-border caret-transparent gap-x-3 flex leading-5 gap-y-3 px-4 py-2 rounded-lg hover:text-white hover:bg-zinc-900"
            >
              Websites
            </a>
            <a
              href="#"
              className="text-white/40 text-sm items-center box-border caret-transparent gap-x-3 flex leading-5 gap-y-3 mt-2 px-4 py-2 rounded-lg hover:text-white hover:bg-zinc-900"
            >
              Templates
            </a>
            <a
              href="#"
              className="text-white/40 text-sm items-center box-border caret-transparent gap-x-3 flex leading-5 gap-y-3 mt-2 px-4 py-2 rounded-lg hover:text-white hover:bg-zinc-900"
            >
              Design Tools
            </a>
            <a
              href="#"
              className="text-white/40 text-sm items-center box-border caret-transparent gap-x-3 flex leading-5 gap-y-3 mt-2 px-4 py-2 rounded-lg hover:text-white hover:bg-zinc-900"
            >
              Resources
            </a>
          </div>
        </div>
        <div className="box-border caret-transparent mt-6">
          <div className="box-border caret-transparent mb-2 px-2">
            <h3 className="text-white/40 text-xs font-light box-border caret-transparent tracking-[0.6px] leading-4 uppercase">
              Submission
            </h3>
            <div className="bg-white/20 box-border caret-transparent h-px mt-1"></div>
          </div>
          <div className="box-border caret-transparent">
            <a
              href="#submission"
              className="text-white/40 text-sm items-center box-border caret-transparent gap-x-3 flex leading-5 gap-y-3 px-4 py-2 rounded-lg hover:text-white hover:bg-zinc-900"
            >
              Submit
            </a>
            <a
              href="#database"
              className="text-white/40 text-sm items-center box-border caret-transparent gap-x-3 flex leading-5 gap-y-3 mt-2 px-4 py-2 rounded-lg hover:text-white hover:bg-zinc-900"
            >
              Base de Dados
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
