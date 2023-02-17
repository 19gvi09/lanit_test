import TheLayout from "@/components/TheLayout";
import "@/styles/globals.css";
import "@/styles/common.scss";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <TheLayout>
        <Component {...pageProps} />
      </TheLayout>
    </Provider>
  )
}
