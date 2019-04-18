import React from "react"

export default class PageFooter extends React.Component {
    render() {
        return (<footer>
            <div className="footer-padding"></div>
            <div className="footer-content">
                <div className="copyright">&copy; jedemu 2019</div>
                <div className="contact">
                    <h4>Contact me</h4>
                    <a href="https://twitter.com/jedemu115"><i className="fa fa-twitter"></i>@jedemu115</a>
                </div>
            </div>
            <div className="footer-padding"></div>
        </footer>)
    }
}