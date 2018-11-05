export const _PRODUCTS = [
 {name:'Ps2',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqNcpRatq_okjq9KzceRWqf-ypiOMiPDNe6ojlxR4Z0NeNh1L'},
 {name:'Cam Coder',image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QjqSh-DaK54pmqxXi84XcU1V9I_qcJBq9G0BnJnWxYyqbRmH2g'},
 {name:'N2 Head Phone',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsU6C67UWnjgcpuuZqeYCnAdsOqQ5roTYW2IgyMqgeX6zjAI02Q'},
 {name:'Hand Google VR',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMqsmo3FELmA-BcsxVYU_7yqmTv6kArmh3au9r0fE9qjXmMK2GQ'},
 {name:'Samsung Next G Phone',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5292Yrw1t_RG143UFYm1BC6xOX1yew8xzLnMhAJt49pQm8sk'},
 {name:'Trasnparent Ipone iTab',image:'https://i.pinimg.com/236x/7f/e8/12/7fe812e34ce42d4dcc2adba7c3bc5957--technology-gadgets-tech-gadgets.jpg'},
 {name:'Tech Wrist Phone',image:'https://i.pinimg.com/236x/7d/03/23/7d03230ce924fdfb6ab402bda94c192c--geek-gadgets-cool-gadgets.jpg'},
 {name:'Siri The Virtual false Companion',image:'https://techviral.net/wp-content/uploads/2016/12/Top-5-Future-Super-Robotic-Gadgets4.jpg'},
 {name:'Shelter Zambezill ibook',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vEjh1thqtuacxm_4lGxUdFgrfInndDM8Btzuc7rrbiHj6oSk'},
 {name:'own Pulse Digital Thumb',image:'http://1.bp.blogspot.com/-z-lQ2i3T6CE/UaHlblaJQ6I/AAAAAAAAAFI/ZFk-HbRsD3M/s1600/predict-future-gadgets-is-it-possible.jpg'},
 {name:'Iphone key detector',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHd7HwFSOYHpWipkXn3jSYkiGQtFs02QIs3ovyRJCroF_S-viniw'},
 {name:'Ifiniter Zambezii Memory Thumb disk',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNwNQUEnXIfNv2yyM1ug59r9E2g1s0z7GDKOCUi_epaoYPa6csg'},
    
]


export function getProduct(index=0){

    const length = _PRODUCTS.length;

    return _PRODUCTS[validateIndex(index,length)]

}


function validateIndex(index,length){

    if(index >= 0 && index <= length){
        return index
    }else{
        return 0; //return first object from the list if index is invalid.
    }

}