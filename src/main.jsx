import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RecoilRoot } from "recoil";
import { Provider } from "./components/ui/provider.jsx";

createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <Provider>
      <App />
    </Provider>
  </RecoilRoot>
);
