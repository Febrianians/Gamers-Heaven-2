export default async function getData(req, res) {
    try {
        const baseUrl = "https://jsonplaceholder.typicode.com/todos"
        let responseData = await fetch(baseUrl)
        res.status(200).json(responseData)
    } catch (error) {
        console.log(error);
        res.status(500)
    }
    
}