import { useState } from "react";
import { Button, Box, Typography, Modal } from "@mui/material";
import "./App.css";
function App() {
  const [start,setStart]=useState(true);
  const [modalbox,setmodalbox]=useState(false);
  const [user,setUser]=useState("");
  const [computer,setComputer]=useState("");
  const [result,setResult]=useState("");

  const options=["stone","paper","scissor"];
  const images ={stone:"./img/stone.png",
                 paper:"./img/paper.png",
                 scissor:"./img/sisscor.png"};

  const randomoptions=()=>options[Math.floor(Math.random()*3)];

    function winner(human,ai)
    {
        if (human===ai) 
        {
          setResult("Draw");
        }
        else if((human==="stone" && ai==="scissor")||(human==="paper" && ai==="stone")||(human==="scissor" && ai==="paper")) 
        {
          setResult("You Win");
        }
        else
        {
          setResult("Computer Wins");
        }
    }
    const play=(choice)=>{
    const comp=randomoptions();
    setUser(choice);
    setComputer(comp);
    winner(choice, comp);
    setmodalbox(true);
  };

  return (
    <>
      {!start ?(
        <Box
          sx={{
            height:"51rem",
            backgroundImage:'url("./img/rps4.png")',
            backgroundRepeat:"no-repeat",
            backgroundSize: "cover",    
            backgroundPosition: "center",
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
          }}
        >
        <Box sx={{display:"flex",gap:"15rem"}}>
            <Button onClick={()=>play("stone")} sx={{
             
                "&:hover": {  background: "transparent",transform:"scale(1.1)" }
              }}
            >
              <img src={images.stone} style={{width:"15rem", borderRadius:"50%",}} />
            </Button>

            <Button onClick={()=>play("paper")} sx={{
                "&:hover": { transform: "scale(1.1)" }
              }}
            >
              <img src={images.paper}style={{width:"15rem",borderRadius:"50%",background:"black",}} />
            </Button>

            <Button
              onClick={()=>play("scissor")}
              sx={{
                "&:hover": { transform: "scale(1.1)" }
              }}
            >
              <img src={images.scissor}style={{width:"15rem",borderRadius:"50%"}} />
            </Button>

          </Box>

          <Modal open={modalbox} onClose={()=>setmodalbox(false)}>
            <Box sx={{
                display:"flex",
                flexDirection: "column",
                justifyContent:"center",
                alignItems: "center",
                background: "linear-gradient(to right, #000000, #060606)",
                height:"31.5rem",
                width:"28rem",
                margin:"auto",
                marginTop:"11%",
                borderRadius: "30px",
                textAlign: "center",
                padding:"1rem",
                
              }}
            >
              <Typography variant="h4" sx={{color:"red",fontWeight:"bolder"}}>You</Typography>
              {user && (
                <img src={images[user]} style={{width: "185px",height: "185px"}}/>
              )}

              <Typography variant="h4" sx={{color:"blue",fontWeight:"bolder"}}>Computer</Typography>
               {computer && (
                <img src={images[computer]} style={{width: "185px",height: "185px"}}/>
              )}

              <Typography variant="h4" sx={{color:"green",fontWeight:"bolder"}}>{result}</Typography>

              <Button variant="contained" sx={{
            background:"linear-gradient(to right, #800202, #3c0303)",
            fontSize:"1.5rem",width:"9rem",borderRadius:"10px",fontWeight:"bolder", "&:hover": {
            background: "linear-gradient(to right, #ce0d0d, #5c0404)", 
            transform: "scale(1.05)",
            transition: "0.3s" }}} onClick={()=>setmodalbox(false)}>OK</Button>
            </Box>
          </Modal>
        </Box>
      ) : (
        <Box
          sx={{
            
            backgroundImage:'url("./img/rps.png")',
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            minHeight:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
          }}
        >
          <Button variant="contained" sx={{
            background:"linear-gradient(to right, #800202, #3c0303)",
            fontSize:"1.5rem",width:"9rem",borderRadius:"10px",fontWeight:"bolder",marginTop:"45%", 
            "&:hover": {
            background: "linear-gradient(to right, #ce0d0d, #5c0404)", 
            transform: "scale(1.05)",
           transition: "0.3s" }}}onClick={() => setStart(false)}>Play</Button>
        </Box>
      )}
    </>
  );
}

export default App;
