/**
 * This file was generated from ScrollToEndDetector.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export type ModeEnum = "setBoolean" | "runAction";

export interface ScrollToEndDetectorContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    debugMode: boolean;
    allowReRun: boolean;
    mode: ModeEnum;
    booleanToSet?: EditableValue<boolean>;
    scrolledIntoViewAction?: ActionValue;
}

export interface ScrollToEndDetectorPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    debugMode: boolean;
    allowReRun: boolean;
    mode: ModeEnum;
    booleanToSet: string;
    scrolledIntoViewAction: {} | null;
}
