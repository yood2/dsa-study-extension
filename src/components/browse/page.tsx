async function getData() {
    try {
        const response = await fetch('/data/data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.result || [];
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export default async function BrowsePage() {
    const rows = await getData();

    return (
        <>
            <p>Hello world!</p>
        </>
    );
}
