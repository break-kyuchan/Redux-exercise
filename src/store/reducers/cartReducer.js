const cartReducer =(state = INITIAL_STATE, action)=>{
    switch(action.type){
        case "ADD_ITEM" :
            return [...state, action.payload]
        case "DELETE_ITEM" :
            return [...action.payload]
        default : return state
    }
}

export default cartReducer;

const INITIAL_STATE = [
    {
        isChecked : true,
        product_name : "플루크 new 퍼그먼트 오버핏 반팔 티셔츠",
        product_id : 1304,
        product_img : "/images/tShirt.jpg",
        price: 33250,
    }
]