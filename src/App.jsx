import { useState } from "react";
import { Button, Box, Typography, Modal } from "@mui/material";
import "./App.css";

function App() {

  const [start, setStart] = useState(true);

  const [modalbox, setmodalbox] = useState(false);

  const [user, setUser] = useState("");

  const [computer, setComputer] = useState("");

  const [result, setResult] = useState("");

  const options = ["stone", "paper", "scissor"];

  const images = {

    stone: "./img/stone.png",

    paper: "./img/paper.png",

    scissor: "./img/sisscor.png",
  };

  const randomoptions = () =>
    options[Math.floor(Math.random() * 3)];

  function winner(human, ai) {

    if (human === ai) {

      setResult("Draw");
    }

    else if (

      (human === "stone" && ai === "scissor")

      ||

      (human === "paper" && ai === "stone")

      ||

      (human === "scissor" && ai === "paper")

    ) {

      setResult("You Win");
    }

    else {

      setResult("Computer Wins");
    }
  }

  const play = (choice) => {

    const comp = randomoptions();

    setUser(choice);

    setComputer(comp);

    winner(choice, comp);

    setmodalbox(true);
  };

  return (
    <>

      {!start ? (

        <Box
          sx={{

            minHeight: "100vh",

            backgroundImage:
              'url("./img/rps4.png")',

            backgroundRepeat: "no-repeat",

            backgroundSize: {
              xs: "100% auto",
              sm: "cover",
            },

            backgroundPosition: "center",

            width: "100%",

            display: "flex",

            justifyContent: "center",

            alignItems: "center",
          }}
        >

          {/* GAME BUTTONS */}

          <Box
            sx={{

              display: "flex",

              justifyContent: "center",

              alignItems: "center",

              gap: {
                xs: "1rem",
                sm: "4rem",
                md: "12rem",
              },

              width: "100%",
            }}
          >

            {/* STONE */}

            <Button
              onClick={() => play("stone")}

              sx={{

                "&:hover": {

                  background: "transparent",

                  transform: "scale(1.1)",
                }
              }}
            >

              <Box
                component="img"

                src={images.stone}

                sx={{

                  width: {
                    xs: "5rem",
                    sm: "8rem",
                    md: "15rem",
                  },

                  borderRadius: "50%",
                }}
              />

            </Button>

            {/* PAPER */}

            <Button
              onClick={() => play("paper")}

              sx={{

                "&:hover": {

                  transform: "scale(1.1)",
                }
              }}
            >

              <Box
                component="img"

                src={images.paper}

                sx={{

                  width: {
                    xs: "5rem",
                    sm: "8rem",
                    md: "15rem",
                  },

                  borderRadius: "50%",

                  background: "black",
                }}
              />

            </Button>

            {/* SCISSOR */}

            <Button
              onClick={() => play("scissor")}

              sx={{

                "&:hover": {

                  transform: "scale(1.1)",
                }
              }}
            >

              <Box
                component="img"

                src={images.scissor}

                sx={{

                  width: {
                    xs: "5rem",
                    sm: "8rem",
                    md: "15rem",
                  },

                  borderRadius: "50%",
                }}
              />

            </Button>

          </Box>

          {/* MODAL */}

          <Modal
            open={modalbox}

            onClose={() => setmodalbox(false)}
          >

            <Box
              sx={{

                display: "flex",

                flexDirection: "column",

                justifyContent: "center",

                alignItems: "center",

                background:
                  "linear-gradient(to right, #000000, #060606)",

                minHeight: {
                  xs: "24rem",
                  md: "31.5rem",
                },

                width: {
                  xs: "90%",
                  sm: "28rem",
                },

                margin: "auto",

                marginTop: {
                  xs: "20%",
                  md: "11%",
                },

                borderRadius: "30px",

                textAlign: "center",

                padding: "1rem",
              }}
            >

              {/* YOU */}

              <Typography
                variant="h4"

                sx={{

                  color: "red",

                  fontWeight: "bolder",

                  fontSize: {
                    xs: "1.5rem",
                    md: "2rem",
                  }
                }}
              >
                You
              </Typography>

              {user && (

                <Box
                  component="img"

                  src={images[user]}

                  sx={{

                    width: {
                      xs: "90px",
                      sm: "130px",
                      md: "185px",
                    },

                    height: {
                      xs: "90px",
                      sm: "130px",
                      md: "185px",
                    },
                  }}
                />
              )}

              {/* COMPUTER */}

              <Typography
                variant="h4"

                sx={{

                  color: "blue",

                  fontWeight: "bolder",

                  fontSize: {
                    xs: "1.5rem",
                    md: "2rem",
                  }
                }}
              >
                Computer
              </Typography>

              {computer && (

                <Box
                  component="img"

                  src={images[computer]}

                  sx={{

                    width: {
                      xs: "90px",
                      sm: "130px",
                      md: "185px",
                    },

                    height: {
                      xs: "90px",
                      sm: "130px",
                      md: "185px",
                    },
                  }}
                />
              )}

              {/* RESULT */}

              <Typography
                variant="h4"

                sx={{

                  color: "green",

                  fontWeight: "bolder",

                  fontSize: {
                    xs: "1.5rem",
                    md: "2rem",
                  }
                }}
              >
                {result}
              </Typography>

              {/* OK BUTTON */}

              <Button
                variant="contained"

                sx={{

                  background:
                    "linear-gradient(to right, #800202, #3c0303)",

                  fontSize: {
                    xs: "1rem",
                    md: "1.5rem",
                  },

                  width: {
                    xs: "7rem",
                    md: "9rem",
                  },

                  borderRadius: "10px",

                  fontWeight: "bolder",

                  marginTop: "1rem",

                  "&:hover": {

                    background:
                      "linear-gradient(to right, #ce0d0d, #5c0404)",

                    transform: "scale(1.05)",

                    transition: "0.3s",
                  }
                }}

                onClick={() => setmodalbox(false)}
              >
                OK
              </Button>

            </Box>

          </Modal>

        </Box>

      ) : (

        <Box
          sx={{

            backgroundImage:
              'url("./img/rps.png")',

            backgroundRepeat: "no-repeat",

            backgroundSize: {
              xs: "100% auto",
              sm: "cover",
            },

            backgroundPosition: "center",

            minHeight: "100vh",

            display: "flex",

            justifyContent: "center",

            alignItems: "center",
          }}
        >

          <Button
            variant="contained"

            sx={{

              background:
                "linear-gradient(to right, #800202, #3c0303)",

              fontSize: {
                xs: "1rem",
                md: "1.5rem",
              },

              width: {
                xs: "7rem",
                md: "9rem",
              },

              borderRadius: "10px",

              fontWeight: "bolder",

              marginTop: {
                xs: "60%",
                md: "45%",
              },

              "&:hover": {

                background:
                  "linear-gradient(to right, #ce0d0d, #5c0404)",

                transform: "scale(1.05)",

                transition: "0.3s",
              }
            }}

            onClick={() => setStart(false)}
          >
            Play
          </Button>

        </Box>
      )}

    </>
  );
}

export default App;