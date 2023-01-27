import { useState } from "react";
import Loader from "../layers/Loader";
import { generateImage } from "../../services/openAiService";
function GenerateImage() {
  // Hooks
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  // Handlers
  const handleGenerateImage = async (prompt) => {
    setLoading(true);
    try {
      const image = await generateImage(prompt);
      if (image) {
        setLoading(false);
        setImageUrl(image);
        setPrompt("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container p-5">
      <h1 className="text-center my-3">
        Generate image with OPEN AI API by using text.
      </h1>
      <div className="input-group w-50 m-auto">
        <input
          size="20"
          className="form-control me-2"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your text to generate an Image"
        />

        <button onClick={() => handleGenerateImage(prompt)}>
          Generate an image
        </button>
      </div>
      {loading && (
        <div className="my-3 position-relative">
          <div className="position-absolute top-50 start-50 translate-middle">
            <Loader />
          </div>
        </div>
      )}
      {imageUrl ? (
        <div className="my-3">
          <img
            src={imageUrl}
            width="400px"
            height="400px"
            className="img-fluid rounded mx-auto d-block"
            alt="Generated Image"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default GenerateImage;
