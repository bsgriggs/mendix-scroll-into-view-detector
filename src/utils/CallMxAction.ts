import { ActionValue } from "mendix";

const callMxAction = (action: ActionValue | undefined, preventConcurrent: boolean): void => {
    if (action !== undefined && action.canExecute && (!preventConcurrent || !action.isExecuting)) {
        action.execute();
    }
};

export default callMxAction;
