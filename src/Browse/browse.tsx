import { Note, columns } from './columns';
import { DataTable } from './data-table';

// async function getData(): Promise<Note[]> {
//     // Fetch data from your API here.
//     return [
//         {
//             title: 'Two Sum',
//             number: '1',
//             difficulty: 'Easy',
//             progress: 'Complete',
//             tags: ['Array', 'Hash'],
//             link: 'https://leetcode.com/problems/two-sum/description/',
//         },
//         {
//             title: 'Add Two Numbers',
//             number: '2',
//             difficulty: 'Medium',
//             progress: 'Complete',
//             tags: ['Tree', 'Linked List'],
//             link: 'https://leetcode.com/problems/add-two-numbers/description/',
//         },
//     ];
// }

export default function Browse() {
    // const data = await getData();
    const data: Note[] = [
        {
            title: 'Two Sum',
            number: '1',
            difficulty: 'Easy',
            progress: 'Complete',
            tags: ['Array', 'Hash'],
            link: 'https://leetcode.com/problems/two-sum/description/',
        },
        {
            title: 'Add Two Numbers',
            number: '2',
            difficulty: 'Medium',
            progress: 'Complete',
            tags: ['Tree', 'Linked List'],
            link: 'https://leetcode.com/problems/add-two-numbers/description/',
        },
    ];

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
