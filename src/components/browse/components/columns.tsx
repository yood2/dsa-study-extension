'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { DataTableColumnHeader } from './data-table-column-header';

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
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Number" />
        ),
    },
    {
        accessorKey: 'title',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Title" />
        ),
    },
    {
        accessorKey: 'difficulty',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Difficulty" />
        ),
    },
    {
        accessorKey: 'progress',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Progress" />
        ),
    },
    {
        accessorKey: 'tags',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Tags" />
        ),
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const note = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(note.link)
                            }
                        >
                            Copy link
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
