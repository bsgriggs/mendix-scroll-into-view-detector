import { ReactElement, createElement, useRef, useEffect, useState } from "react";

import { ScrollToEndDetectorContainerProps } from "../typings/ScrollToEndDetectorProps";
import { useIsVisible } from "./components/useIsVisible";

import "./ui/ScrollToEndDetector.css";

export function ScrollToEndDetector({
    allowReRun,
    class: classname,
    debugMode,
    name,
    mode,
    booleanToSet,
    scrolledIntoViewAction,
    style
}: ScrollToEndDetectorContainerProps): ReactElement {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref);
    const [hasRan, setHasRan] = useState(false);

    useEffect(() => {
        if (isVisible && (!hasRan || allowReRun)) {
            if (debugMode) {
                console.info("ELEMENT IS IN VIEW");
            }
            if (mode === "setBoolean" && booleanToSet) {
                if (debugMode) {
                    console.info("SET BOOLEAN TRIGGERED");
                }
                booleanToSet.setValue(true);
                setHasRan(true);
            } else if (mode === "runAction" && scrolledIntoViewAction && scrolledIntoViewAction.canExecute) {
                if (debugMode) {
                    console.info("SCROLLED INTO VIEW ACTION TRIGGERED");
                }
                scrolledIntoViewAction.execute();
                setHasRan(true);
            } else {
                if (debugMode) {
                    console.error(
                        "ScrollToEndDetector could not execute action. Is it defined? Does the user have permission?"
                    );
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible]);

    return (
        <div ref={ref} id={name} className={"scroll-into-view-detector " + classname} style={style}>
            {debugMode && (
                <span className="debug-mode text-danger">
                    <strong>Scroll Into View Container - DEBUG MODE ACTIVE</strong>
                    <br />
                    <p>When this container becomes visible, this widget will {mode === "setBoolean"? "set a boolean ": "call an action"}.</p>
                    <p>This will occur {allowReRun ? "every time the widget is brought in view": "only the first time the widget is brought into view"}.</p>
                    <br />
                    <strong>TURN OFF DEBUG MODE BEFORE COMMITTING!</strong>
                </span>
            )}
        </div>
    );
}
