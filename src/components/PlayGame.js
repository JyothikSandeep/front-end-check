import React from "react";
import "./PlayGame.css";
import image1 from "../images/img-4.png";
import image2 from "../images/img-5.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import { useEffect } from "react";
import Winner from "./Winner";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
// import { useEffect } from "react";
const PlayGame = () => {
  const Navigate = useNavigate();
  const location = useLocation();
   const { darkMode, setDarkMode } = useContext(MyContext);
  useEffect(() => {
    // setSocket(io.connect("https://backend-check-r9sg.onrender.com"));
    setSocket(io.connect("http://localhost:4000"));

    setName(location.state);
    if (darkMode !== "") {
      setBody("body1");
    } else {
      setBody("");
    }
  }, [location.state, darkMode]);
   const [body, setBody] = useState("");

  const [waiting, setWaiting] = useState(true);
  const [name, setName] = useState("");
  const [opponentName, setOpponentName] = useState("");
  const [startsWith, setStartWith] = useState();
  const [socket, setSocket] = useState(false);
  const [currentMove, setCurrentMove] = useState("X");
  const [opponentId, setOpponentId] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("activeColor");
  const [backgroundColor1, setBackgroundColor1] = useState("");
  const [display, setDisplay] = useState("");
  const [winner, setWinner] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("");
  if (socket) {
    socket.emit("check_for_palyers", { name });
    socket.on("winner_from_server", (data) => {
      console.log(data);
      setDisplay(data + " wins 🎉🎉🎉");
      setWinner(true);
      setStartWith("");
      setCurrentMove("");
      setCurrentPlayer("");
    });
    socket.on("opponent_found", (data) => {
      console.log(data);
      if (data?.id) {
        setOpponentName(data.name);
        setWaiting(false);
        setStartWith(data.startsWith);
        setOpponentId(data.id);

        if (data.startsWith === "X") {
          setDisplay("It's " + name.name + " turn");
        } else {
          setCount(3);
          setDisplay(data.name.name);
        }
      }
    });
    socket.on("data_from_client", (data) => {
      console.log(data);
      setCurrentPlayer(data.currentPlayer.name);
      setDisplay("It's " + data.currentPlayer.name + " trun");

      if (data.data.currentMove === "X") {
        setBackgroundColor("activeColor");
      } else {
        setBackgroundColor("disableColor");
      }

      if (data.data.currentMove === "O") {
        setBackgroundColor1("activeColor");
      } else {
        setBackgroundColor1("disableColor");
      }
      if (data.data?.btn1) {
        setBtn1(data.data.btn1);
        setData(data.data.d);
        setCurrentMove(data.data.currentMove);
        setCount(data.data.count);
      } else if (data.data?.btn2) {
        setBtn2(data.data.btn2);
        setData(data.data.d);
        setCurrentMove(data.data.currentMove);
        setCount(data.data.count);
      } else if (data.data?.btn3) {
        setBtn3(data.data.btn3);
        setData(data.data.d);
        setCurrentMove(data.data.currentMove);
        setCount(data.data.count);
      } else if (data.data?.btn4) {
        setBtn4(data.data.btn4);
        setData(data.data.d);
        setCurrentMove(data.data.currentMove);
        setCount(data.data.count);
      } else if (data.data?.btn5) {
        setBtn5(data.data.btn5);
        setData(data.data.d);
        setCurrentMove(data.data.currentMove);
        setCount(data.data.count);
      } else if (data.data?.btn6) {
        setBtn6(data.data.btn6);
        setData(data.data.d);
        setCurrentMove(data.data.currentMove);
        setCount(data.data.count);
      } else if (data.data?.btn7) {
        setBtn7(data.data.btn7);
        setData(data.data.d);
        setCurrentMove(data.data.currentMove);
        setCount(data.data.count);
      } else if (data.data?.btn8) {
        setBtn8(data.data.btn8);
        setData(data.data.d);
        setCurrentMove(data.data.currentMove);
        setCount(data.data.count);
      } else if (data.data?.btn9) {
        setBtn9(data.data.btn9);
        setData(data.data.d);
        setCurrentMove(data.data.currentMove);
        setCount(data.data.count);
      }

      console.log(data);
    });
  }


  function button1() {
    if (data[0] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn1({ ...btn1, img: image1, style: "active" });
        let d = data;
        d[0] = "X";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn1: { ...btn1, img: image1, style: "active" },
            d,
            opponentId,
            currentMove: "O",
            count: count + 1,
          });
        }
       
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn1({ ...btn1, img: image2, style: "active" });
        let d = data;
        d[0] = "O";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn1: { ...btn1, img: image2, style: "active" },
            d,
            opponentId,
            currentMove: "X",


            count: count + 1,
          });
        }
      }
      setCount(count + 1);
    }
    if(!winner){

      checkWinner();
    }
  }
  function button2() {
    if (data[1] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn2({ ...btn2, img: image1, style: "active" });
        let d = data;
        d[1] = "X";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn2: { ...btn2, img: image1, style: "active" },
            d,
            opponentId,
            currentMove: "O",

            count: count + 1,
          });
        }
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn2({ ...btn2, img: image2, style: "active" });
        let d = data;
        d[1] = "O";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn2: { ...btn2, img: image2, style: "active" },
            d,
            opponentId,
            currentMove: "X",

            count: count + 1,
          });
        }
      }
      setCount(count + 1);
    }
     if (!winner) {
       checkWinner();
     }

  }
  function button3() {
    if (data[2] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn3({ ...btn3, img: image1, style: "active" });
        let d = data;
        d[2] = "X";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn3: { ...btn3, img: image1, style: "active" },
            d,
            opponentId,
            currentMove: "O",

            count: count + 1,
          });
        }
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn3({ ...btn3, img: image2, style: "active" });
        let d = data;
        d[2] = "O";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn3: { ...btn3, img: image2, style: "active" },
            d,
            opponentId,
            currentMove: "X",

            count: count + 1,
          });
        }
      }
      setCount(count + 1);
    }
 if (!winner) {
   checkWinner();
 }

  }
  function button4() {
    if (data[3] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn4({ ...btn4, img: image1, style: "active" });
        let d = data;
        d[3] = "X";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn4: { ...btn4, img: image1, style: "active" },
            d,
            opponentId,
            currentMove: "O",

            count: count + 1,
          });
        }
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn4({ ...btn4, img: image2, style: "active" });
        let d = data;
        d[3] = "O";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn4: { ...btn4, img: image2, style: "active" },
            d,
            opponentId,
            currentMove: "X",

            count: count + 1,
          });
        }
      }
      setCount(count + 1);
    }
 if (!winner) {
   checkWinner();
 }

  }
  function button5() {
    if (data[4] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn5({ ...btn5, img: image1, style: "active" });
        let d = data;
        d[4] = "X";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn5: { ...btn5, img: image1, style: "active" },
            d,
            opponentId,
            currentMove: "O",

            count: count + 1,
          });
        }
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn5({ ...btn5, img: image2, style: "active" });
        let d = data;
        d[4] = "O";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn5: { ...btn5, img: image2, style: "active" },
            d,
            opponentId,
            currentMove: "X",

            count: count + 1,
          });
        }
      }
      setCount(count + 1);
    }
 if (!winner) {
   checkWinner();
 }

  }
  function button6() {
    if (data[5] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn6({ ...btn6, img: image1, style: "active" });
        let d = data;
        d[5] = "X";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn6: { ...btn6, img: image1, style: "active" },
            d,
            opponentId,
            currentMove: "O",

            count: count + 1,
          });
        }
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn6({ ...btn6, img: image2, style: "active" });
        let d = data;
        d[5] = "O";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn6: { ...btn6, img: image2, style: "active" },
            d,
            opponentId,
            currentMove: "X",

            count: count + 1,
          });
        }
      }
      setCount(count + 1);
    }
 if (!winner) {
   checkWinner();
 }

  }
  function button7() {
    if (data[6] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn7({ ...btn7, img: image1, style: "active" });
        let d = data;
        d[6] = "X";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn7: { ...btn7, img: image1, style: "active" },
            d,
            opponentId,
            currentMove: "O",

            count: count + 1,
          });
        }
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn7({ ...btn7, img: image2, style: "active" });
        let d = data;
        d[6] = "O";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn1: { ...btn7, img: image2, style: "active" },
            d,
            opponentId,
            currentMove: "X",

            count: count + 1,
          });
        }
      }
      setCount(count + 1);
    }
 if (!winner) {
   checkWinner();
 }

  }
  function button8() {
    if (data[7] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn8({ ...btn8, img: image1, style: "active" });
        let d = data;
        d[7] = "X";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn8: { ...btn8, img: image1, style: "active" },
            d,
            opponentId,
            currentMove: "O",

            count: count + 1,
          });
        }
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn8({ ...btn8, img: image2, style: "active" });
        let d = data;
        d[7] = "O";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn8: { ...btn8, img: image2, style: "active" },
            d,
            opponentId,
            currentMove: "X",

            count: count + 1,
          });
        }
      }
      setCount(count + 1);
    }
 if (!winner) {
   checkWinner();
 }

  }
  function button9() {
    if (data[8] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn9({ ...btn9, img: image1, style: "active" });
        let d = data;
        d[8] = "X";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn9: { ...btn9, img: image1, style: "active" },
            d,
            opponentId,
            currentMove: "O",

            count: count + 1,
          });
        }
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn9({ ...btn9, img: image2, style: "active" });
        let d = data;
        d[8] = "O";
        setData(d);
        if (!winner) {
          socket.emit("change_in_move", {
            btn9: { ...btn9, img: image2, style: "active" },
            d,
            opponentId,
            currentMove: "X",

            count: count + 1,
          });
        }
      }
      setCount(count + 1);
    }
     if (!winner) {
       checkWinner();
     }

  }
  const checkWinner = () => {
    if (data[0] === "X" && data[1] === "X" && data[2] === "X") {
      if (startsWith === "X") {
        socket.emit("check_winner", { name: name, opponentId: opponentId });
      }
      setDisplay(currentPlayer + " wins🎉🎉");
      setWinner(true);

      return true;
    } else if (data[3] === "X" && data[4] === "X" && data[5] === "X") {
      if (startsWith === "X") {
        socket.emit("check_winner", name);
      }
      setDisplay(currentPlayer + " wins🎉🎉");
      setWinner(true);

      return true;
    } else if (data[6] === "X" && data[7] === "X" && data[8] === "X") {
      if (startsWith === "X") {
        socket.emit("check_winner", name);
      }
      setDisplay(currentPlayer + " wins🎉🎉");
      setWinner(true);

      return true;
    } else if (data[0] === "X" && data[3] === "X" && data[6] === "X") {
      if (startsWith === "X") {
        socket.emit("check_winner", name);
      }
      setDisplay(currentPlayer + " wins🎉🎉");
      setWinner(true);

      return true;
    } else if (data[1] === "X" && data[4] === "X" && data[7] === "X") {
      if (startsWith === "X") {
        socket.emit("check_winner", name);
      }
      setDisplay(currentPlayer + " wins🎉🎉");
      setWinner(true);

      return true;
    } else if (data[2] === "X" && data[5] === "X" && data[8] === "X") {
      if (startsWith === "X") {
        socket.emit("check_winner", name);
      }
      setDisplay(currentPlayer + " wins🎉🎉");
      setWinner(true);

      return true;
    } else if (data[0] === "X" && data[4] === "X" && data[8] === "X") {
      if (startsWith === "X") {
        socket.emit("check_winner", name);
      }
      setDisplay(currentPlayer + " wins🎉🎉");
      setWinner(true);

      return true;
    } else if (data[2] === "X" && data[4] === "X" && data[6] === "X") {
      if (startsWith === "X") {
        socket.emit("check_winner", name);
      }
      setDisplay(currentPlayer + " wins🎉🎉");
      setWinner(true);

      return true;
    } else if (data[0] === "O" && data[1] === "O" && data[2] === "O") {
      if (startsWith === "O") {
        socket.emit("check_winner", name);
      }
      setDisplay(currentPlayer + " wins🎉🎉");
      setWinner(true);

      return true;
    } else if (data[3] === "O" && data[4] === "O" && data[5] === "O") {
      if (startsWith === "O") {
        socket.emit("check_winner", name);
      }
      setDisplay(currentPlayer + " wins🎉🎉");
      setWinner(true);

      return true;
    } else if (data[6] === "O" && data[7] === "O" && data[8] === "O") {
      if (startsWith === "O") {
        socket.emit("check_winner", name);
      }
      setDisplay(currentPlayer + " wins🎉🎉");
      setWinner(true);

      return true;
    } else if (data[0] === "O" && data[3] === "O" && data[6] === "O") {
      if (startsWith === "O") {
        socket.emit("check_winner", name);
      }
      setDisplay(currentPlayer + " wins🎉🎉");
      setWinner(true);

      return true;
    } else if (data[1] === "O" && data[4] === "O" && data[7] === "O") {
      if (startsWith === "O") {
        socket.emit("check_winner", name);
      }
      setDisplay(currentPlayer + " wins🎉🎉");
      setWinner(true);

      return true;
    } else if (data[2] === "O" && data[5] === "O" && data[8] === "O") {
      if (startsWith === "O") {
        socket.emit("check_winner", name);
      }
      setDisplay(currentPlayer + " wins🎉🎉");
      setWinner(true);

      return true;
    } else if (data[0] === "O" && data[4] === "O" && data[8] === "O") {
      if (startsWith === "O") {
        socket.emit("check_winner", name);
      }
      setDisplay(currentPlayer + " wins🎉🎉");
      setWinner(true);

      return true;
    } else if (data[2] === "O" && data[4] === "O" && data[6] === "O") {
      if (startsWith === "O") {
        socket.emit("check_winner", name);
      }
      setDisplay(currentPlayer + " wins🎉🎉");
      setWinner(true);

      return true;
    } else if (
      data[0] &&
      data[1] &&
      data[2] &&
      data[3] &&
      data[4] &&
      data[5] &&
      data[6] &&
      data[7] &&
      data[8]
    ) {
      setDisplay("Match Draw");
    }
  };
  const [btn1, setBtn1] = useState({ style: "inactive", img: "", value: "" });
  const [btn2, setBtn2] = useState({ style: "inactive", img: "", value: "" });
  const [btn3, setBtn3] = useState({ style: "inactive", img: "", value: "" });
  const [btn4, setBtn4] = useState({ style: "inactive", img: "", value: "" });
  const [btn5, setBtn5] = useState({ style: "inactive", img: "", value: "" });
  const [btn6, setBtn6] = useState({ style: "inactive", img: "", value: "" });
  const [btn7, setBtn7] = useState({ style: "inactive", img: "", value: "" });
  const [btn8, setBtn8] = useState({ style: "inactive", img: "", value: "" });
  const [btn9, setBtn9] = useState({ style: "inactive", img: "", value: "" });
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(2);

  return (
    <div className={`${body}`}>
      {console.log(opponentName)}
      {console.log(startsWith)}
      {waiting ? (
        <p className="text-center mt-5  waiting-text ">
          waiting for other player to join...
        </p>
      ) : (
        <div>
          <h1 className="text-center">{display}</h1>
          {startsWith === "X" ? (
            <div className="playersname ">
              <p className={`${backgroundColor}`}>{name.name}</p>
              <p className={`${backgroundColor1}`}>{opponentName.name}</p>
            </div>
          ) : (
            <div className="playersname ">
              {" "}
              <p className={`${backgroundColor1}`}>{name.name}</p>
              <p className={`${backgroundColor}`}>{opponentName.name}</p>
            </div>
          )}

          
          <div className="player-box">
            {console.log(name, opponentName)}
            <div className="first-column">
              <div className="row m-2 ">
                <div className="col-sm player-btn " onClick={button1}>
                  <img
                    className={btn1.style}
                    src={btn1.img}
                    width={50}
                    height={50}
                    alt=""
                    style={{ marginTop: 4 }}
                  />
                </div>
                <div className="col-sm player-btn" onClick={button2}>
                  <img
                    src={btn2.img}
                    className={btn2.style}
                    width={50}
                    height={50}
                    alt=""
                    style={{ marginTop: 4 }}
                  />
                </div>
                <div className="col-sm player-btn" onClick={button3}>
                  <img
                    src={btn3.img}
                    className={btn3.style}
                    width={50}
                    height={50}
                    alt=""
                    style={{ marginTop: 4 }}
                  />
                </div>
              </div>
            </div>
            <div className="third-column">
              <div className="row m-2 ">
                <div className="col-sm player-btn" onClick={button4}>
                  <img
                    src={btn4.img}
                    className={btn4.style}
                    width={50}
                    height={50}
                    alt=""
                    style={{ marginTop: 4 }}
                  />
                </div>
                <div className="col-sm player-btn" onClick={button5}>
                  <img
                    src={btn5.img}
                    className={btn5.style}
                    width={50}
                    height={50}
                    alt=""
                    style={{ marginTop: 4 }}
                  />
                </div>
                <div className="col-sm player-btn" onClick={button6}>
                  <img
                    src={btn6.img}
                    className={btn6.style}
                    width={50}
                    height={50}
                    alt=""
                    style={{ marginTop: 4 }}
                  />
                </div>
              </div>
            </div>
            <div className="second-column">
              <div className="row m-2 ">
                <div className="col-sm player-btn" onClick={button7}>
                  <img
                    src={btn7.img}
                    className={btn7.style}
                    width={50}
                    height={50}
                    alt=""
                    style={{ marginTop: 4 }}
                  />
                </div>
                <div className="col-sm player-btn" onClick={button8}>
                  <img
                    src={btn8.img}
                    className={btn8.style}
                    width={50}
                    height={50}
                    alt=""
                    style={{ marginTop: 4 }}
                  />
                </div>
                <div className="col-sm player-btn" onClick={button9}>
                  <img
                    src={btn9.img}
                    className={btn9.style}
                    width={50}
                    height={50}
                    alt=""
                    style={{ marginTop: 4 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayGame;
