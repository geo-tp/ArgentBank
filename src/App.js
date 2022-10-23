import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { MainNav } from "./components/MainNav";
import { HomePage } from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "react-query";
import { SigninPage } from "./pages/SigninPage";
import { UserPage } from "./pages/UserPage";
import { Provider } from "react-redux";
import store from "./store/index";
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <MainNav />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={<SigninPage />} />
              <Route path="/user" element={<UserPage />} />
            </Routes>
          </QueryClientProvider>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
