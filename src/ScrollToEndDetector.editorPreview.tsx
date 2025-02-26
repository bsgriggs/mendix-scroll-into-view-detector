import { ReactElement, createElement, Fragment } from "react";
import { ScrollToEndDetectorPreviewProps } from "../typings/ScrollToEndDetectorProps";

export function preview(props: ScrollToEndDetectorPreviewProps): ReactElement {
    return (
        <div className={`scroll-into-view-detector ${props.class}`} style={props.styleObject}>
            <span className="debug-mode text-danger">
                {props.debugMode && (
                    <Fragment>
                        <strong>Scroll Into View Container - DEBUG MODE ACTIVE</strong>
                        <br />
                    </Fragment>
                )}

                {props.booleanToSet !== undefined ||
                    (props.scrolledOutOfViewAction !== undefined && (
                        <Fragment>
                            <p>When this container becomes visible, this widget will:</p>
                            <ul>
                                {props.booleanToSet !== undefined ? <li>Set a boolean</li> : <Fragment />}
                                {props.scrolledIntoViewAction !== undefined ? <li>Call an Action</li> : <Fragment />}
                            </ul>
                        </Fragment>
                    ))}
                {props.scrolledOutOfViewAction !== undefined && (
                    <p>When this container moves out of the viewport, this widget will Call an Action</p>
                )}
                <p>{`This will occur based on '${props.allowReRun}'`}</p>
                {props.debugMode && (
                    <Fragment>
                        <br />
                        <strong>TURN OFF DEBUG MODE BEFORE COMMITTING!</strong>
                    </Fragment>
                )}
            </span>
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/ScrollToEndDetector.css");
}
