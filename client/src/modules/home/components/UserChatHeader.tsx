import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import UserListModal from './UsersListModal';

// Define the types for the users array
interface User {
    _id: string;
    name: string;
}

const UserChatHeader: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    // Mock list of users (static data)
    const [users] = useState<User[]>([
        { _id: '1', name: 'User A' },
        { _id: '2', name: 'User B' },
        { _id: '3', name: 'User C' },
    ]);

    // Show the modal when the plus button is clicked
    const showModal = () => {
        setIsModalVisible(true);
    };

    // Close the modal
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // Mock starting a chat with the selected user
    const handleSelectUser = (userId: string) => {
        console.log('Starting chat with user:', userId);
        // You can handle starting the chat here (e.g., setting state, routing, etc.)
        setIsModalVisible(false); // Close the modal
    };

    return (
        <div className="flex justify-between items-center py-4">
            <h2 className="text-lg font-bold text-[#e2e5e9]">Chats</h2>
            
            {/* Button to trigger the modal */}
            <Button
                onClick={showModal}
                type="primary"
                shape="circle"
                icon={<PlusOutlined />}
                className="hover:bg-blue-600 transition"
            />
            
            {/* UserListModal */}
            <UserListModal
                visible={isModalVisible}
                onCancel={handleCancel}
                onSelectUser={handleSelectUser}
                users={users} // Pass the mock users here
            />
        </div>
    );
};

export default UserChatHeader;
