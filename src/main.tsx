import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import projectStore from "./store.ts";
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={projectStore}>
            <ChakraProvider value={defaultSystem}>
                <ThemeProvider attribute="class" disableTransitionOnChange>
                    <App />
                </ThemeProvider>
            </ChakraProvider>
        </Provider>
    </React.StrictMode>,
)