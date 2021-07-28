import Layout from "./components/Layout/HomeLayout";
import theme from "./theme/index";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./Pages/Home";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hwl000</h1>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
