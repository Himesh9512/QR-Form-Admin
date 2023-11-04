import React, { useState } from 'react';

const AdminPanel = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedDescription, setSelectedDescription] = useState('');
    const handleReadMore = (description) => {
        setSelectedDescription(description);
        setShowModal(true);
    };

    const tableData = [
        {
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '898987879',
            type: 'Suggestion',
            subject: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam architecto nostrum dolores ipsa nesciunt repellat, quos temporibus consequatur asperiores vero fugiat optio aliquid minus, eum nam cum veniam quasi, adipisci rerum officiis hic voluptates reiciendis facilis eveniet! Sed, iure, consequuntur corrupti blanditiis, ullam eaque aliquam explicabo voluptatum modi dicta illum atque dolores ea perferendis accusantium deleniti amet error nisi reiciendis quis porro. Quis animi sapiente et sit debitis mollitia officia! Labore cum consequatur quis veritatis? Suscipit a, eos veniam necessitatibus laboriosam voluptatum nam? Fugit numquam repudiandae dolores expedita. Consequatur, natus nostrum non repellat aperiam placeat beatae. Quas aliquid vero accusamus vitae dignissimos esse voluptas dolor doloribus ducimus nisi, odio praesentium nobis! Corporis asperiores velit quam voluptas quibusdam optio quidem, laborum dolorum aliquam alias nam dolores? Omnis quisquam adipisci soluta voluptatem voluptas, reprehenderit fugit illum quasi in modi aperiam tempore aspernatur culpa quod nesciunt optio! Ipsam nam, molestias veritatis, quas repudiandae numquam temporibus fugiat deleniti alias culpa non inventore quasi ad incidunt ducimus eius quis optio architecto repellat corrupti quos. Vel expedita ipsa vitae, molestias natus, voluptatum praesentium ea laudantium voluptatibus consequuntur minus perspiciatis illo voluptatem libero voluptates eius aliquid sint alias magnam corrupti quibusdam facere veniam quia. Qui voluptatibus commodi quisquam optio, rerum nam nesciunt necessitatibus, sit, animi harum laudantium hic maiores laborum doloremque aliquam nisi! Cum ullam perferendis consequatur nobis deleniti distinctio asperiores sint in quisquam, rem doloremque natus dicta aliquam, accusamus dolores provident laudantium iste vitae nam! Architecto, ut tenetur quis quisquam illum quam quidem nostrum! Soluta saepe voluptate expedita repudiandae, maiores velit hic laboriosam odit quis maxime accusantium sint mollitia atque nisi voluptates. Optio autem ea ducimus et repudiandae aliquid laboriosam ut. Tempora dolores facere ratione assumenda culpa illum iure nostrum error suscipit placeat omnis fugit porro at reiciendis, esse pariatur, quaerat earum magni exercitationem! Aut, minus?',
            date: '20/12/12'
        },
    ];


    return (
        <div className="container mx-auto mt-8 p-8">
            <div>
                <h1 className='text-3xl font-bold text-center'>Admin Pannel</h1>
            </div>
            <div className='mb-10'>
                <h1 className='text-xl font-bold text-red-900'>Hello Sir</h1>
            </div>
            <div className="bg-white relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full  bg-white">
                    <thead className="shadow-lg text-black">
                        <tr>
                            <th className="py-2 px-4">ID</th>
                            <th className="py-2 px-4">Name</th>
                            <th className="py-2 px-4">Email</th>
                            <th className="py-2 px-4">Phone</th>
                            <th className="py-2 px-4">Type</th>
                            <th className="py-2 px-4">Subject</th>
                            <th className="py-2 px-4">Description</th>
                            <th className="py-2 px-4">Date</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map(item => (
                            <tr className="text-center" key={item.id}>
                                <td className="py-2 px-4">{item.id}</td>
                                <td style={{ whiteSpace: 'nowrap' }} className="py-2 px-4">{item.name}</td>
                                <td className="py-2 px-4">{item.email}</td>
                                <td className="py-2 px-4">{item.phone}</td>
                                <td className="py-2 px-4">{item.type}</td>
                                <td className="py-2 px-4"><p className='sm:w-52 w-64'>{item.subject}</p></td>
                                <td className="py-2 px-4"><p className='sm:w-44 w-64'>{item.description.slice(0, 30)}...</p>
                                    <p onClick={() => handleReadMore(item.description)} className='text-red-600 cursor-pointer' >Read more+</p>
                                </td>
                                <td className="py-2 px-4">{item.date}</td>
                                <td className="py-2 px-4">
                                    <button className="bg-green-500 hover:bg-green-600 text-white  px-2 rounded mr-2"><span className="material-symbols-outlined">
                                        done
                                    </span></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal-bg fixed inset-0 bg-black opacity-50"></div>
                    <div className="modal-content  bg-white p-3 sm:w-7/12 w-11/12 sm:h-2/4 sm:p-8  h-52 overflow-scroll sm:overflow-scrolls rounded-lg shadow-lg z-50">
                        <div className='flex justify-between items-end mb-4'>
                            <h2 className="text-2xl font-bold">Description</h2>
                            <p
                                className="bg-red-500 text-white mt-4 py-2 px-2 cursor-pointer rounded hover:bg-red-600"
                                onClick={() => setShowModal(false)} >
                                <span className="material-symbols-outlined">
                                    close
                                </span>
                            </p>
                        </div>
                        <p>{selectedDescription}</p>
                        <button
                            className="bg-red-500 text-white mt-4 py-2 px-4 rounded hover:bg-red-600"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminPanel;
