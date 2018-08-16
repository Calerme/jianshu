import {
    CHANGE_FOCUSED_TRUE,
    CHANGE_FOCUSED_FALSE
} from './actionTypes'

export const changeFocused = (focused) => {
    if (focused) {
        return {
            type: CHANGE_FOCUSED_TRUE,
            value: true
        }
    } else {
        return {
            type: CHANGE_FOCUSED_FALSE,
            value: false
        }
    }
}