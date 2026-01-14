import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface Role {
  id: string;
  name: string;
  description: string;
  userCount: number;
}

const RolesTable: React.FC = () => {
  const [roles] = useState<Role[]>([
    { id: '1', name: 'Super Admin', description: 'Full system access', userCount: 2 },
    { id: '2', name: 'Admin', description: 'Administrative access', userCount: 5 },
    { id: '3', name: 'Manager', description: 'Management access', userCount: 12 },
    { id: '4', name: 'User', description: 'Basic user access', userCount: 45 },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Roles Management</h2>
          <p className="text-sm text-gray-500 mt-1">Manage user roles and permissions</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          <Plus size={18} />
          Add Role
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Role Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Description</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Users</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {roles.map((role) => (
              <tr key={role.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <span className="font-medium text-gray-900">{role.name}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-600">{role.description}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {role.userCount} users
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RolesTable;
