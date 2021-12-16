const initialState = {
    language: "react",
    explain: "make web library",
};

export const languageAction = (data) => {
    return {
        type: "LANGUAGE",
        data: data,
    };
};

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LANGUAGE": {
            return {
                ...state,
                language: action.data.language,
                explain: action.data.explain,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default languageReducer;
