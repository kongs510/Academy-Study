import axios from "axios"


const GET_NEWS = "news/GET_NEWS"
const NEWS_SUCCESS = "news/NEWS_SUCCESS"
const NEW_ERROR ="news/NEW_ERROR"

export const getNews = ()=>({type:GET_NEWS})
export const newsSuccess = (users)=>({type:NEWS_SUCCESS,users})
export const newsError = (error)=>({type:NEW_ERROR,error})

//비동기함수
export const getUsers = () => dispatch =>{
    dispatch(getNews())
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        const users = res.data
        dispatch(newsSuccess(users))
    })
    .catch(error=>{
        dispatch(newsError(error.message))
    })
}

const initialState = {
    loading :false,
    users:[],
    error:""
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_NEWS:
            return{
                ...state,
                loading:true
            }
        case NEWS_SUCCESS:
            return{
                ...state,
                loading:true,
                users:action.users,
                error:""
            }
        case NEW_ERROR:
            return{
                ...state,
                loading:true,
                users:[],
                error:action.error
            }
        default:
            return state
    }
}

export default reducer