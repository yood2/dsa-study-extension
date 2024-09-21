import React, { useState, useEffect } from 'react';
import { Note, columns } from './columns';
import { DataTable } from './data-table';

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

export default function Browse() {
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
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
