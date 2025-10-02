export const Navigation = () => {
  return (
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
  );
};
