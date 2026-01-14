import React, { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';

interface Permission {
  module: string;
  view: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;
}

const PermissionsMatrix: React.FC = () => {
  const [permissions, setPermissions] = useState<Permission[]>([
    { module: 'Users', view: true, create: true, edit: true, delete: false },
    { module: 'Roles', view: true, create: false, edit: true, delete: false },
    { module: 'Settings', view: true, create: false, edit: false, delete: false },
    { module: 'Reports', view: true, create: true, edit: false, delete: false },
  ]);

  const togglePermission = (moduleIndex: number, permission: keyof Permission) => {
    if (permission === 'module') return;
    setPermissions(prev =>
      prev.map((perm, index) =>
        index === moduleIndex ? { ...perm, [permission]: !perm[permission] } : perm
      )
    );
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Permissions Matrix</h2>
        <p className="text-sm text-gray-500 mt-1">Configure role-based permissions</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Module</th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase">View</th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Create</th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Edit</th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {permissions.map((permission, index) => (
              <tr key={permission.module} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <span className="font-medium text-gray-900">{permission.module}</span>
                </td>
                {(['view', 'create', 'edit', 'delete'] as const).map((perm) => (
                  <td key={perm} className="px-6 py-4 text-center">
                    <button
                      onClick={() => togglePermission(index, perm)}
                      className={`p-1 rounded transition-colors ${
                        permission[perm] ? 'text-green-600 hover:text-green-700' : 'text-gray-300 hover:text-gray-400'
                      }`}
                    >
                      {permission[perm] ? <CheckSquare size={20} /> : <Square size={20} />}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PermissionsMatrix;
