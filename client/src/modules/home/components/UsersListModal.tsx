import React, { useState } from 'react';
import { Modal, Select, Button } from 'antd';

// Define the types for the props
interface User {
    _id: string;
    name: string;
}

interface UserListModalProps {
    visible: boolean;
    onCancel: () => void;
    onSelectUser: (userId: string) => void;
    users: User[];
}

const UserListModal: React.FC<UserListModalProps> = ({ visible, onCancel, onSelectUser, users }) => {
    const [selectedUser, setSelectedUser] = useState<string | null>(null);

    const handleUserChange = (value: string) => {
        setSelectedUser(value);
    };

    const handleSelect = () => {
        if (selectedUser) {
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
                >
                    {users.map((user) => (
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
