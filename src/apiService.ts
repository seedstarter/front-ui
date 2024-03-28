export async function postToNest(formData: any) {
    async function fetchFile(url: string) {
        return fetch(url, { method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)})
            .then((res) => {
                return res.json()
            })
            .catch((error) => {
                // Handle any errors that may occur during the fetch or processing
                return error;
            });
    }

    try {
        return await fetchFile("http://localhost:8082/users").then((data) => {
            console.log('data:', data);
            return data;
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(`Download error: ${error.message}`);
        }
    }
}