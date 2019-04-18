import "@babel/polyfill";
import ReactDOM from "react-dom";
import PageLayout from "./page-layout.component";
import LoremIpsum from "./lorem-ipsum.component";

window.appendPageLayout = function (element) {
    return ReactDOM.render(<PageLayout><LoremIpsum/></PageLayout>, element)
};