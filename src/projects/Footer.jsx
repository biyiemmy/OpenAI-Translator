import logo from "../assets/openai.png";

export const Footer = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="flex justify-center items-center">
          <img src={logo} className="mr-1" alt="openai logo" />
          <p>
            Powered By Open AI - Built by{" "}
            <a
              className="text-yellow-200 font-bold"
              href="https://github.com/biyiemmy"
            >
              biyiemmy
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
