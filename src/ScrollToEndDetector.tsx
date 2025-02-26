import { ReactElement, createElement, useEffect, useRef, useState, Fragment } from "react";

import { ScrollToEndDetectorContainerProps } from "../typings/ScrollToEndDetectorProps";
import callMxAction from "./utils/CallMxAction";
import { useIsVisible } from "./utils/useIsVisible";
import { DebugLog } from "./utils/Logger";

import "./ui/ScrollToEndDetector.css";

export function ScrollToEndDetector(props: ScrollToEndDetectorContainerProps): ReactElement {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref);
    const [hasIntoRan, setHasIntoRan] = useState(false);
    const [hasOutOfRan, setHasOutOfRan] = useState(false);

    useEffect(() => {
        setTimeout(
            () => {
                if (isVisible && (!hasIntoRan || props.allowReRun.value === true)) {
                    DebugLog(props.debugMode, "ELEMENT IS IN VIEW");
                    if (props.booleanToSet) {
                        DebugLog(props.debugMode, "SET BOOLEAN TRIGGERED");
                        props.booleanToSet.setValue(true);
                        setHasIntoRan(true);
                    }
                    if (props.scrolledIntoViewAction) {
                        callMxAction(props.scrolledIntoViewAction, true);
                        DebugLog(props.debugMode, "INTO VIEW ACTION TRIGGERED");
                        setHasIntoRan(true);
                    }
                } else if (props.scrolledOutOfViewAction && (!hasOutOfRan || props.allowReRun.value === true)) {
                    callMxAction(props.scrolledOutOfViewAction, true);
                    DebugLog(props.debugMode, "OUT OF VIEW ACTION TRIGGERED");
                    setHasOutOfRan(true);
                }
            },
            props.Delay?.value !== undefined ? Number(props.Delay.value) : 0
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible]);

    return (
        <div ref={ref} id={props.name} className={`scroll-into-view-detector ${props.class}`} style={props.style}>
            {props.debugMode && (
                <span className="debug-mode text-danger">
                    <strong>Scroll Into View Container - DEBUG MODE ACTIVE</strong>
                    <br />
                    {props.booleanToSet !== undefined ||
                        (props.scrolledIntoViewAction !== undefined && (
                            <Fragment>
                                <p>When this container becomes visible, this widget will:</p>
                                <ul>
                                    {props.booleanToSet !== undefined ? <li>Set a boolean</li> : <Fragment />}
                                    {props.scrolledIntoViewAction !== undefined ? (
                                        <li>Call an Action</li>
                                    ) : (
                                        <Fragment />
                                    )}
                                </ul>
                            </Fragment>
                        ))}
                    {props.scrolledOutOfViewAction !== undefined && (
                        <p>When this container moves out of the viewport, this widget will Call an Action</p>
                    )}
                    <p>
                        {`This will occur ${
                            props.allowReRun.value === true
                                ? "every time the widget is brought in view"
                                : "only the first time the widget is brought into view"
                        }`}
                    </p>
                    <br />
                    <strong>TURN OFF DEBUG MODE BEFORE COMMITTING!</strong>
                </span>
            )}
        </div>
    );
}
