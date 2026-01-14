import { useState } from "react";
import { SettingsTab } from "../../../types/admin/settings/settings.types";
import SettingsSidebar from "../../../components/admin/settings/SettingsSidebar";
import EditProfileForm from "../../../components/admin/settings/EditProfileForm";
import MobileChangeForm from "../../../components/admin/settings/MobileChangeForm";
import PasswordChangeForm from "../../../components/admin/settings/PasswordChangeForm";
import RolesTable from "../../../components/admin/settings/RolesTable";
import PermissionsMatrix from "../../../components/admin/settings/PermissionsMatrix";
import ApprovalRulesTable from "../../../components/admin/settings/ApprovalRulesTable";
import DocumentsUpload from "../../../components/admin/settings/DocumentsUpload";
import ActivityLogsTable from "../../../components/admin/settings/ActivityLogsTable";
import SecuritySettingsForm from "../../../components/admin/settings/SecuritySettingsForm";
import TermsEditor from "../../../components/admin/settings/TermsEditor";
import PolicyEditor from "../../../components/admin/settings/PolicyEditor";

export default function SettingsPage() {
  const [tab, setTab] = useState<SettingsTab>("profile");

  const renderContent = () => {
    switch (tab) {
      case "profile": return <EditProfileForm />;
      case "mobile": return <MobileChangeForm />;
      case "password": return <PasswordChangeForm />;
      case "roles": return <RolesTable />;
      case "permissions": return <PermissionsMatrix />;
      case "approvals": return <ApprovalRulesTable />;
      case "documents": return <DocumentsUpload />;
      case "logs": return <ActivityLogsTable />;
      case "security": return <SecuritySettingsForm />;
      case "terms": return <TermsEditor />;
      case "policy": return <PolicyEditor />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SettingsSidebar active={tab} setActive={setTab} />
      <div className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
