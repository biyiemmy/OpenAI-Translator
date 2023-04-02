import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { BeatLoader } from "react-spinners";
import * as Unicons from "@iconscout/react-unicons";

export const Translation = () => {
  const [formData, setFormData] = useState({
    language: "Yoruba",
    message: "",
  });
  const [error, setError] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [translation, setTranslation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const translate = async () => {
    const { language, message } = formData;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Translate this into ${language}: ${message}`,
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    const translatedText = response.data.choices[0].text.trim();
    setIsLoading(false);
    setTranslation(translatedText);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!formData.message) {
      setError("Please enter the message.");
      return;
    }
    setIsLoading(true);
    translate();
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(translation)
      .then(() => displayNotification())
      .catch((err) => console.error("failed to copy: ", err));
  };

  const displayNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="">
      <form onSubmit={handleOnSubmit} className="flex gap-4 flex-col">
        <div className="choices flex justify-center items-center gap-10">
          <input
            type="radio"
            id="yoruba"
            name="language"
            value="Yoruba"
            defaultChecked={formData.language}
            onChange={handleInputChange}
          />
          <label className="label" htmlFor="yoruba">
            Yoruba
          </label>

          <input
            type="radio"
            id="igbo"
            name="language"
            value="Igbo"
            onChange={handleInputChange}
          />
          <label htmlFor="igbo">Igbo</label>

          <input
            type="radio"
            id="hausa"
            name="language"
            value="Hausa"
            onChange={handleInputChange}
          />
          <label htmlFor="hausa">Hausa</label>
        </div>

        <textarea
          name="message"
          placeholder="Type your words here.."
          className="p-4 text-lg h-36 resize-none capitalize leading-7 border border-blue-600 outline-none text-blue-600"
          onChange={handleInputChange}
        ></textarea>

        {error && <div className="text-yellow-200">{error}</div>}

        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
        >
          Translate
        </button>
      </form>

      <div className="translation text-blue-600 py-3 px-8 bg-gray-100 mt-5 text-lg leading-7 h-36 overflow-y-auto relative">
        <div
          className="absolute w-20 top-3 right-0.5 opacity-90 cursor-pointer"
          onClick={handleCopy}
        >
          <Unicons.UilCopy size="25" color="#f6c53b" />
        </div>
        {isLoading ? <BeatLoader size={12} color={"red"} /> : translation}
      </div>

      <div
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 ${
          showNotification ? "translate-y-0" : "translate-y-20"
        } bg-blue-900 text-white py-3 px-6 rounded-full transition-all duration-400 ease-in-out`}
      >
        Copied to the Clipboard!
      </div>
    </div>
  );
};
