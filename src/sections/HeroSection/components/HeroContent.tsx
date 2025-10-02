export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent max-w-6xl mx-auto">
      <div className="items-center box-border caret-transparent gap-x-6 flex flex-col justify-between gap-y-6 mb-8 md:flex-row">
        <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
          <img
            src="/People by Cris Logo Design copy.png"
            alt="People by Cris Logo"
            className="box-border caret-transparent h-16 max-w-full object-contain w-16"
          />
        </div>
        <div className="box-border caret-transparent text-center">
          <h1 className="text-transparent text-3xl font-black bg-clip-text bg-[linear-gradient(to_right,rgb(255,255,255),rgb(243,244,246),rgb(255,255,255))] box-border tracking-[-0.75px] leading-9 md:text-6xl md:tracking-[-1.5px] md:leading-[60px]">
            WEBSELECT
          </h1>
          <div className="bg-[linear-gradient(to_right,rgb(251,146,60),rgb(217,67,26))] box-border caret-transparent h-1 w-24 mt-3 mx-auto rounded-full"></div>
        </div>
        <div className="box-border caret-transparent">
          <button className="font-semibold items-center bg-transparent bg-[linear-gradient(to_right,rgb(232,75,39),rgb(217,67,26))] caret-transparent gap-x-2 flex gap-y-2 text-center px-6 py-3 rounded-full hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(232,75,39,0.25)_0px_10px_15px_-3px,rgba(232,75,39,0.25)_0px_4px_6px_-4px]">
            <img
              src="https://c.animaapp.com/mg94jq3avieR0H/assets/icon-1.svg"
              alt="Icon"
              className="box-border caret-transparent h-[18px] w-[18px]"
            />
            Explorar Recursos
          </button>
        </div>
      </div>
      <div className="box-border caret-transparent text-center mb-8">
        <p className="text-gray-200 box-border caret-transparent max-w-2xl mx-auto">
          Seleção curada de websites e sistemas para monitoramento presidencial
        </p>
      </div>
    </div>
  );
};
