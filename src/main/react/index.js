import "@babel/polyfill";
import ReactDOM from "react-dom";
import PageLayout from "./page-layout.component";

window.appendPageLayout = function (element) {
    return ReactDOM.render(<PageLayout />, element)
};