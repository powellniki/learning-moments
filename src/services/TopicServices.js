

export const getAllTopics = async () => {
    return fetch('http://localhost:8088/topics').then((res) => res.json())
}