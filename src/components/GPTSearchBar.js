import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openAI";

const GPTSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleSearchBar = async () => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion);
  };

  return (
    <div className=" pt-[10%]  flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[language].gptSearch}
          className="p-2 m-4 col-span-9 rounded-lg"
        />
        <button
          type="button"
          className="px-3 py-1 my-4 mx-2 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleSearchBar}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
