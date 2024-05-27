import React from "react";
import "./PlayGame.css";
import image1 from "../images/img-4.png";
import image2 from "../images/img-5.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import io from "socket.io-client";
import { useEffect } from "react";
const PlayGame = () => {
  const location = useLocation();
  useEffect(() => {
    setSocket(io.connect("https://backend-check-r9sg.onrender.com"));
    setName(location.state);
  }, [location.state]);
  const [waiting, setWaiting] = useState(true);
  // console.log(location.state);
  const [name, setName] = useState();
  const [opponentName, setOpponentName] = useState();
  const [startsWith, setStartWith] = useState();
  const [socket, setSocket] = useState(false);
  const [currentMove, setCurrentMove] = useState("X");
  const [opponentId, setOpponentId] = useState("");

  if (socket) {
    socket.emit("check_for_palyers", { name });
    socket.on("opponent_found", (data) => {
      console.log(data);
      if (data?.id) {
        setOpponentName(data.name);
        setWaiting(false);
        setStartWith(data.startsWith);
        setOpponentId(data.id);
        if (startsWith === "X") {
          // setCount(2);
        } else {
          setCount(3);
        }
      }
    });
    socket.on("data_from_client", (data) => {
      console.log(data);
      if (data.data?.btn1) {
        setBtn1(data.data.btn1);
        setData(data.data.d);
        setCurrentMove(data.data.currentMove)
        setCount(data.data.count)
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

  // socket.emit("check_for_palyers", { name });

  function button1() {
    if (data[0] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn1({ ...btn1, img: image1, style: "active" });
        let d = data;
        d[0] = "X";
        setData(d);
        socket.emit("change_in_move", {
          btn1: { ...btn1, img: image1, style: "active" },
          d,
          opponentId,
          currentMove:"O",
          count:count+1

        });
        // setStartWith("O")
        // setCurrentMove("O")
        // setCount(count+1);
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn1({ ...btn1, img: image2, style: "active" });
        let d = data;
        d[0] = "O";
        setData(d);
        socket.emit("change_in_move", {
          btn1: { ...btn1, img: image2, style: "active" },
          d,
          opponentId,
          currentMove: "X",
          count: count + 1,
        });
      }
      setCount(count + 1);
    }
    checkWinner();
    // setActive('')
  }
  function button2() {
    if (data[1] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn2({ ...btn2, img: image1, style: "active" });
        let d = data;
        d[1] = "X";
        setData(d);
        socket.emit("change_in_move", {
          btn2: { ...btn2, img: image1, style: "active" },
          d,
          opponentId,
          currentMove: "O",
          count: count + 1,
        });
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn2({ ...btn2, img: image2, style: "active" });
        let d = data;
        d[1] = "O";
        setData(d);
        socket.emit("change_in_move", {
          btn2: { ...btn2, img: image2, style: "active" },
          d,
          opponentId,
          currentMove: "X",
          count: count + 1,
        });
      }
      setCount(count + 1);
    }
    checkWinner();

    // setActive("");
  }
  function button3() {
    if (data[2] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn3({ ...btn3, img: image1, style: "active" });
        let d = data;
        d[2] = "X";
        setData(d);
        socket.emit("change_in_move", {
          btn3: { ...btn3, img: image1, style: "active" },
          d,
          opponentId,
          currentMove: "O",
          count: count + 1,
        });
      } else if (startsWith === "O" && currentMove ==="O") {
        setBtn3({ ...btn3, img: image2, style: "active" });
        let d = data;
        d[2] = "O";
        setData(d);
        socket.emit("change_in_move", {
          btn3: { ...btn3, img: image2, style: "active" },
          d,
          opponentId,
          currentMove: "X",
          count: count + 1,
        });
      }
      setCount(count + 1);
    }

    checkWinner();

    // setActive("");
  }
  function button4() {
    if (data[3] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn4({ ...btn4, img: image1, style: "active" });
        let d = data;
        d[3] = "X";
        setData(d);
        socket.emit("change_in_move", {
          btn4: { ...btn4, img: image1, style: "active" },
          d,
          opponentId,
          currentMove: "O",
          count: count + 1,
        });
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn4({ ...btn4, img: image2, style: "active" });
        let d = data;
        d[3] = "O";
        setData(d);
        socket.emit("change_in_move", {
          btn4: { ...btn4, img: image2, style: "active" },
          d,
          opponentId,
          currentMove: "X",
          count: count + 1,
        });
      }
      setCount(count + 1);
    }

    checkWinner();

    // setActive("");
  }
  function button5() {
    if (data[4] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn5({ ...btn5, img: image1, style: "active" });
        let d = data;
        d[4] = "X";
        setData(d);
        socket.emit("change_in_move", {
          btn5: { ...btn5, img: image1, style: "active" },
          d,
          opponentId,
          currentMove: "O",
          count: count + 1,
        });
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn5({ ...btn5, img: image2, style: "active" });
        let d = data;
        d[4] = "O";
        setData(d);
        socket.emit("change_in_move", {
          btn5: { ...btn5, img: image2, style: "active" },
          d,
          opponentId,
          currentMove: "X",
          count: count + 1,
        });
      }
      setCount(count + 1);
    }

    checkWinner();

    // setActive("");
  }
  function button6() {
    if (data[5] === "") {
      if (count % 2 ===0 && startsWith === "X" && currentMove === "X") {
        setBtn6({ ...btn6, img: image1, style: "active" });
        let d = data;
        d[5] = "X";
        setData(d);
        socket.emit("change_in_move", {
          btn6: { ...btn6, img: image1, style: "active" },
          d,
          opponentId,
          currentMove: "O",
          count: count + 1,
        });
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn6({ ...btn6, img: image2, style: "active" });
        let d = data;
        d[5] = "O";
        setData(d);
        socket.emit("change_in_move", {
          btn6: { ...btn6, img: image2, style: "active" },
          d,
          opponentId,
          currentMove: "X",
          count: count + 1,
        });
      }
      setCount(count + 1);
    }

    checkWinner();

    // setActive("");
  }
  function button7() {
    if (data[6] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn7({ ...btn7, img: image1, style: "active" });
        let d = data;
        d[6] = "X";
        setData(d);
        socket.emit("change_in_move", {
          btn7: { ...btn7, img: image1, style: "active" },
          d,
          opponentId,
          currentMove: "O",
          count: count + 1,
        });
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn7({ ...btn7, img: image2, style: "active" });
        let d = data;
        d[6] = "O";
        setData(d);
        socket.emit("change_in_move", {
          btn1: { ...btn7, img: image2, style: "active" },
          d,
          opponentId,
          currentMove: "X",
          count: count + 1,
        });
      }
      setCount(count + 1);
    }

    checkWinner();

    // setActive("");
  }
  function button8() {
    if (data[7] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn8({ ...btn8, img: image1, style: "active" });
        let d = data;
        d[7] = "X";
        setData(d);
        socket.emit("change_in_move", {
          btn8: { ...btn8, img: image1, style: "active" },
          d,
          opponentId,
          currentMove: "O",
          count: count + 1,
        });
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn8({ ...btn8, img: image2, style: "active" });
        let d = data;
        d[7] = "O";
        setData(d);
        socket.emit("change_in_move", {
          btn8: { ...btn8, img: image2, style: "active" },
          d,
          opponentId,
          currentMove: "X",
          count: count + 1,
        });
      }
      setCount(count + 1);
    }

    checkWinner();

    // setActive("");
  }
  function button9() {
    if (data[8] === "") {
      if (count % 2 === 0 && startsWith === "X" && currentMove === "X") {
        setBtn9({ ...btn9, img: image1, style: "active" });
        let d = data;
        d[8] = "X";
        setData(d);
        socket.emit("change_in_move", {
          btn9: { ...btn9, img: image1, style: "active" },
          d,
          opponentId,
          currentMove: "O",
          count: count + 1,
        });
      } else if (startsWith === "O" && currentMove === "O") {
        setBtn9({ ...btn9, img: image2, style: "active" });
        let d = data;
        d[8] = "O";
        setData(d);
        socket.emit("change_in_move", {
          btn9: { ...btn9, img: image2, style: "active" },
          d,
          opponentId,
          currentMove: "X",
          count: count + 1,
        });
      }
      setCount(count + 1);
    }
    checkWinner();

    // setActive("");
  }
  const checkWinner = () => {
    if (data[0] === "X" && data[1] === "X" && data[2] === "X") {
      setDisplay("playeronewins");

      return true;
    } else if (data[3] === "X" && data[4] === "X" && data[5] === "X") {
      setDisplay("playeronewins");
      return true;
    } else if (data[6] === "X" && data[7] === "X" && data[8] === "X") {
      setDisplay("playeronewins");
      return true;
    } else if (data[0] === "X" && data[3] === "X" && data[6] === "X") {
      setDisplay("playerone wins");
      return true;
    } else if (data[1] === "X" && data[4] === "X" && data[7] === "X") {
      setDisplay("playerone wins");
      return true;
    } else if (data[2] === "X" && data[5] === "X" && data[8] === "X") {
      setDisplay("playerone wins");
      return true;
    } else if (data[0] === "X" && data[4] === "X" && data[8] === "X") {
      setDisplay("playerone wins");
      return true;
    } else if (data[2] === "X" && data[4] === "X" && data[6] === "X") {
      setDisplay("playerone wins");
      return true;
    } else if (data[0] === "O" && data[1] === "O" && data[2] === "O") {
      setDisplay("player two wins");
      return true;
    } else if (data[3] === "O" && data[4] === "O" && data[5] === "O") {
      setDisplay("player two wins");
      return true;
    } else if (data[6] === "O" && data[7] === "O" && data[8] === "O") {
      setDisplay("player two wins");
      return true;
    } else if (data[0] === "O" && data[3] === "O" && data[6] === "O") {
      setDisplay("player two wins wins");
      return true;
    } else if (data[1] === "O" && data[4] === "O" && data[7] === "O") {
      setDisplay("player two wins");
      return true;
    } else if (data[2] === "O" && data[5] === "O" && data[8] === "O") {
      setDisplay("player two wins");
      return true;
    } else if (data[0] === "O" && data[4] === "O" && data[8] === "O") {
      setDisplay("player two wins");
      return true;
    } else if (data[2] === "O" && data[4] === "O" && data[6] === "O") {
      setDisplay("player two wins");
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
      setDisplay("Draw");
    }
  };
  // const [active,setActive]=useState('inactive')
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
  const [display, setDisplay] = useState("");

  return (
    <div>
      {console.log(opponentName)}
      {console.log(startsWith)}
      {/* {console.log(socket)} */}
      {waiting ? (
        <p className="text-center mt-5 fs-1 text-primary ">
          waiting for other player to join...
        </p>
      ) : (
        <div>
          <h1 className="text-center">{display}</h1>
          <div className="player-box">
            {console.log(data)}
            {/* <img src={image} alt="" /> */}
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
