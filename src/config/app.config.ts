interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Inventory Manager'],
  tenantName: 'Vendor',
  applicationName: 'Vintage Rare Item',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage vendors', 'Manage items', 'Manage orders'],
  getQuoteUrl: 'https://app.roq.ai/proposal/97e384cd-4fa7-4a49-9381-bdf8baa24064',
};
