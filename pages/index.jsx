import GlobalStyles from "@mui/material/GlobalStyles";
import MyAppBar from "./appbar";
import LoginCard from "./loginCard";

export default function HomePage() {
  return (
    <>
      <GlobalStyles
        styles={(theme) => ({
          body: {
            backgroundColor: "#F4F2EA",
            backgroundImage: "url(assets/background.png)",
            backgroundRepeat: " no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          },
        })}
      />
      <MyAppBar />
      <LoginCard />
    </>
  );
}
