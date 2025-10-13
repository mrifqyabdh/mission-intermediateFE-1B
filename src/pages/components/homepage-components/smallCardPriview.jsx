
import useDaftarSaya from "../../Store/setDaftarSayaStore.js";

const SmallCardPriview = (img) => {
  const setList = useDaftarSaya((state) => state.setList);
  return (
    <div className="small-priview-card"
      style={{
        position: "absolute",
        top: "255px",
        left: "0",
        width: "100%",
        height: "30%",
        backgroundColor: "rgba(24, 24, 27, 0.8)",
        overflow: "hidden",
        border: "none",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <button
          style={{
            marginTop: "20px",
            marginLeft: "20px",
            backgroundColor: "transparent",
            border: "none",

          }}
        >
          <img
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "100%",
            }}
            src="./assets/play-button.png"
            alt=""
          />
        </button>

        <button
        onClick={() => {
            setList(img);
            alert("Film ini ditambahkan di Daftar Saya");
          }}
          style={{
            
            marginTop: "20px",
            marginLeft: "20px",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              border: "none",
              
            }}
            src="./assets/add-button.png"
            alt=""
          />
        </button>

        <button
          style={{

            marginTop: "20px",
            marginLeft: "20px",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "100%",
              backgroundColor: "transparent"
            }}
            src="./assets/more-button.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default SmallCardPriview;
