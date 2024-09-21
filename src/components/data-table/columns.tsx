'use client';

import { ColumnDef } from '@tanstack/react-table';

export type Note = {
    title: string;
    number: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    progress: 'Complete' | 'Incomplete';
    tags: string[];
    link: string;
};

export const columns: ColumnDef<Note>[] = [
    {
        accessorKey: 'number',
        header: 'Number',
    },
    {
        accessorKey: 'title',
        header: 'Title',
    },
    {
        accessorKey: 'difficulty',
        header: 'Difficulty',
    },
    {
        accessorKey: 'progress',
        header: 'Progress',
    },
    {
        accessorKey: 'tags',
        header: 'Tags',
    },
];
