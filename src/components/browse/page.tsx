import { useState, useEffect } from 'react';
import { Note } from './data/schema';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';

async function getData(): Promise<Note[]> {
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

export default function BrowsePage() {
    const [data, setData] = useState<Note[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData()
            .then((notes) => {
                setData(notes);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            {/* <DataTable columns={columns} data={data} /> */}
            <p>Hello world!</p>
        </>
    );
}
