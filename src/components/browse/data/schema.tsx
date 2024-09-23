import {
    CheckCircledIcon,
    CircleIcon,
    StopwatchIcon,
} from '@radix-ui/react-icons';

export const statuses = [
    {
        value: 'incomplete',
        label: 'Incomplete',
        icon: CircleIcon,
    },
    {
        value: 'completed',
        label: 'Completed',
        icon: CheckCircledIcon,
    },
    {
        value: 'redo',
        label: 'Redo',
        icon: StopwatchIcon,
    },
];

export const difficulties = [
    {
        value: 'easy',
        label: 'Easy',
    },
    {
        value: 'medium',
        label: 'Medium',
    },
    {
        value: 'hard',
        label: 'Hard',
    },
];

export const patterns = [
    {
        value: 'dfs',
        label: 'DFS',
    },
    {
        value: 'dynamic_programming',
        label: 'Dynamic Programming',
    },
    {
        value: 'backt_racking',
        label: 'Backtracking',
    },
    {
        value: 'heap',
        label: 'Heap',
    },
    {
        value: 'array',
        label: 'Array',
    },
    {
        value: 'binary',
        label: 'Binary Search',
    },
    {
        value: 'bfs',
        label: 'BFS',
    },
    {
        value: 'two_pointers',
        label: 'Two Pointers',
    },
    {
        value: 'sliding_window',
        label: 'Sliding Window',
    },
    {
        value: 'fast_slow',
        label: 'Fast & Slow',
    },
    {
        value: 'trie',
        label: 'Trie',
    },
    {
        value: 'greedy',
        label: 'Greedy',
    },
    {
        value: 'graph',
        label: 'Graph',
    },
    {
        value: 'in_place_reversal_ll',
        label: 'In-place Reversal of Linked List',
    },
    {
        value: 'intervals',
        label: 'Intervals',
    },
    {
        value: 'topological_sort',
        label: 'Topological Sort',
    },
    {
        value: 'bit_manipulation',
        label: 'Bit Manipulation',
    },
    {
        value: 'union_find',
        label: 'Union Find',
    },
    {
        value: 'design',
        label: 'Design',
    },
    {
        value: 'sorting',
        label: 'Sorting',
    },
    {
        value: 'quick_select',
        label: 'Quick Select',
    },
    {
        value: 'bucket_sort',
        label: 'Bucket Sort',
    },
];

export type Note = {
    title: string;
    status: 'incomplete' | 'completed' | 'redo';
    difficulty: 'easy' | 'medium' | 'hard';
};
