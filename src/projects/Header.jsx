import logo from "../assets/light-bulb.svg";

export const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="py-2 flex items-center">
          <img src={logo} alt="logo" className="w-40 my-3" />
          <div className="ml-4">
            <h1 className="text-4xl mb-4">OpenAI Translator</h1>
            <p>Pick any language</p>
            <p>Paste in your text below and we'll translate it for you</p>
          </div>
        </div>
      </div>
    </div>
  );
};
