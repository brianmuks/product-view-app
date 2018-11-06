
import {
    HIDE_ON_MOBILE_ONLY,
    HIDE_ELEMENT,
    SHOW_ELEMENT,
} from './../../common/constants'



export function handleProductDetailsDisplay(state={display:HIDE_ELEMENT},action){

    switch (action.type) {
        case HIDE_ELEMENT:
            console.log('HIDE_ELEMENT')
        return {display:HIDE_ON_MOBILE_ONLY}

            case SHOW_ELEMENT:
            console.log('SHOW_ELEMENT')

        return {display:SHOW_ELEMENT,
                productIndex:action.productIndex}
        default:
       return state;
    }

}