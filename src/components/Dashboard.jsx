import React, { useState } from "react";

export default function Dashboard() {
  //declaring states

  const [jobDescription, setJobDescription] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [keyWords, setKeyWords] = useState("");
  const [tone, setTone] = useState("");
  const [numWords, setNumWords] = useState("");

  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  //returning the jsx
  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-12 ">
        {/* form */}
        <div className="">
          <form>
            <div className="flex flex-col">
              <label className="sr-only" htmlFor="jobTitle">
                Job Title
              </label>
              <input
                type="text"
                className="block w-full rounded-md bg-gray-500 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg px-4 py-2 placeholder-white my-2 text-slate-50 font-medium"
                name="jobTitle"
                placeholder="Job Title"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="industry" className="sr-only">
                Industry
              </label>
              <input
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="block w-full rounded-md bg-gray-500 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg px-4 py-2 placeholder-white my-2 text-slate-50 font-medium"
                placeholder="Industry (Optional)"
                type="text"
                name="industry"
                id="industry"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="keywords" className="sr-only">
                Keywords for AI (Optional)
              </label>
              <textarea
                rows={7}
                value={keyWords}
                onChange={(e) => setKeyWords(e.target.value)}
                name="keyWords"
                id="keyWords"
                placeholder="Keywords for AI (Optional)"
                className="block w-full rounded-md bg-gray-500 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg px-4 py-2 placeholder-white my-2 text-slate-50 font-medium"
              />
            </div>
            <div className="flex flex-col">
              <label className="sr-only" htmlFor="tone">
                Tone
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="block w-full rounded-md bg-gray-500 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg px-4 py-2 placeholder-white my-2 text-white font-medium"
                name="tone"
                id="tone"
              >
                <option className="font-medium" value="default">
                  Select Tone (Optional)
                </option>
                <option className="font-medium" value="casual">
                  Casual
                </option>
                <option className="font-medium" value="friendly">
                  Friendly
                </option>
                <option className="font-medium" value="professional">
                  Professional
                </option>
                <option className="font-medium" value="formal">
                  Formal
                </option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="words" className="sr-only">
                Words (Optional)
              </label>
              <input
                value={numWords}
                onChange={(e) => setNumWords(e.target.value)}
                type="number"
                className="block w-full rounded-md bg-gray-500 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg px-4 py-2 placeholder-white my-2 text-slate-50 font-medium"
                placeholder="Number Of Words - Default 200 (Optional)"
                name="words"
                id="words"
              />
            </div>
            {/* adding notallowed class while generating  */}
            <button
              className={`bg-blue-600 w-full hover:bg-blue-700 text-white font-medium mt-6 py-2 px-4 rounded
                ${
                  isGenerating || jobTitle === ""
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
              type="submit"
              disabled={isGenerating || jobTitle === ""}
            >
              {isGenerating ? "Generating..." : "Generate Job Description"}
            </button>
          </form>
        </div>
        {/* end of form */}

        {/* output */}
        <div className="">
          <div className="flex flex-col">
            <label htmlFor="output" className="sr-only">
              Output
            </label>
            <textarea
              rows={
                jobDescription === ""
                  ? 7
                  : jobDescription.split("\\n").length + 12
              }
              name="output"
              onChange={(e) => setJobDescription(e.target.value)}
              value={jobDescription}
              disabled={jobDescription === ""}
              id="output"
              placeholder="AI Generated Job Description"
              className="block w-full rounded-md bg-gray-500 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg px-4 py-2 placeholder-white my-2 text-slate-50 font-medium"
            />
            <button
              onClick={() => {}}
              className="bg-blue-600 hover:transition-all hover:bg-blue-700 text-white font-medium py-2 px-4 rounded "
              type="submit"
              disabled={jobDescription === ""}
            >
              {isCopied ? "Copied" : "Copy to Clipboard"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
