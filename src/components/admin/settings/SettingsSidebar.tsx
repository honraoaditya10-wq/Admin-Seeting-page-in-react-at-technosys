import React from 'react';
import { User, Shield, Lock, Users, CheckSquare, FileText, Activity, ShieldAlert, FileCheck, ScrollText, Phone } from 'lucide-react';
import { SettingsTab } from '../../../types/admin/settings/settings.types';
import { Settings } from 'lucide-react';

interface SettingsSidebarProps {
  active: SettingsTab;
  setActive: (tab: SettingsTab) => void;
}

interface MenuItem {
  id: SettingsTab;
  label: string;
  icon: React.ReactNode;
  category: string;
  badge?: number;
}

const SettingsSidebar: React.FC<SettingsSidebarProps> = ({ active, setActive }) => {
  const menuItems: MenuItem[] = [
    { 
      id: 'profile' as SettingsTab, 
      label: 'Edit Profile', 
      icon: <User size={18} />, 
      category: 'Account' 
    },
    { 
      id: 'mobile' as SettingsTab, 
      label: 'Change Mobile', 
      icon: <Phone size={18} />, 
      category: 'Account' 
    },
    { 
      id: 'password' as SettingsTab, 
      label: 'Change Password', 
      icon: <Lock size={18} />, 
      category: 'Account' 
    },
    { 
      id: 'roles' as SettingsTab, 
      label: 'Manage Roles', 
      icon: <Shield size={18} />, 
      category: 'Access Control' 
    },
    { 
      id: 'permissions' as SettingsTab, 
      label: 'Assign Permissions', 
      icon: <CheckSquare size={18} />, 
      category: 'Access Control' 
    },
    { 
      id: 'approvals' as SettingsTab, 
      label: 'Approval Rules', 
      icon: <FileCheck size={18} />, 
      category: 'Workflow', 
    },
    { 
      id: 'documents' as SettingsTab, 
      label: 'Required Documents', 
      icon: <FileText size={18} />, 
      category: 'Content' 
    },
    { 
      id: 'logs' as SettingsTab, 
      label: 'Activity Logs', 
      icon: <Activity size={18} />, 
      category: 'Monitoring' 
    },
    { 
      id: 'security' as SettingsTab, 
      label: 'Security Settings', 
      icon: <ShieldAlert size={18} />, 
      category: 'Monitoring' 
    },
    { 
      id: 'terms' as SettingsTab, 
      label: 'Terms & Conditions', 
      icon: <ScrollText size={18} />, 
      category: 'Legal' 
    },
    { 
      id: 'policy' as SettingsTab, 
      label: 'Privacy Policy', 
      icon: <Users size={18} />, 
      category: 'Legal' 
    }
  ];

  const categories = ['Account', 'Access Control', 'Workflow', 'Content', 'Monitoring', 'Legal'];

  const getItemsByCategory = (category: string): MenuItem[] => {
    return menuItems.filter(item => item.category === category);
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto flex-shrink-0 shadow-sm">
      {/* Header Section */}
      <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-1">
 <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
  <Settings className="text-white" size={18} />
</div>


            <h2 className="text-xl font-bold text-gray-800">Admin Settings</h2>
          </div>
          <p className="text-sm text-gray-400">Manage your preferences</p>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="px-3 py-4">
        {categories.map((category) => {
          const categoryItems = getItemsByCategory(category);
          
          if (categoryItems.length === 0) return null;

          return (
            <div key={category} className="mb-6">
              <div className="flex items-center gap-2 px-3 mb-2">
                <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
                <h3 className="text-sm font-bold text-gray-700">
                  {category}
                </h3>
              </div>
              <div className="space-y-1">
                {categoryItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={`
                      w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg 
                      text-sm font-medium transition-all duration-200 group relative
                      ${active === item.id 
                        ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow-sm' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span 
                        className={`
                          transition-colors duration-200
                          ${active === item.id 
                            ? 'text-blue-600' 
                            : 'text-gray-400 group-hover:text-gray-600'
                          }
                        `}
                      >
                        {item.icon}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-red-500 text-white text-xs font-semibold rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {active === item.id && (
                      <div className="absolute left-0 w-1 h-8 bg-blue-600 rounded-r-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </nav>

      {/* Footer Section */}
      <div className="sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent p-4 mt-auto">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
          <p className="text-xs text-blue-700 font-medium mb-1">Need Help?</p>
          <p className="text-xs text-blue-600">Contact support for assistance</p>
        </div>
      </div>
    </aside>
  );
};

export default SettingsSidebar;