import { useState } from "react";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Facebook, Google, Apple } from "@mui/icons-material";

function CustomIconButton({ startIcon, title }) {
  return (
    <Button
      variant="outlined"
      startIcon={startIcon}
      sx={{
        textTransform: "none",
        height: "40px",
        width: "30%",
        borderColor: "#b3b2b1",
        borderRadius: "8px",
        "&:hover": {
          borderColor: "#b3b2b1",
          backgroundColor: "#fce6cf",
          color: "#fce6cf",
        },
      }}
    >
      <Typography sx={{ color: "black", fontWeight: "bold", fontSize: "14px" }}>
        {title}
      </Typography>
    </Button>
  );
}

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);

  const CustomTextField = styled(TextField)(() => ({
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "gray",
      },
    },
    "& input": {
      paddingLeft: "30px",
    },
    "& fieldset": {
      borderRadius: "8px",
    },
  }));

  return (
    <Stack
      sx={{
        height: "100%",
        width: "100%",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          maxWidth: "400px",
          margin: "50px 0px 0px 0px",
          padding: "50px",
          backgroundColor: "white",
          borderRadius: "40px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "600", fontSize: "30px" }}>
          Agent Login
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            margin: "20px 40px 40px 40px",
            textAlign: "center",
          }}
        >
          Hey, Enter your login details to get sign in to your account
        </Typography>
        <CustomTextField
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Enter Email / Phone NO"
          margin="dense"
          type="email"
          sx={{
            textTransform: "none",
            input: {
              "&::placeholder": {
                textOverflow: "ellipsis !important",
                fontSize: "14px",
                fontWeight: "bold",
              },
            },
          }}
        ></CustomTextField>
        <CustomTextField
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Passcode"
          margin="dense"
          type="password"
          sx={{
            textTransform: "none",
            input: {
              "&::placeholder": {
                textOverflow: "ellipsis !important",
                fontSize: "14px",
                fontWeight: "bold",
              },
            },
          }}
        ></CustomTextField>
        <Link
          href="#"
          sx={{
            fontSize: 13,
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "#737373",
            width: "100%",
            padding: "15px",
            textDecoration: "none",
          }}
        >
          Having trouble in sign in?
        </Link>
        <Button
          variant="contained"
          sx={{
            height: "40px",
            width: "100%",
            backgroundColor: "#FDC886",
            textTransform: "none",
            margin: "10px 0px 30px 0px",
            boxShadow: "none",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#f5d4ab",
              color: "#f5d4ab",
              boxShadow: "none",
            },
          }}
        >
          <Typography
            sx={{ color: "black", fontSize: "14px", fontWeight: "bold" }}
          >
            Sign in
          </Typography>
        </Button>
        <Typography
          sx={{
            width: "100%",
            textAlign: "center",
            color: "black",
            fontSize: "14px",
            fontWeight: "medium",
            padding: "0px 0px 20px 0px",
          }}
        >
          — Or Sign in with —
        </Typography>
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <CustomIconButton
            startIcon={<Google sx={{ color: "black" }} />}
            title={"Google"}
          />
          <CustomIconButton
            startIcon={<Apple sx={{ color: "black" }} />}
            title={"Apple"}
          />
          <CustomIconButton
            startIcon={<Facebook sx={{ color: "black" }} />}
            title={"Facebook"}
          />
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: "100%", padding: "20px 0px 0px 0px" }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "black",
              fontSize: "14px",
              fontWeight: "medium",
            }}
          >
            Don't have an account?{" "}
          </Typography>
          <Box width={5} />
          <Link
            href="#"
            sx={{
              color: "#737373",
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "none",
              fontFamily: "sans-serif",
            }}
          >
            Request now
          </Link>
        </Stack>
      </Stack>
      <Typography sx={{ padding: "20px 0px 0px 0px" }}>
        Made with ❤ by Moussaid Ayoub
      </Typography>
    </Stack>
  );
}
