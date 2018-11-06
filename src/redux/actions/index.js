
import {
    HIDE_ON_MOBILE_ONLY,
    HIDE_ELEMENT,
    SHOW_ELEMENT,
} from './../../common/constants'



export function showProductDetailsPage(productIndex){
    return {type:SHOW_ELEMENT,productIndex}
}

export function hideProductDetailsPage(){
    return {type:HIDE_ELEMENT}
}