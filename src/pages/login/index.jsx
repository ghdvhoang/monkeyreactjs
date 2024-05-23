import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate , NavLink } from "react-router-dom";
import { loginApi } from "@/api/UserService";
import {
  InputAdornment,
  Checkbox,
  TextField,
  Box,
  Typography,
  Link,
  IconButton,
  Button,
  Avatar,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token")
    if(token){
      navigate("/home")
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email/Password is required");
      return;
    }

    let res = await loginApi(email, password);
    if(res && res.data.token)
      {
        localStorage.setItem("token", res.data.token)
        navigate("/home")
      }else{
        if(res && res.status === 400)
          toast.error(res.data.error)
      }
  };

  const EndAdorment = ({ visible, setVisible }) => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={() => setVisible(!visible)}>
          {visible ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    );
  };

  return (
    <Box width="100vw" height="100vh">
      <Box
        width="auto"
        height="auto"
        alignItems={"center"}
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        textAlign={"center"}
        sx={{ transform: "translate(-50%, -50%)" }}
      >
        <Box
          sx={{
            width: "auto",
            height: "160px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(./public/react.svg)`,
          }}
        ></Box>

        <Typography
          fontWeight={"700"}
          lineHeight={"48px"}
          variant="h4"
          pr="10px"
          pl="30px"
          color={"#2EBAC1"}
        >
          Monkey Blogging
        </Typography>
        <form onSubmit={handleLogin}>
          <Box marginTop={"24px"} textAlign={"left"}>
            <Typography
              variant="h4"
              fontSize={"16px"}
              fontWeight={"600"}
              color={"#3C4563"}
            >
              Email address
            </Typography>
            <TextField
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              type="text"
              sx={{
                width: "500px",
                backgroundColor: " white",
                borderRadius: "20px",
                marginTop: "8px",
                "& .css-7ohhq8-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
                ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  padding: "14px 14px",
                },
              }}
            />
          </Box>
          <Box marginTop={"24px"} textAlign={"left"}>
            <Typography
              variant="h4"
              fontSize={"16px"}
              fontWeight={"600"}
              color={"#3C4563"}
            >
              Password
            </Typography>
            <TextField
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              type={visible ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <EndAdorment visible={visible} setVisible={setVisible} />
                ),
              }}
              sx={{
                width: "500px",
                backgroundColor: " white",
                borderRadius: "20px",
                marginTop: "8px",
                "& .css-7ohhq8-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
                ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  padding: "14px 14px",
                },
              }}
            />
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            width={"80%"}
            margin={"8px 0 8px 10%"}
          >
            <Button
              variant="contained"
              color="info"
              type="submit"
              sx={{
                margin: "12px 0",
                width: "200px",
                lineHeight: "40px",
                background: "linear-gradient(to right, #00A7B4, #A4D96C)",
              }}
            >
              Sign In
            </Button>
          </Box>

          <Link
            href={"/"}
            sx={{
              textDecoration: "none",
            }}
          >
            <Typography
              fontSize={"16px"}
              fontWeight={"500"}
              color={"#263238CC"}
            >
              You forgot your password ?
            </Typography>
          </Link>

          <Box margin={"16px 0"}>
            <Box
              margin={"0 auto"}
              width={"100%"}
              border={"1px solid #ccc"}
            ></Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            marginBottom={"16px"}
          >
            <Avatar alt="apple" src="./public/apple.svg" />
            <Avatar
              sx={{
                margin: "0 20px",
              }}
              alt="google"
              src="./public/google.svg"
            />
            <Avatar alt="facebook" src="./public/facebook.svg" />
          </Box>
          <Box>
            <NavLink
              to ="/register"
              style={{
                textDecoration: 'none',
              }}
            >
              <Typography
                fontSize={"16px"}
                fontWeight={"500"}
                color={"#263238CC"}
              >
                You haven't a account? Sign Up Now !
              </Typography>
            </NavLink>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
