export const ContactSection = () => {
  return (
    <div className="absolute box-border caret-transparent p-5 border-t border-solid border-white/10 bottom-0 inset-x-0">
      <div className="box-border caret-transparent mb-4">
        <h3 className="text-white/40 text-xs font-light box-border caret-transparent tracking-[0.6px] leading-4 uppercase mb-2">
          Contact
        </h3>
        <div className="bg-white/20 box-border caret-transparent h-px mb-4"></div>
        <div className="box-border caret-transparent gap-x-4 flex gap-y-4">
          <a
            href="#"
            className="text-white/40 box-border caret-transparent block min-h-0 min-w-0 p-2 rounded-lg md:min-h-[auto] md:min-w-[auto] hover:text-white"
          >
            <img
              src="https://c.animaapp.com/mg94jq3avieR0H/assets/icon-4.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 w-4"
            />
          </a>
          <a
            href="#"
            className="text-white/40 box-border caret-transparent block min-h-0 min-w-0 p-2 rounded-lg md:min-h-[auto] md:min-w-[auto] hover:text-white"
          >
            <img
              src="https://c.animaapp.com/mg94jq3avieR0H/assets/icon-5.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 w-4"
            />
          </a>
          <a
            href="#"
            className="text-white/40 box-border caret-transparent block min-h-0 min-w-0 p-2 rounded-lg md:min-h-[auto] md:min-w-[auto] hover:text-white"
          >
            <img
              src="https://c.animaapp.com/mg94jq3avieR0H/assets/icon-6.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 w-4"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
