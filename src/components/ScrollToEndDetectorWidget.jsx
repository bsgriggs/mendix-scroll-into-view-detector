import React, { useState, createElement } from "react";
import useScrollDetector from "./useScrollDetector";

const ScrollToEndDetectorWidget = props => {
    const { scrollDetected, debugMode } = props;

    //State to prevent re-run
    const [hasRan, setHasRan] = useState(false);

    const [detector] = useScrollDetector(() => {
        if (debugMode) {
            console.log("USE REF TRIGGERED");
        }
        //trigger the passed function
        scrollDetected();
        //update state to prevent re-run
        setHasRan(true);
    }, hasRan);

    return (
        <div className="widget-scroll-to-end-detector" ref={detector}>
            {debugMode && (
                <span className="debug-mode text-danger">
                    <strong>Scroll Into View Container - DEBUG MODE ACTIVE</strong>
                    <br />
                    When this container becomes visable, the action setup in the widget will be triggered. This can
                    either be setting a boolean on an attribute as true or triggering a Mendix action.
                    <br />
                    <strong>Note:</strong> the current user must have permission to change the attribute or run the
                    action.
                    <br />
                    <strong>TURN OFF DEBUG MODE BEFORE COMMITTING!</strong>
                </span>
            )}
            {debugMode === false && (
                <span className="debug-mode-off">
                </span>
            )}
        </div>
    );
};

export default ScrollToEndDetectorWidget;
