const initialstate = {
    list: [
        // {
        //     id: 2,
        //     FirstName: "abc",
        //     LastName: "xyz",
        //     Email: "abc@gmail.com",
        //     Password: "4325354354325"
        // },
        // {
        //     id: 3,
        //     FirstName: "xyz",
        //     LastName: "abc",
        //     Email: "xyz@gmail.com",
        //     Password: "12345678"
        // }
    ]

}


export const DataReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD_DATA":
            {
                return {
                    ...state,
                    list: [action.payload, ...state.list],
                };

            }
        case "DELETE_DATA":
            {
                return {
                    ...state,
                    list: state.list.filter(
                        (details) => details.id !== action.payload
                    ),
                };

            }
        case "GET_DATA": {
            let arr = state.list.filter(
                (details) => details.id === action.payload
            );

            arr = arr.values();

            for (let val of arr) {
                arr = val;
            }

            return {
                ...state,
                details: arr,
            };


        }

        case "UPDATE_DATA": {
            console.log(action.payload);
            console.log("data", state.list);
            return {
                ...state,
                list: state.list.map((details) =>
                    details.id === action.payload.id ? action.payload : details
                ),
            };
        }
        default:
            return state;


    }
}