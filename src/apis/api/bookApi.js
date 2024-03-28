import instance from "../utils/instance"

export const registerBook = async (data) =>{
    return await instance.post("/admin/book", data)
}

export const searchBooksRequest = async (params) => {
    return await instance.get("/admin/books", {params})
}

export const getBookCountRequest = async (params) => {
    return await instance.get("/admin/books/count", {params})
}

export const deleteBooksRequest = async (data) => {
    return await instance.delete("/admin/books", {data});
}

export const updateBookRequest = async (data) => {
    return await instance.put(`/admin/book/${data.bookId}`, data);
}

/* 
* Post요청 post(주소, 데이터(객체 -> JSON), {option( headers: {} 같은게 들어옴 )})
post(주소, 데이터(객체 -> JSON), 
    {
        headers: {

        }
    }) 형태로 들어옴
* Get요청 get(주소, {option(headers:{}, params:{} 같은게 들어옴)})
*get(주소, 
    {
        headers:{}, 
        params:{
            key: value
        }
    }) 형태로 들어옴

* Delete 요청
* delete(주소, {
    headers: {
    },
    data:{
        key: value
    }

})
*/