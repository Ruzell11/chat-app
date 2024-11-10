import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import UserListModal from './UsersListModal';
import { ChatData } from '../../common/type';


interface UserChatHeaderInterface {
    chatsData: ChatData[]
}

const UserChatHeader: React.FC<UserChatHeaderInterface> = ({ chatsData }) => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    // Show the modal when the plus button is clicked
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSelectUser = () => {
        setIsModalVisible(false); 
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
                chatsData={chatsData}
            />
        </div>
    );
};

export default UserChatHeader;
