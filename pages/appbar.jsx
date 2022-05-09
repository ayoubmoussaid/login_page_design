import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ArrowRightAlt, Language } from "@mui/icons-material";

export default function MyAppBar() {
  return (
    <Grid
      container
      position="static"
      sx={{
        height: 100,
        backgroundColor: "transparent",
        padding: "20px 40px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid item>
        <Box
          sx={{
            backgroundColor: "transparent",
            border: 0,
            borderColor: "transparent",
            width: 150,
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", paddingBottom: "15px" }}
          >
            Razor
          </Typography>
          <Divider />
          <Grid
            container
            sx={{
              paddingTop: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid item>
              <Link
                href="#"
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: 13,
                  color: "#666666",
                  textDecoration: "none",
                }}
              >
                Sales@Razor.uk
              </Link>
            </Grid>
            <Grid item>
              <ArrowRightAlt color="#737373" fontSize="small" />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Language color="#3E270D" fontSize="medium" />
          <Link
            href="#"
            sx={{
              color: "#3E270D",
              fontWeight: "bold",
              fontSize: 14,
              fontFamily: "sans-serif",
              textDecoration: "none",
            }}
          >
            Sign up
          </Link>
          <Button
            variant="contained"
            sx={{
              height: "40px",
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
              Request Demo
            </Typography>
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
