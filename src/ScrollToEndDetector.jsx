import { Component, createElement } from "react";
import ScrollToEndDetectorWidget from "./components/ScrollToEndDetectorWidget";
import "./ui/ScrollToEndDetector.css";

export class ScrollToEndDetector extends Component {
    constructor(props) {
        super(props);
        //prevent re-run
        this.state = { actionCompleted: false };
    }
    render() {
        if (
            (this.props.setBoolean && this.props.booleanToSet.status === "available") ||
            (this.props.scrolledIntoViewAction && this.props.scrolledIntoViewAction.canExecute)
        ) {
            return (
                <ScrollToEndDetectorWidget
                    debugMode={this.props.debugMode}
                    scrollDetectorClass={this.props.scrollDetectorClass}
                    scrollDetected={() => {
                        if (this.props.debugMode) {
                            console.log("SCROLL DETECTED TRIGGERED");
                        }
                        try {
                            if (this.state.actionCompleted === false) {
                                if (this.props.setBoolean && this.props.booleanToSet) {
                                    if (this.props.debugMode) {
                                        console.log("SET BOOLEAN TRIGGERED");
                                    }
                                    //Update the attribute
                                    this.props.booleanToSet.setValue(true);
                                    //update state to prevent re-run
                                    this.setState({ actionCompleted: true });
                                } else if (
                                    this.props.setBoolean === false &&
                                    this.props.scrolledIntoViewAction &&
                                    this.props.scrolledIntoViewAction.canExecute
                                ) {
                                    if (this.props.debugMode) {
                                        console.log("SCROLLED INTO VIEW ACTION TRIGGERED");
                                    }
                                    //execute the mendix action
                                    this.props.scrolledIntoViewAction.execute();
                                    //update state to prevent re-run
                                    this.setState({ actionCompleted: true });
                                } else {
                                    if (this.props.debugMode) {
                                        console.error(
                                            "ScrollToEndDetector could not execute action. Is it defined? Does the user have permission?"
                                        );
                                    }
                                }
                            }
                        } catch (e) {
                            console.error(e);
                        }
                    }}
                />
            );
        } else {
            return null;
        }
    }
}
