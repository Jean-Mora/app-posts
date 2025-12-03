import { useFetch } from "./useFetch";


export const usePostDetail = (id) => {
const { data, loading, error } = useFetch(
`https://jsonplaceholder.typicode.com/posts/${id}`
);


return {
post: data,
loading,
error,
};
};