import React, { useState } from "react";
import { checkGrammar } from "../../services/openAiService";
import Loader from "../layers/Loader";
function GrammarCorrection() {
  const [prompt, setPrompt] = useState("Correct this to standard English:");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  // Handlers
  const handleGrammar = async (prompt) => {
    setLoading(true);
    const answer = await checkGrammar(prompt);
    if (answer) {
      setLoading(false);
      setResponse(answer);
    }
  };
  return (
    <>
      <div className="container mt-3 w-50 flex-column d-flex justify-content-center">
        <textarea
          name="grammar"
          onChange={(e) => setPrompt(e.target.value)}
          id="grammar"
          cols="50"
          value={prompt}
          rows="10"
          placeholder={`
          Type your english sentence here!
          `}
        ></textarea>
        <br />
        <button
          onClick={() => handleGrammar(prompt)}
          className="btn btn-success btn-lg"
        >
          Check Grammar
        </button>
        {loading && (
          <div className="my-3 position-relative">
            <div className="position-absolute top-50 start-50 translate-middle">
              <Loader />
            </div>
          </div>
        )}
        {response ? (
          <div className="my-4 border border-danger-subtle">
            <h1>
              <b className="text-danger">Corrected Grammar: </b> {response}
            </h1>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default GrammarCorrection;
