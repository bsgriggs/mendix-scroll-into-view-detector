import { ReactElement, createElement } from "react";
import { ScrollToEndDetectorPreviewProps } from "../typings/ScrollToEndDetectorProps";

export function preview({ class: classname,allowReRun,booleanToSet,debugMode,mode,styleObject }: ScrollToEndDetectorPreviewProps): ReactElement {
    return (
        <div className={"scroll-into-view-detector " + classname} style={styleObject}>
            <span className="debug-mode text-danger">
                <strong>Scroll Into View Container - DEBUG MODE {debugMode ? "ACTIVE" : "INACTIVE"}</strong>
                <br />
                <p>When this container becomes visible, this widget will {mode === "setBoolean"? "set the boolean: " +booleanToSet: "call an action"}.</p>
                <p>This will occur {allowReRun ? "every time the widget is brought in view": "only the first time the widget is brought into view"}.</p>
                {debugMode && (<strong>TURN OFF DEBUG MODE BEFORE COMMITTING!</strong>)}
            </span>
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/ScrollToEndDetector.css");
}
