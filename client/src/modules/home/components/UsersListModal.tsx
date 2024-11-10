import React, { useState } from 'react';
import { Modal, Select, Button } from 'antd';
import { createChat, getAllUsers } from '../service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ChatData, UserData } from '../../common/type';
import { useAuthContext } from '../../common/store/AuthContext';

interface UserListModalProps {
    visible: boolean;
    onCancel: () => void;
    onSelectUser: (userId: string) => void;
    chatsData: ChatData[]
}


const UserListModal: React.FC<UserListModalProps> = ({ visible, onCancel, onSelectUser, chatsData }) => {
    const { userDetails } = useAuthContext() as any;
    const [selectedUser, setSelectedUser] = useState<string | null>(null);
    const queryClient = useQueryClient()

    const { data: allUsersList, isLoading: isAllUsersLoading, isError: isAllUsersError, } = useQuery({
        queryKey: ['users-list'],
        queryFn: () => getAllUsers(),
    });

    const filteredUsersList = allUsersList?.filter((user: UserData) => {
        // Check if user is not the logged-in user
        const isNotCurrentUser = user._id !== userDetails._id;

        // Check if user is not in any existing chat
        const isNotInChat = !chatsData?.some((chat: ChatData) => chat.members.includes(user._id));
        
        return isNotCurrentUser && isNotInChat;
    });


    const chatMutation = useMutation({
        mutationFn: createChat,
        onSuccess: () => {
            queryClient.invalidateQueries('recipientUser');
            setSelectedUser(null);
        },
    })


    const handleUserChange = (value: string) => {
        setSelectedUser(value);
    };

    const handleSelect = () => {
        if (selectedUser) {
            const params = {
                firstId: userDetails._id,
                secondId: selectedUser
            }

            chatMutation.mutate(params)
            onSelectUser(selectedUser);
        }
    };

    return (
        <Modal
            title="Select a User to Chat"
            visible={visible}
            onCancel={onCancel}
            footer={null} // Custom footer
        >
            <div className="flex flex-col space-y-4">
                <Select
                    placeholder="Select a user"
                    value={selectedUser}
                    onChange={handleUserChange}
                    style={{ width: '100%' }}
                    loading={isAllUsersLoading}
                >
                    {filteredUsersList?.map((user: UserData) => (
                        <Select.Option key={user._id} value={user._id}>
                            {user.name}
                        </Select.Option>
                    ))}
                </Select>
                <Button
                    type="primary"
                    onClick={handleSelect}
                    className="w-full bg-blue-500 hover:bg-blue-600"
                >
                    Start Chat
                </Button>
            </div>
        </Modal>
    );
};

export default UserListModal;
