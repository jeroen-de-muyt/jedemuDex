import React from "react"
import PageHeader from "./page-layout-parts/page-header.component";
import PageFooter from "./page-layout-parts/page-footer.component";
import LoremIpsum from "./lorem-ipsum.component";

export default class PageLayout extends React.Component {
    render() {
        return (<div className="wrapper">
            <PageHeader/>
            <div className="content-wrapper">
                <div className="sidebar">
                    SIDEBAR
                </div>
                <div className="content">
                    <LoremIpsum/>
                </div>
            </div>
            <PageFooter/>
        </div>)
    }
}