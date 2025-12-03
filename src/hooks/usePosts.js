import { useFetch } from "./useFetch";


export const usePosts = () => {
const { data, loading, error } = useFetch(
"https://jsonplaceholder.typicode.com/posts"
);


return {
posts: data,
loading,
error,
};
};