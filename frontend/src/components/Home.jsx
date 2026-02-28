import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleUploadClick = (e) => {
    navigate("/upload");
  }
  return (
    <div>
     <button
        onClick={handleUploadClick}
        className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition m-5 cursor-pointer"
      >
        Upload Document
      </button>

      <h1>Hey tirth i made this for test the redirect route after login</h1>
      <h2>made for test login route properly working or not</h2>
    </div>
  );
}

export default Home;
