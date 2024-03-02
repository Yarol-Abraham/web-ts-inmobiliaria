"use client"

import { Grid } from 'gridjs-react';

export default function TableData()
{
    return (
       <div>
         <Grid
            data={[
                { name: 'John', email: 'john@example.com' },
                { name: 'Mark', email: 'mark@gmail.com' },
                { name: 'Eoin', email: 'eo3n@yahoo.com' },
                { name: 'Nisen', email: 'nis900@gmail.com' }
            ]}
            columns={['Name', 'Email']}
            search={true}
            pagination={{
                limit: 5,
            }}
            className= {{
                search: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
                tr: 'odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 hover:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700',
                th: 'px-6 py-3',
                td: 'px-6 py-4',
                table: 'w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400', 
                thead: 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'
            }
              }
        />
       </div>
    );
}