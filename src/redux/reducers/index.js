
import {
    TOGGLE_PRODUCT_DETAILS_DISPLAY,
    HIDE_ELEMENT,
    SHOW_ELEMENT,
} from './../../common/constants'



export function handleProductDetailsDisplay(state={display:HIDE_ELEMENT},action){

    switch (action.type) {
        case HIDE_ELEMENT:
            console.log('HIDE_ELEMENT')
        return {display:HIDE_ELEMENT}

            case SHOW_ELEMENT:
            console.log('SHOW_ELEMENT')

        return {display:SHOW_ELEMENT}
        default:
       return state;
    }

}